import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model games
 *
 */
export type gamesModel = runtime.Types.Result.DefaultSelection<Prisma.$gamesPayload>;
export type AggregateGames = {
    _count: GamesCountAggregateOutputType | null;
    _min: GamesMinAggregateOutputType | null;
    _max: GamesMaxAggregateOutputType | null;
};
export type GamesMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    slug: string | null;
    created_at: Date | null;
};
export type GamesMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    slug: string | null;
    created_at: Date | null;
};
export type GamesCountAggregateOutputType = {
    id: number;
    name: number;
    slug: number;
    created_at: number;
    _all: number;
};
export type GamesMinAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    created_at?: true;
};
export type GamesMaxAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    created_at?: true;
};
export type GamesCountAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    created_at?: true;
    _all?: true;
};
export type GamesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which games to aggregate.
     */
    where?: Prisma.gamesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of games to fetch.
     */
    orderBy?: Prisma.gamesOrderByWithRelationInput | Prisma.gamesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.gamesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` games from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` games.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned games
    **/
    _count?: true | GamesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: GamesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: GamesMaxAggregateInputType;
};
export type GetGamesAggregateType<T extends GamesAggregateArgs> = {
    [P in keyof T & keyof AggregateGames]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateGames[P]> : Prisma.GetScalarType<T[P], AggregateGames[P]>;
};
export type gamesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.gamesWhereInput;
    orderBy?: Prisma.gamesOrderByWithAggregationInput | Prisma.gamesOrderByWithAggregationInput[];
    by: Prisma.GamesScalarFieldEnum[] | Prisma.GamesScalarFieldEnum;
    having?: Prisma.gamesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GamesCountAggregateInputType | true;
    _min?: GamesMinAggregateInputType;
    _max?: GamesMaxAggregateInputType;
};
export type GamesGroupByOutputType = {
    id: string;
    name: string;
    slug: string;
    created_at: Date;
    _count: GamesCountAggregateOutputType | null;
    _min: GamesMinAggregateOutputType | null;
    _max: GamesMaxAggregateOutputType | null;
};
export type GetGamesGroupByPayload<T extends gamesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<GamesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof GamesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], GamesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], GamesGroupByOutputType[P]>;
}>>;
export type gamesWhereInput = {
    AND?: Prisma.gamesWhereInput | Prisma.gamesWhereInput[];
    OR?: Prisma.gamesWhereInput[];
    NOT?: Prisma.gamesWhereInput | Prisma.gamesWhereInput[];
    id?: Prisma.UuidFilter<"games"> | string;
    name?: Prisma.StringFilter<"games"> | string;
    slug?: Prisma.StringFilter<"games"> | string;
    created_at?: Prisma.DateTimeFilter<"games"> | Date | string;
    canonical_cards?: Prisma.Canonical_cardsListRelationFilter;
    card_printings?: Prisma.Card_printingsListRelationFilter;
    card_sets?: Prisma.Card_setsListRelationFilter;
    collections?: Prisma.CollectionsListRelationFilter;
    store_games?: Prisma.Store_gamesListRelationFilter;
    wishlists?: Prisma.WishlistsListRelationFilter;
};
export type gamesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    canonical_cards?: Prisma.canonical_cardsOrderByRelationAggregateInput;
    card_printings?: Prisma.card_printingsOrderByRelationAggregateInput;
    card_sets?: Prisma.card_setsOrderByRelationAggregateInput;
    collections?: Prisma.collectionsOrderByRelationAggregateInput;
    store_games?: Prisma.store_gamesOrderByRelationAggregateInput;
    wishlists?: Prisma.wishlistsOrderByRelationAggregateInput;
};
export type gamesWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    name?: string;
    slug?: string;
    AND?: Prisma.gamesWhereInput | Prisma.gamesWhereInput[];
    OR?: Prisma.gamesWhereInput[];
    NOT?: Prisma.gamesWhereInput | Prisma.gamesWhereInput[];
    created_at?: Prisma.DateTimeFilter<"games"> | Date | string;
    canonical_cards?: Prisma.Canonical_cardsListRelationFilter;
    card_printings?: Prisma.Card_printingsListRelationFilter;
    card_sets?: Prisma.Card_setsListRelationFilter;
    collections?: Prisma.CollectionsListRelationFilter;
    store_games?: Prisma.Store_gamesListRelationFilter;
    wishlists?: Prisma.WishlistsListRelationFilter;
}, "id" | "name" | "slug">;
export type gamesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.gamesCountOrderByAggregateInput;
    _max?: Prisma.gamesMaxOrderByAggregateInput;
    _min?: Prisma.gamesMinOrderByAggregateInput;
};
export type gamesScalarWhereWithAggregatesInput = {
    AND?: Prisma.gamesScalarWhereWithAggregatesInput | Prisma.gamesScalarWhereWithAggregatesInput[];
    OR?: Prisma.gamesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.gamesScalarWhereWithAggregatesInput | Prisma.gamesScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"games"> | string;
    name?: Prisma.StringWithAggregatesFilter<"games"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"games"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"games"> | Date | string;
};
export type gamesCreateInput = {
    id?: string;
    name: string;
    slug: string;
    created_at?: Date | string;
    canonical_cards?: Prisma.canonical_cardsCreateNestedManyWithoutGamesInput;
    card_printings?: Prisma.card_printingsCreateNestedManyWithoutGamesInput;
    card_sets?: Prisma.card_setsCreateNestedManyWithoutGamesInput;
    collections?: Prisma.collectionsCreateNestedManyWithoutGamesInput;
    store_games?: Prisma.store_gamesCreateNestedManyWithoutGamesInput;
    wishlists?: Prisma.wishlistsCreateNestedManyWithoutGamesInput;
};
export type gamesUncheckedCreateInput = {
    id?: string;
    name: string;
    slug: string;
    created_at?: Date | string;
    canonical_cards?: Prisma.canonical_cardsUncheckedCreateNestedManyWithoutGamesInput;
    card_printings?: Prisma.card_printingsUncheckedCreateNestedManyWithoutGamesInput;
    card_sets?: Prisma.card_setsUncheckedCreateNestedManyWithoutGamesInput;
    collections?: Prisma.collectionsUncheckedCreateNestedManyWithoutGamesInput;
    store_games?: Prisma.store_gamesUncheckedCreateNestedManyWithoutGamesInput;
    wishlists?: Prisma.wishlistsUncheckedCreateNestedManyWithoutGamesInput;
};
export type gamesUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    canonical_cards?: Prisma.canonical_cardsUpdateManyWithoutGamesNestedInput;
    card_printings?: Prisma.card_printingsUpdateManyWithoutGamesNestedInput;
    card_sets?: Prisma.card_setsUpdateManyWithoutGamesNestedInput;
    collections?: Prisma.collectionsUpdateManyWithoutGamesNestedInput;
    store_games?: Prisma.store_gamesUpdateManyWithoutGamesNestedInput;
    wishlists?: Prisma.wishlistsUpdateManyWithoutGamesNestedInput;
};
export type gamesUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    canonical_cards?: Prisma.canonical_cardsUncheckedUpdateManyWithoutGamesNestedInput;
    card_printings?: Prisma.card_printingsUncheckedUpdateManyWithoutGamesNestedInput;
    card_sets?: Prisma.card_setsUncheckedUpdateManyWithoutGamesNestedInput;
    collections?: Prisma.collectionsUncheckedUpdateManyWithoutGamesNestedInput;
    store_games?: Prisma.store_gamesUncheckedUpdateManyWithoutGamesNestedInput;
    wishlists?: Prisma.wishlistsUncheckedUpdateManyWithoutGamesNestedInput;
};
export type gamesCreateManyInput = {
    id?: string;
    name: string;
    slug: string;
    created_at?: Date | string;
};
export type gamesUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type gamesUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GamesScalarRelationFilter = {
    is?: Prisma.gamesWhereInput;
    isNot?: Prisma.gamesWhereInput;
};
export type gamesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type gamesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type gamesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type gamesCreateNestedOneWithoutCanonical_cardsInput = {
    create?: Prisma.XOR<Prisma.gamesCreateWithoutCanonical_cardsInput, Prisma.gamesUncheckedCreateWithoutCanonical_cardsInput>;
    connectOrCreate?: Prisma.gamesCreateOrConnectWithoutCanonical_cardsInput;
    connect?: Prisma.gamesWhereUniqueInput;
};
export type gamesUpdateOneRequiredWithoutCanonical_cardsNestedInput = {
    create?: Prisma.XOR<Prisma.gamesCreateWithoutCanonical_cardsInput, Prisma.gamesUncheckedCreateWithoutCanonical_cardsInput>;
    connectOrCreate?: Prisma.gamesCreateOrConnectWithoutCanonical_cardsInput;
    upsert?: Prisma.gamesUpsertWithoutCanonical_cardsInput;
    connect?: Prisma.gamesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.gamesUpdateToOneWithWhereWithoutCanonical_cardsInput, Prisma.gamesUpdateWithoutCanonical_cardsInput>, Prisma.gamesUncheckedUpdateWithoutCanonical_cardsInput>;
};
export type gamesCreateNestedOneWithoutCard_printingsInput = {
    create?: Prisma.XOR<Prisma.gamesCreateWithoutCard_printingsInput, Prisma.gamesUncheckedCreateWithoutCard_printingsInput>;
    connectOrCreate?: Prisma.gamesCreateOrConnectWithoutCard_printingsInput;
    connect?: Prisma.gamesWhereUniqueInput;
};
export type gamesUpdateOneRequiredWithoutCard_printingsNestedInput = {
    create?: Prisma.XOR<Prisma.gamesCreateWithoutCard_printingsInput, Prisma.gamesUncheckedCreateWithoutCard_printingsInput>;
    connectOrCreate?: Prisma.gamesCreateOrConnectWithoutCard_printingsInput;
    upsert?: Prisma.gamesUpsertWithoutCard_printingsInput;
    connect?: Prisma.gamesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.gamesUpdateToOneWithWhereWithoutCard_printingsInput, Prisma.gamesUpdateWithoutCard_printingsInput>, Prisma.gamesUncheckedUpdateWithoutCard_printingsInput>;
};
export type gamesCreateNestedOneWithoutCard_setsInput = {
    create?: Prisma.XOR<Prisma.gamesCreateWithoutCard_setsInput, Prisma.gamesUncheckedCreateWithoutCard_setsInput>;
    connectOrCreate?: Prisma.gamesCreateOrConnectWithoutCard_setsInput;
    connect?: Prisma.gamesWhereUniqueInput;
};
export type gamesUpdateOneRequiredWithoutCard_setsNestedInput = {
    create?: Prisma.XOR<Prisma.gamesCreateWithoutCard_setsInput, Prisma.gamesUncheckedCreateWithoutCard_setsInput>;
    connectOrCreate?: Prisma.gamesCreateOrConnectWithoutCard_setsInput;
    upsert?: Prisma.gamesUpsertWithoutCard_setsInput;
    connect?: Prisma.gamesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.gamesUpdateToOneWithWhereWithoutCard_setsInput, Prisma.gamesUpdateWithoutCard_setsInput>, Prisma.gamesUncheckedUpdateWithoutCard_setsInput>;
};
export type gamesCreateNestedOneWithoutCollectionsInput = {
    create?: Prisma.XOR<Prisma.gamesCreateWithoutCollectionsInput, Prisma.gamesUncheckedCreateWithoutCollectionsInput>;
    connectOrCreate?: Prisma.gamesCreateOrConnectWithoutCollectionsInput;
    connect?: Prisma.gamesWhereUniqueInput;
};
export type gamesUpdateOneRequiredWithoutCollectionsNestedInput = {
    create?: Prisma.XOR<Prisma.gamesCreateWithoutCollectionsInput, Prisma.gamesUncheckedCreateWithoutCollectionsInput>;
    connectOrCreate?: Prisma.gamesCreateOrConnectWithoutCollectionsInput;
    upsert?: Prisma.gamesUpsertWithoutCollectionsInput;
    connect?: Prisma.gamesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.gamesUpdateToOneWithWhereWithoutCollectionsInput, Prisma.gamesUpdateWithoutCollectionsInput>, Prisma.gamesUncheckedUpdateWithoutCollectionsInput>;
};
export type gamesCreateNestedOneWithoutWishlistsInput = {
    create?: Prisma.XOR<Prisma.gamesCreateWithoutWishlistsInput, Prisma.gamesUncheckedCreateWithoutWishlistsInput>;
    connectOrCreate?: Prisma.gamesCreateOrConnectWithoutWishlistsInput;
    connect?: Prisma.gamesWhereUniqueInput;
};
export type gamesUpdateOneRequiredWithoutWishlistsNestedInput = {
    create?: Prisma.XOR<Prisma.gamesCreateWithoutWishlistsInput, Prisma.gamesUncheckedCreateWithoutWishlistsInput>;
    connectOrCreate?: Prisma.gamesCreateOrConnectWithoutWishlistsInput;
    upsert?: Prisma.gamesUpsertWithoutWishlistsInput;
    connect?: Prisma.gamesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.gamesUpdateToOneWithWhereWithoutWishlistsInput, Prisma.gamesUpdateWithoutWishlistsInput>, Prisma.gamesUncheckedUpdateWithoutWishlistsInput>;
};
export type gamesCreateNestedOneWithoutStore_gamesInput = {
    create?: Prisma.XOR<Prisma.gamesCreateWithoutStore_gamesInput, Prisma.gamesUncheckedCreateWithoutStore_gamesInput>;
    connectOrCreate?: Prisma.gamesCreateOrConnectWithoutStore_gamesInput;
    connect?: Prisma.gamesWhereUniqueInput;
};
export type gamesUpdateOneRequiredWithoutStore_gamesNestedInput = {
    create?: Prisma.XOR<Prisma.gamesCreateWithoutStore_gamesInput, Prisma.gamesUncheckedCreateWithoutStore_gamesInput>;
    connectOrCreate?: Prisma.gamesCreateOrConnectWithoutStore_gamesInput;
    upsert?: Prisma.gamesUpsertWithoutStore_gamesInput;
    connect?: Prisma.gamesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.gamesUpdateToOneWithWhereWithoutStore_gamesInput, Prisma.gamesUpdateWithoutStore_gamesInput>, Prisma.gamesUncheckedUpdateWithoutStore_gamesInput>;
};
export type gamesCreateWithoutCanonical_cardsInput = {
    id?: string;
    name: string;
    slug: string;
    created_at?: Date | string;
    card_printings?: Prisma.card_printingsCreateNestedManyWithoutGamesInput;
    card_sets?: Prisma.card_setsCreateNestedManyWithoutGamesInput;
    collections?: Prisma.collectionsCreateNestedManyWithoutGamesInput;
    store_games?: Prisma.store_gamesCreateNestedManyWithoutGamesInput;
    wishlists?: Prisma.wishlistsCreateNestedManyWithoutGamesInput;
};
export type gamesUncheckedCreateWithoutCanonical_cardsInput = {
    id?: string;
    name: string;
    slug: string;
    created_at?: Date | string;
    card_printings?: Prisma.card_printingsUncheckedCreateNestedManyWithoutGamesInput;
    card_sets?: Prisma.card_setsUncheckedCreateNestedManyWithoutGamesInput;
    collections?: Prisma.collectionsUncheckedCreateNestedManyWithoutGamesInput;
    store_games?: Prisma.store_gamesUncheckedCreateNestedManyWithoutGamesInput;
    wishlists?: Prisma.wishlistsUncheckedCreateNestedManyWithoutGamesInput;
};
export type gamesCreateOrConnectWithoutCanonical_cardsInput = {
    where: Prisma.gamesWhereUniqueInput;
    create: Prisma.XOR<Prisma.gamesCreateWithoutCanonical_cardsInput, Prisma.gamesUncheckedCreateWithoutCanonical_cardsInput>;
};
export type gamesUpsertWithoutCanonical_cardsInput = {
    update: Prisma.XOR<Prisma.gamesUpdateWithoutCanonical_cardsInput, Prisma.gamesUncheckedUpdateWithoutCanonical_cardsInput>;
    create: Prisma.XOR<Prisma.gamesCreateWithoutCanonical_cardsInput, Prisma.gamesUncheckedCreateWithoutCanonical_cardsInput>;
    where?: Prisma.gamesWhereInput;
};
export type gamesUpdateToOneWithWhereWithoutCanonical_cardsInput = {
    where?: Prisma.gamesWhereInput;
    data: Prisma.XOR<Prisma.gamesUpdateWithoutCanonical_cardsInput, Prisma.gamesUncheckedUpdateWithoutCanonical_cardsInput>;
};
export type gamesUpdateWithoutCanonical_cardsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    card_printings?: Prisma.card_printingsUpdateManyWithoutGamesNestedInput;
    card_sets?: Prisma.card_setsUpdateManyWithoutGamesNestedInput;
    collections?: Prisma.collectionsUpdateManyWithoutGamesNestedInput;
    store_games?: Prisma.store_gamesUpdateManyWithoutGamesNestedInput;
    wishlists?: Prisma.wishlistsUpdateManyWithoutGamesNestedInput;
};
export type gamesUncheckedUpdateWithoutCanonical_cardsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    card_printings?: Prisma.card_printingsUncheckedUpdateManyWithoutGamesNestedInput;
    card_sets?: Prisma.card_setsUncheckedUpdateManyWithoutGamesNestedInput;
    collections?: Prisma.collectionsUncheckedUpdateManyWithoutGamesNestedInput;
    store_games?: Prisma.store_gamesUncheckedUpdateManyWithoutGamesNestedInput;
    wishlists?: Prisma.wishlistsUncheckedUpdateManyWithoutGamesNestedInput;
};
export type gamesCreateWithoutCard_printingsInput = {
    id?: string;
    name: string;
    slug: string;
    created_at?: Date | string;
    canonical_cards?: Prisma.canonical_cardsCreateNestedManyWithoutGamesInput;
    card_sets?: Prisma.card_setsCreateNestedManyWithoutGamesInput;
    collections?: Prisma.collectionsCreateNestedManyWithoutGamesInput;
    store_games?: Prisma.store_gamesCreateNestedManyWithoutGamesInput;
    wishlists?: Prisma.wishlistsCreateNestedManyWithoutGamesInput;
};
export type gamesUncheckedCreateWithoutCard_printingsInput = {
    id?: string;
    name: string;
    slug: string;
    created_at?: Date | string;
    canonical_cards?: Prisma.canonical_cardsUncheckedCreateNestedManyWithoutGamesInput;
    card_sets?: Prisma.card_setsUncheckedCreateNestedManyWithoutGamesInput;
    collections?: Prisma.collectionsUncheckedCreateNestedManyWithoutGamesInput;
    store_games?: Prisma.store_gamesUncheckedCreateNestedManyWithoutGamesInput;
    wishlists?: Prisma.wishlistsUncheckedCreateNestedManyWithoutGamesInput;
};
export type gamesCreateOrConnectWithoutCard_printingsInput = {
    where: Prisma.gamesWhereUniqueInput;
    create: Prisma.XOR<Prisma.gamesCreateWithoutCard_printingsInput, Prisma.gamesUncheckedCreateWithoutCard_printingsInput>;
};
export type gamesUpsertWithoutCard_printingsInput = {
    update: Prisma.XOR<Prisma.gamesUpdateWithoutCard_printingsInput, Prisma.gamesUncheckedUpdateWithoutCard_printingsInput>;
    create: Prisma.XOR<Prisma.gamesCreateWithoutCard_printingsInput, Prisma.gamesUncheckedCreateWithoutCard_printingsInput>;
    where?: Prisma.gamesWhereInput;
};
export type gamesUpdateToOneWithWhereWithoutCard_printingsInput = {
    where?: Prisma.gamesWhereInput;
    data: Prisma.XOR<Prisma.gamesUpdateWithoutCard_printingsInput, Prisma.gamesUncheckedUpdateWithoutCard_printingsInput>;
};
export type gamesUpdateWithoutCard_printingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    canonical_cards?: Prisma.canonical_cardsUpdateManyWithoutGamesNestedInput;
    card_sets?: Prisma.card_setsUpdateManyWithoutGamesNestedInput;
    collections?: Prisma.collectionsUpdateManyWithoutGamesNestedInput;
    store_games?: Prisma.store_gamesUpdateManyWithoutGamesNestedInput;
    wishlists?: Prisma.wishlistsUpdateManyWithoutGamesNestedInput;
};
export type gamesUncheckedUpdateWithoutCard_printingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    canonical_cards?: Prisma.canonical_cardsUncheckedUpdateManyWithoutGamesNestedInput;
    card_sets?: Prisma.card_setsUncheckedUpdateManyWithoutGamesNestedInput;
    collections?: Prisma.collectionsUncheckedUpdateManyWithoutGamesNestedInput;
    store_games?: Prisma.store_gamesUncheckedUpdateManyWithoutGamesNestedInput;
    wishlists?: Prisma.wishlistsUncheckedUpdateManyWithoutGamesNestedInput;
};
export type gamesCreateWithoutCard_setsInput = {
    id?: string;
    name: string;
    slug: string;
    created_at?: Date | string;
    canonical_cards?: Prisma.canonical_cardsCreateNestedManyWithoutGamesInput;
    card_printings?: Prisma.card_printingsCreateNestedManyWithoutGamesInput;
    collections?: Prisma.collectionsCreateNestedManyWithoutGamesInput;
    store_games?: Prisma.store_gamesCreateNestedManyWithoutGamesInput;
    wishlists?: Prisma.wishlistsCreateNestedManyWithoutGamesInput;
};
export type gamesUncheckedCreateWithoutCard_setsInput = {
    id?: string;
    name: string;
    slug: string;
    created_at?: Date | string;
    canonical_cards?: Prisma.canonical_cardsUncheckedCreateNestedManyWithoutGamesInput;
    card_printings?: Prisma.card_printingsUncheckedCreateNestedManyWithoutGamesInput;
    collections?: Prisma.collectionsUncheckedCreateNestedManyWithoutGamesInput;
    store_games?: Prisma.store_gamesUncheckedCreateNestedManyWithoutGamesInput;
    wishlists?: Prisma.wishlistsUncheckedCreateNestedManyWithoutGamesInput;
};
export type gamesCreateOrConnectWithoutCard_setsInput = {
    where: Prisma.gamesWhereUniqueInput;
    create: Prisma.XOR<Prisma.gamesCreateWithoutCard_setsInput, Prisma.gamesUncheckedCreateWithoutCard_setsInput>;
};
export type gamesUpsertWithoutCard_setsInput = {
    update: Prisma.XOR<Prisma.gamesUpdateWithoutCard_setsInput, Prisma.gamesUncheckedUpdateWithoutCard_setsInput>;
    create: Prisma.XOR<Prisma.gamesCreateWithoutCard_setsInput, Prisma.gamesUncheckedCreateWithoutCard_setsInput>;
    where?: Prisma.gamesWhereInput;
};
export type gamesUpdateToOneWithWhereWithoutCard_setsInput = {
    where?: Prisma.gamesWhereInput;
    data: Prisma.XOR<Prisma.gamesUpdateWithoutCard_setsInput, Prisma.gamesUncheckedUpdateWithoutCard_setsInput>;
};
export type gamesUpdateWithoutCard_setsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    canonical_cards?: Prisma.canonical_cardsUpdateManyWithoutGamesNestedInput;
    card_printings?: Prisma.card_printingsUpdateManyWithoutGamesNestedInput;
    collections?: Prisma.collectionsUpdateManyWithoutGamesNestedInput;
    store_games?: Prisma.store_gamesUpdateManyWithoutGamesNestedInput;
    wishlists?: Prisma.wishlistsUpdateManyWithoutGamesNestedInput;
};
export type gamesUncheckedUpdateWithoutCard_setsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    canonical_cards?: Prisma.canonical_cardsUncheckedUpdateManyWithoutGamesNestedInput;
    card_printings?: Prisma.card_printingsUncheckedUpdateManyWithoutGamesNestedInput;
    collections?: Prisma.collectionsUncheckedUpdateManyWithoutGamesNestedInput;
    store_games?: Prisma.store_gamesUncheckedUpdateManyWithoutGamesNestedInput;
    wishlists?: Prisma.wishlistsUncheckedUpdateManyWithoutGamesNestedInput;
};
export type gamesCreateWithoutCollectionsInput = {
    id?: string;
    name: string;
    slug: string;
    created_at?: Date | string;
    canonical_cards?: Prisma.canonical_cardsCreateNestedManyWithoutGamesInput;
    card_printings?: Prisma.card_printingsCreateNestedManyWithoutGamesInput;
    card_sets?: Prisma.card_setsCreateNestedManyWithoutGamesInput;
    store_games?: Prisma.store_gamesCreateNestedManyWithoutGamesInput;
    wishlists?: Prisma.wishlistsCreateNestedManyWithoutGamesInput;
};
export type gamesUncheckedCreateWithoutCollectionsInput = {
    id?: string;
    name: string;
    slug: string;
    created_at?: Date | string;
    canonical_cards?: Prisma.canonical_cardsUncheckedCreateNestedManyWithoutGamesInput;
    card_printings?: Prisma.card_printingsUncheckedCreateNestedManyWithoutGamesInput;
    card_sets?: Prisma.card_setsUncheckedCreateNestedManyWithoutGamesInput;
    store_games?: Prisma.store_gamesUncheckedCreateNestedManyWithoutGamesInput;
    wishlists?: Prisma.wishlistsUncheckedCreateNestedManyWithoutGamesInput;
};
export type gamesCreateOrConnectWithoutCollectionsInput = {
    where: Prisma.gamesWhereUniqueInput;
    create: Prisma.XOR<Prisma.gamesCreateWithoutCollectionsInput, Prisma.gamesUncheckedCreateWithoutCollectionsInput>;
};
export type gamesUpsertWithoutCollectionsInput = {
    update: Prisma.XOR<Prisma.gamesUpdateWithoutCollectionsInput, Prisma.gamesUncheckedUpdateWithoutCollectionsInput>;
    create: Prisma.XOR<Prisma.gamesCreateWithoutCollectionsInput, Prisma.gamesUncheckedCreateWithoutCollectionsInput>;
    where?: Prisma.gamesWhereInput;
};
export type gamesUpdateToOneWithWhereWithoutCollectionsInput = {
    where?: Prisma.gamesWhereInput;
    data: Prisma.XOR<Prisma.gamesUpdateWithoutCollectionsInput, Prisma.gamesUncheckedUpdateWithoutCollectionsInput>;
};
export type gamesUpdateWithoutCollectionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    canonical_cards?: Prisma.canonical_cardsUpdateManyWithoutGamesNestedInput;
    card_printings?: Prisma.card_printingsUpdateManyWithoutGamesNestedInput;
    card_sets?: Prisma.card_setsUpdateManyWithoutGamesNestedInput;
    store_games?: Prisma.store_gamesUpdateManyWithoutGamesNestedInput;
    wishlists?: Prisma.wishlistsUpdateManyWithoutGamesNestedInput;
};
export type gamesUncheckedUpdateWithoutCollectionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    canonical_cards?: Prisma.canonical_cardsUncheckedUpdateManyWithoutGamesNestedInput;
    card_printings?: Prisma.card_printingsUncheckedUpdateManyWithoutGamesNestedInput;
    card_sets?: Prisma.card_setsUncheckedUpdateManyWithoutGamesNestedInput;
    store_games?: Prisma.store_gamesUncheckedUpdateManyWithoutGamesNestedInput;
    wishlists?: Prisma.wishlistsUncheckedUpdateManyWithoutGamesNestedInput;
};
export type gamesCreateWithoutWishlistsInput = {
    id?: string;
    name: string;
    slug: string;
    created_at?: Date | string;
    canonical_cards?: Prisma.canonical_cardsCreateNestedManyWithoutGamesInput;
    card_printings?: Prisma.card_printingsCreateNestedManyWithoutGamesInput;
    card_sets?: Prisma.card_setsCreateNestedManyWithoutGamesInput;
    collections?: Prisma.collectionsCreateNestedManyWithoutGamesInput;
    store_games?: Prisma.store_gamesCreateNestedManyWithoutGamesInput;
};
export type gamesUncheckedCreateWithoutWishlistsInput = {
    id?: string;
    name: string;
    slug: string;
    created_at?: Date | string;
    canonical_cards?: Prisma.canonical_cardsUncheckedCreateNestedManyWithoutGamesInput;
    card_printings?: Prisma.card_printingsUncheckedCreateNestedManyWithoutGamesInput;
    card_sets?: Prisma.card_setsUncheckedCreateNestedManyWithoutGamesInput;
    collections?: Prisma.collectionsUncheckedCreateNestedManyWithoutGamesInput;
    store_games?: Prisma.store_gamesUncheckedCreateNestedManyWithoutGamesInput;
};
export type gamesCreateOrConnectWithoutWishlistsInput = {
    where: Prisma.gamesWhereUniqueInput;
    create: Prisma.XOR<Prisma.gamesCreateWithoutWishlistsInput, Prisma.gamesUncheckedCreateWithoutWishlistsInput>;
};
export type gamesUpsertWithoutWishlistsInput = {
    update: Prisma.XOR<Prisma.gamesUpdateWithoutWishlistsInput, Prisma.gamesUncheckedUpdateWithoutWishlistsInput>;
    create: Prisma.XOR<Prisma.gamesCreateWithoutWishlistsInput, Prisma.gamesUncheckedCreateWithoutWishlistsInput>;
    where?: Prisma.gamesWhereInput;
};
export type gamesUpdateToOneWithWhereWithoutWishlistsInput = {
    where?: Prisma.gamesWhereInput;
    data: Prisma.XOR<Prisma.gamesUpdateWithoutWishlistsInput, Prisma.gamesUncheckedUpdateWithoutWishlistsInput>;
};
export type gamesUpdateWithoutWishlistsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    canonical_cards?: Prisma.canonical_cardsUpdateManyWithoutGamesNestedInput;
    card_printings?: Prisma.card_printingsUpdateManyWithoutGamesNestedInput;
    card_sets?: Prisma.card_setsUpdateManyWithoutGamesNestedInput;
    collections?: Prisma.collectionsUpdateManyWithoutGamesNestedInput;
    store_games?: Prisma.store_gamesUpdateManyWithoutGamesNestedInput;
};
export type gamesUncheckedUpdateWithoutWishlistsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    canonical_cards?: Prisma.canonical_cardsUncheckedUpdateManyWithoutGamesNestedInput;
    card_printings?: Prisma.card_printingsUncheckedUpdateManyWithoutGamesNestedInput;
    card_sets?: Prisma.card_setsUncheckedUpdateManyWithoutGamesNestedInput;
    collections?: Prisma.collectionsUncheckedUpdateManyWithoutGamesNestedInput;
    store_games?: Prisma.store_gamesUncheckedUpdateManyWithoutGamesNestedInput;
};
export type gamesCreateWithoutStore_gamesInput = {
    id?: string;
    name: string;
    slug: string;
    created_at?: Date | string;
    canonical_cards?: Prisma.canonical_cardsCreateNestedManyWithoutGamesInput;
    card_printings?: Prisma.card_printingsCreateNestedManyWithoutGamesInput;
    card_sets?: Prisma.card_setsCreateNestedManyWithoutGamesInput;
    collections?: Prisma.collectionsCreateNestedManyWithoutGamesInput;
    wishlists?: Prisma.wishlistsCreateNestedManyWithoutGamesInput;
};
export type gamesUncheckedCreateWithoutStore_gamesInput = {
    id?: string;
    name: string;
    slug: string;
    created_at?: Date | string;
    canonical_cards?: Prisma.canonical_cardsUncheckedCreateNestedManyWithoutGamesInput;
    card_printings?: Prisma.card_printingsUncheckedCreateNestedManyWithoutGamesInput;
    card_sets?: Prisma.card_setsUncheckedCreateNestedManyWithoutGamesInput;
    collections?: Prisma.collectionsUncheckedCreateNestedManyWithoutGamesInput;
    wishlists?: Prisma.wishlistsUncheckedCreateNestedManyWithoutGamesInput;
};
export type gamesCreateOrConnectWithoutStore_gamesInput = {
    where: Prisma.gamesWhereUniqueInput;
    create: Prisma.XOR<Prisma.gamesCreateWithoutStore_gamesInput, Prisma.gamesUncheckedCreateWithoutStore_gamesInput>;
};
export type gamesUpsertWithoutStore_gamesInput = {
    update: Prisma.XOR<Prisma.gamesUpdateWithoutStore_gamesInput, Prisma.gamesUncheckedUpdateWithoutStore_gamesInput>;
    create: Prisma.XOR<Prisma.gamesCreateWithoutStore_gamesInput, Prisma.gamesUncheckedCreateWithoutStore_gamesInput>;
    where?: Prisma.gamesWhereInput;
};
export type gamesUpdateToOneWithWhereWithoutStore_gamesInput = {
    where?: Prisma.gamesWhereInput;
    data: Prisma.XOR<Prisma.gamesUpdateWithoutStore_gamesInput, Prisma.gamesUncheckedUpdateWithoutStore_gamesInput>;
};
export type gamesUpdateWithoutStore_gamesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    canonical_cards?: Prisma.canonical_cardsUpdateManyWithoutGamesNestedInput;
    card_printings?: Prisma.card_printingsUpdateManyWithoutGamesNestedInput;
    card_sets?: Prisma.card_setsUpdateManyWithoutGamesNestedInput;
    collections?: Prisma.collectionsUpdateManyWithoutGamesNestedInput;
    wishlists?: Prisma.wishlistsUpdateManyWithoutGamesNestedInput;
};
export type gamesUncheckedUpdateWithoutStore_gamesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    canonical_cards?: Prisma.canonical_cardsUncheckedUpdateManyWithoutGamesNestedInput;
    card_printings?: Prisma.card_printingsUncheckedUpdateManyWithoutGamesNestedInput;
    card_sets?: Prisma.card_setsUncheckedUpdateManyWithoutGamesNestedInput;
    collections?: Prisma.collectionsUncheckedUpdateManyWithoutGamesNestedInput;
    wishlists?: Prisma.wishlistsUncheckedUpdateManyWithoutGamesNestedInput;
};
/**
 * Count Type GamesCountOutputType
 */
export type GamesCountOutputType = {
    canonical_cards: number;
    card_printings: number;
    card_sets: number;
    collections: number;
    store_games: number;
    wishlists: number;
};
export type GamesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    canonical_cards?: boolean | GamesCountOutputTypeCountCanonical_cardsArgs;
    card_printings?: boolean | GamesCountOutputTypeCountCard_printingsArgs;
    card_sets?: boolean | GamesCountOutputTypeCountCard_setsArgs;
    collections?: boolean | GamesCountOutputTypeCountCollectionsArgs;
    store_games?: boolean | GamesCountOutputTypeCountStore_gamesArgs;
    wishlists?: boolean | GamesCountOutputTypeCountWishlistsArgs;
};
/**
 * GamesCountOutputType without action
 */
export type GamesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamesCountOutputType
     */
    select?: Prisma.GamesCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * GamesCountOutputType without action
 */
export type GamesCountOutputTypeCountCanonical_cardsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.canonical_cardsWhereInput;
};
/**
 * GamesCountOutputType without action
 */
export type GamesCountOutputTypeCountCard_printingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.card_printingsWhereInput;
};
/**
 * GamesCountOutputType without action
 */
export type GamesCountOutputTypeCountCard_setsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.card_setsWhereInput;
};
/**
 * GamesCountOutputType without action
 */
export type GamesCountOutputTypeCountCollectionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.collectionsWhereInput;
};
/**
 * GamesCountOutputType without action
 */
export type GamesCountOutputTypeCountStore_gamesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.store_gamesWhereInput;
};
/**
 * GamesCountOutputType without action
 */
export type GamesCountOutputTypeCountWishlistsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.wishlistsWhereInput;
};
export type gamesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    created_at?: boolean;
    canonical_cards?: boolean | Prisma.games$canonical_cardsArgs<ExtArgs>;
    card_printings?: boolean | Prisma.games$card_printingsArgs<ExtArgs>;
    card_sets?: boolean | Prisma.games$card_setsArgs<ExtArgs>;
    collections?: boolean | Prisma.games$collectionsArgs<ExtArgs>;
    store_games?: boolean | Prisma.games$store_gamesArgs<ExtArgs>;
    wishlists?: boolean | Prisma.games$wishlistsArgs<ExtArgs>;
    _count?: boolean | Prisma.GamesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["games"]>;
export type gamesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["games"]>;
export type gamesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["games"]>;
export type gamesSelectScalar = {
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    created_at?: boolean;
};
export type gamesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "slug" | "created_at", ExtArgs["result"]["games"]>;
export type gamesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    canonical_cards?: boolean | Prisma.games$canonical_cardsArgs<ExtArgs>;
    card_printings?: boolean | Prisma.games$card_printingsArgs<ExtArgs>;
    card_sets?: boolean | Prisma.games$card_setsArgs<ExtArgs>;
    collections?: boolean | Prisma.games$collectionsArgs<ExtArgs>;
    store_games?: boolean | Prisma.games$store_gamesArgs<ExtArgs>;
    wishlists?: boolean | Prisma.games$wishlistsArgs<ExtArgs>;
    _count?: boolean | Prisma.GamesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type gamesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type gamesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $gamesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "games";
    objects: {
        canonical_cards: Prisma.$canonical_cardsPayload<ExtArgs>[];
        card_printings: Prisma.$card_printingsPayload<ExtArgs>[];
        card_sets: Prisma.$card_setsPayload<ExtArgs>[];
        collections: Prisma.$collectionsPayload<ExtArgs>[];
        store_games: Prisma.$store_gamesPayload<ExtArgs>[];
        wishlists: Prisma.$wishlistsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        slug: string;
        created_at: Date;
    }, ExtArgs["result"]["games"]>;
    composites: {};
};
export type gamesGetPayload<S extends boolean | null | undefined | gamesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$gamesPayload, S>;
export type gamesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<gamesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: GamesCountAggregateInputType | true;
};
export interface gamesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['games'];
        meta: {
            name: 'games';
        };
    };
    /**
     * Find zero or one Games that matches the filter.
     * @param {gamesFindUniqueArgs} args - Arguments to find a Games
     * @example
     * // Get one Games
     * const games = await prisma.games.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends gamesFindUniqueArgs>(args: Prisma.SelectSubset<T, gamesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__gamesClient<runtime.Types.Result.GetResult<Prisma.$gamesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Games that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {gamesFindUniqueOrThrowArgs} args - Arguments to find a Games
     * @example
     * // Get one Games
     * const games = await prisma.games.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends gamesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, gamesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__gamesClient<runtime.Types.Result.GetResult<Prisma.$gamesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gamesFindFirstArgs} args - Arguments to find a Games
     * @example
     * // Get one Games
     * const games = await prisma.games.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends gamesFindFirstArgs>(args?: Prisma.SelectSubset<T, gamesFindFirstArgs<ExtArgs>>): Prisma.Prisma__gamesClient<runtime.Types.Result.GetResult<Prisma.$gamesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Games that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gamesFindFirstOrThrowArgs} args - Arguments to find a Games
     * @example
     * // Get one Games
     * const games = await prisma.games.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends gamesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, gamesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__gamesClient<runtime.Types.Result.GetResult<Prisma.$gamesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gamesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.games.findMany()
     *
     * // Get first 10 Games
     * const games = await prisma.games.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const gamesWithIdOnly = await prisma.games.findMany({ select: { id: true } })
     *
     */
    findMany<T extends gamesFindManyArgs>(args?: Prisma.SelectSubset<T, gamesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$gamesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Games.
     * @param {gamesCreateArgs} args - Arguments to create a Games.
     * @example
     * // Create one Games
     * const Games = await prisma.games.create({
     *   data: {
     *     // ... data to create a Games
     *   }
     * })
     *
     */
    create<T extends gamesCreateArgs>(args: Prisma.SelectSubset<T, gamesCreateArgs<ExtArgs>>): Prisma.Prisma__gamesClient<runtime.Types.Result.GetResult<Prisma.$gamesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Games.
     * @param {gamesCreateManyArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const games = await prisma.games.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends gamesCreateManyArgs>(args?: Prisma.SelectSubset<T, gamesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Games and returns the data saved in the database.
     * @param {gamesCreateManyAndReturnArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const games = await prisma.games.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Games and only return the `id`
     * const gamesWithIdOnly = await prisma.games.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends gamesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, gamesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$gamesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Games.
     * @param {gamesDeleteArgs} args - Arguments to delete one Games.
     * @example
     * // Delete one Games
     * const Games = await prisma.games.delete({
     *   where: {
     *     // ... filter to delete one Games
     *   }
     * })
     *
     */
    delete<T extends gamesDeleteArgs>(args: Prisma.SelectSubset<T, gamesDeleteArgs<ExtArgs>>): Prisma.Prisma__gamesClient<runtime.Types.Result.GetResult<Prisma.$gamesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Games.
     * @param {gamesUpdateArgs} args - Arguments to update one Games.
     * @example
     * // Update one Games
     * const games = await prisma.games.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends gamesUpdateArgs>(args: Prisma.SelectSubset<T, gamesUpdateArgs<ExtArgs>>): Prisma.Prisma__gamesClient<runtime.Types.Result.GetResult<Prisma.$gamesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Games.
     * @param {gamesDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.games.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends gamesDeleteManyArgs>(args?: Prisma.SelectSubset<T, gamesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gamesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const games = await prisma.games.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends gamesUpdateManyArgs>(args: Prisma.SelectSubset<T, gamesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Games and returns the data updated in the database.
     * @param {gamesUpdateManyAndReturnArgs} args - Arguments to update many Games.
     * @example
     * // Update many Games
     * const games = await prisma.games.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Games and only return the `id`
     * const gamesWithIdOnly = await prisma.games.updateManyAndReturn({
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
    updateManyAndReturn<T extends gamesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, gamesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$gamesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Games.
     * @param {gamesUpsertArgs} args - Arguments to update or create a Games.
     * @example
     * // Update or create a Games
     * const games = await prisma.games.upsert({
     *   create: {
     *     // ... data to create a Games
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Games we want to update
     *   }
     * })
     */
    upsert<T extends gamesUpsertArgs>(args: Prisma.SelectSubset<T, gamesUpsertArgs<ExtArgs>>): Prisma.Prisma__gamesClient<runtime.Types.Result.GetResult<Prisma.$gamesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gamesCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.games.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends gamesCountArgs>(args?: Prisma.Subset<T, gamesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], GamesCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GamesAggregateArgs>(args: Prisma.Subset<T, GamesAggregateArgs>): Prisma.PrismaPromise<GetGamesAggregateType<T>>;
    /**
     * Group by Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gamesGroupByArgs} args - Group by arguments.
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
    groupBy<T extends gamesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: gamesGroupByArgs['orderBy'];
    } : {
        orderBy?: gamesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, gamesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGamesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the games model
     */
    readonly fields: gamesFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for games.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__gamesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    canonical_cards<T extends Prisma.games$canonical_cardsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.games$canonical_cardsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$canonical_cardsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    card_printings<T extends Prisma.games$card_printingsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.games$card_printingsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$card_printingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    card_sets<T extends Prisma.games$card_setsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.games$card_setsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$card_setsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    collections<T extends Prisma.games$collectionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.games$collectionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$collectionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    store_games<T extends Prisma.games$store_gamesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.games$store_gamesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$store_gamesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    wishlists<T extends Prisma.games$wishlistsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.games$wishlistsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$wishlistsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the games model
 */
export interface gamesFieldRefs {
    readonly id: Prisma.FieldRef<"games", 'String'>;
    readonly name: Prisma.FieldRef<"games", 'String'>;
    readonly slug: Prisma.FieldRef<"games", 'String'>;
    readonly created_at: Prisma.FieldRef<"games", 'DateTime'>;
}
/**
 * games findUnique
 */
export type gamesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the games
     */
    select?: Prisma.gamesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the games
     */
    omit?: Prisma.gamesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.gamesInclude<ExtArgs> | null;
    /**
     * Filter, which games to fetch.
     */
    where: Prisma.gamesWhereUniqueInput;
};
/**
 * games findUniqueOrThrow
 */
export type gamesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the games
     */
    select?: Prisma.gamesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the games
     */
    omit?: Prisma.gamesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.gamesInclude<ExtArgs> | null;
    /**
     * Filter, which games to fetch.
     */
    where: Prisma.gamesWhereUniqueInput;
};
/**
 * games findFirst
 */
export type gamesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the games
     */
    select?: Prisma.gamesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the games
     */
    omit?: Prisma.gamesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.gamesInclude<ExtArgs> | null;
    /**
     * Filter, which games to fetch.
     */
    where?: Prisma.gamesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of games to fetch.
     */
    orderBy?: Prisma.gamesOrderByWithRelationInput | Prisma.gamesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for games.
     */
    cursor?: Prisma.gamesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` games from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` games.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of games.
     */
    distinct?: Prisma.GamesScalarFieldEnum | Prisma.GamesScalarFieldEnum[];
};
/**
 * games findFirstOrThrow
 */
export type gamesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the games
     */
    select?: Prisma.gamesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the games
     */
    omit?: Prisma.gamesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.gamesInclude<ExtArgs> | null;
    /**
     * Filter, which games to fetch.
     */
    where?: Prisma.gamesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of games to fetch.
     */
    orderBy?: Prisma.gamesOrderByWithRelationInput | Prisma.gamesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for games.
     */
    cursor?: Prisma.gamesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` games from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` games.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of games.
     */
    distinct?: Prisma.GamesScalarFieldEnum | Prisma.GamesScalarFieldEnum[];
};
/**
 * games findMany
 */
export type gamesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the games
     */
    select?: Prisma.gamesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the games
     */
    omit?: Prisma.gamesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.gamesInclude<ExtArgs> | null;
    /**
     * Filter, which games to fetch.
     */
    where?: Prisma.gamesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of games to fetch.
     */
    orderBy?: Prisma.gamesOrderByWithRelationInput | Prisma.gamesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing games.
     */
    cursor?: Prisma.gamesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` games from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` games.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of games.
     */
    distinct?: Prisma.GamesScalarFieldEnum | Prisma.GamesScalarFieldEnum[];
};
/**
 * games create
 */
export type gamesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the games
     */
    select?: Prisma.gamesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the games
     */
    omit?: Prisma.gamesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.gamesInclude<ExtArgs> | null;
    /**
     * The data needed to create a games.
     */
    data: Prisma.XOR<Prisma.gamesCreateInput, Prisma.gamesUncheckedCreateInput>;
};
/**
 * games createMany
 */
export type gamesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many games.
     */
    data: Prisma.gamesCreateManyInput | Prisma.gamesCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * games createManyAndReturn
 */
export type gamesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the games
     */
    select?: Prisma.gamesSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the games
     */
    omit?: Prisma.gamesOmit<ExtArgs> | null;
    /**
     * The data used to create many games.
     */
    data: Prisma.gamesCreateManyInput | Prisma.gamesCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * games update
 */
export type gamesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the games
     */
    select?: Prisma.gamesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the games
     */
    omit?: Prisma.gamesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.gamesInclude<ExtArgs> | null;
    /**
     * The data needed to update a games.
     */
    data: Prisma.XOR<Prisma.gamesUpdateInput, Prisma.gamesUncheckedUpdateInput>;
    /**
     * Choose, which games to update.
     */
    where: Prisma.gamesWhereUniqueInput;
};
/**
 * games updateMany
 */
export type gamesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update games.
     */
    data: Prisma.XOR<Prisma.gamesUpdateManyMutationInput, Prisma.gamesUncheckedUpdateManyInput>;
    /**
     * Filter which games to update
     */
    where?: Prisma.gamesWhereInput;
    /**
     * Limit how many games to update.
     */
    limit?: number;
};
/**
 * games updateManyAndReturn
 */
export type gamesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the games
     */
    select?: Prisma.gamesSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the games
     */
    omit?: Prisma.gamesOmit<ExtArgs> | null;
    /**
     * The data used to update games.
     */
    data: Prisma.XOR<Prisma.gamesUpdateManyMutationInput, Prisma.gamesUncheckedUpdateManyInput>;
    /**
     * Filter which games to update
     */
    where?: Prisma.gamesWhereInput;
    /**
     * Limit how many games to update.
     */
    limit?: number;
};
/**
 * games upsert
 */
export type gamesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the games
     */
    select?: Prisma.gamesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the games
     */
    omit?: Prisma.gamesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.gamesInclude<ExtArgs> | null;
    /**
     * The filter to search for the games to update in case it exists.
     */
    where: Prisma.gamesWhereUniqueInput;
    /**
     * In case the games found by the `where` argument doesn't exist, create a new games with this data.
     */
    create: Prisma.XOR<Prisma.gamesCreateInput, Prisma.gamesUncheckedCreateInput>;
    /**
     * In case the games was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.gamesUpdateInput, Prisma.gamesUncheckedUpdateInput>;
};
/**
 * games delete
 */
export type gamesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the games
     */
    select?: Prisma.gamesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the games
     */
    omit?: Prisma.gamesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.gamesInclude<ExtArgs> | null;
    /**
     * Filter which games to delete.
     */
    where: Prisma.gamesWhereUniqueInput;
};
/**
 * games deleteMany
 */
export type gamesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which games to delete
     */
    where?: Prisma.gamesWhereInput;
    /**
     * Limit how many games to delete.
     */
    limit?: number;
};
/**
 * games.canonical_cards
 */
export type games$canonical_cardsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the canonical_cards
     */
    select?: Prisma.canonical_cardsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the canonical_cards
     */
    omit?: Prisma.canonical_cardsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.canonical_cardsInclude<ExtArgs> | null;
    where?: Prisma.canonical_cardsWhereInput;
    orderBy?: Prisma.canonical_cardsOrderByWithRelationInput | Prisma.canonical_cardsOrderByWithRelationInput[];
    cursor?: Prisma.canonical_cardsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Canonical_cardsScalarFieldEnum | Prisma.Canonical_cardsScalarFieldEnum[];
};
/**
 * games.card_printings
 */
export type games$card_printingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the card_printings
     */
    select?: Prisma.card_printingsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the card_printings
     */
    omit?: Prisma.card_printingsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.card_printingsInclude<ExtArgs> | null;
    where?: Prisma.card_printingsWhereInput;
    orderBy?: Prisma.card_printingsOrderByWithRelationInput | Prisma.card_printingsOrderByWithRelationInput[];
    cursor?: Prisma.card_printingsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Card_printingsScalarFieldEnum | Prisma.Card_printingsScalarFieldEnum[];
};
/**
 * games.card_sets
 */
export type games$card_setsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the card_sets
     */
    select?: Prisma.card_setsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the card_sets
     */
    omit?: Prisma.card_setsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.card_setsInclude<ExtArgs> | null;
    where?: Prisma.card_setsWhereInput;
    orderBy?: Prisma.card_setsOrderByWithRelationInput | Prisma.card_setsOrderByWithRelationInput[];
    cursor?: Prisma.card_setsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Card_setsScalarFieldEnum | Prisma.Card_setsScalarFieldEnum[];
};
/**
 * games.collections
 */
export type games$collectionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * games.store_games
 */
export type games$store_gamesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * games.wishlists
 */
export type games$wishlistsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * games without action
 */
export type gamesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the games
     */
    select?: Prisma.gamesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the games
     */
    omit?: Prisma.gamesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.gamesInclude<ExtArgs> | null;
};
