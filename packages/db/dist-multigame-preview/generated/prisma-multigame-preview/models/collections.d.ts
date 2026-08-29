import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model collections
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type collectionsModel = runtime.Types.Result.DefaultSelection<Prisma.$collectionsPayload>;
export type AggregateCollections = {
    _count: CollectionsCountAggregateOutputType | null;
    _min: CollectionsMinAggregateOutputType | null;
    _max: CollectionsMaxAggregateOutputType | null;
};
export type CollectionsMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    name: string | null;
    description: string | null;
    visibility: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    game_id: string | null;
};
export type CollectionsMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    name: string | null;
    description: string | null;
    visibility: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    game_id: string | null;
};
export type CollectionsCountAggregateOutputType = {
    id: number;
    user_id: number;
    name: number;
    description: number;
    visibility: number;
    created_at: number;
    updated_at: number;
    game_id: number;
    _all: number;
};
export type CollectionsMinAggregateInputType = {
    id?: true;
    user_id?: true;
    name?: true;
    description?: true;
    visibility?: true;
    created_at?: true;
    updated_at?: true;
    game_id?: true;
};
export type CollectionsMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    name?: true;
    description?: true;
    visibility?: true;
    created_at?: true;
    updated_at?: true;
    game_id?: true;
};
export type CollectionsCountAggregateInputType = {
    id?: true;
    user_id?: true;
    name?: true;
    description?: true;
    visibility?: true;
    created_at?: true;
    updated_at?: true;
    game_id?: true;
    _all?: true;
};
export type CollectionsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which collections to aggregate.
     */
    where?: Prisma.collectionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of collections to fetch.
     */
    orderBy?: Prisma.collectionsOrderByWithRelationInput | Prisma.collectionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.collectionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` collections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` collections.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned collections
    **/
    _count?: true | CollectionsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CollectionsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CollectionsMaxAggregateInputType;
};
export type GetCollectionsAggregateType<T extends CollectionsAggregateArgs> = {
    [P in keyof T & keyof AggregateCollections]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCollections[P]> : Prisma.GetScalarType<T[P], AggregateCollections[P]>;
};
export type collectionsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.collectionsWhereInput;
    orderBy?: Prisma.collectionsOrderByWithAggregationInput | Prisma.collectionsOrderByWithAggregationInput[];
    by: Prisma.CollectionsScalarFieldEnum[] | Prisma.CollectionsScalarFieldEnum;
    having?: Prisma.collectionsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CollectionsCountAggregateInputType | true;
    _min?: CollectionsMinAggregateInputType;
    _max?: CollectionsMaxAggregateInputType;
};
export type CollectionsGroupByOutputType = {
    id: string;
    user_id: string;
    name: string;
    description: string | null;
    visibility: string;
    created_at: Date;
    updated_at: Date;
    game_id: string;
    _count: CollectionsCountAggregateOutputType | null;
    _min: CollectionsMinAggregateOutputType | null;
    _max: CollectionsMaxAggregateOutputType | null;
};
export type GetCollectionsGroupByPayload<T extends collectionsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CollectionsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CollectionsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CollectionsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CollectionsGroupByOutputType[P]>;
}>>;
export type collectionsWhereInput = {
    AND?: Prisma.collectionsWhereInput | Prisma.collectionsWhereInput[];
    OR?: Prisma.collectionsWhereInput[];
    NOT?: Prisma.collectionsWhereInput | Prisma.collectionsWhereInput[];
    id?: Prisma.UuidFilter<"collections"> | string;
    user_id?: Prisma.UuidFilter<"collections"> | string;
    name?: Prisma.StringFilter<"collections"> | string;
    description?: Prisma.StringNullableFilter<"collections"> | string | null;
    visibility?: Prisma.StringFilter<"collections"> | string;
    created_at?: Prisma.DateTimeFilter<"collections"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"collections"> | Date | string;
    game_id?: Prisma.UuidFilter<"collections"> | string;
    games?: Prisma.XOR<Prisma.GamesScalarRelationFilter, Prisma.gamesWhereInput>;
    user_profiles?: Prisma.XOR<Prisma.User_profilesScalarRelationFilter, Prisma.user_profilesWhereInput>;
    inventory_items?: Prisma.Inventory_itemsListRelationFilter;
};
export type collectionsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    visibility?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    games?: Prisma.gamesOrderByWithRelationInput;
    user_profiles?: Prisma.user_profilesOrderByWithRelationInput;
    inventory_items?: Prisma.inventory_itemsOrderByRelationAggregateInput;
};
export type collectionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    id_user_id?: Prisma.collectionsIdUser_idCompoundUniqueInput;
    id_user_id_game_id?: Prisma.collectionsIdUser_idGame_idCompoundUniqueInput;
    user_id_game_id_name?: Prisma.collectionsUser_idGame_idNameCompoundUniqueInput;
    AND?: Prisma.collectionsWhereInput | Prisma.collectionsWhereInput[];
    OR?: Prisma.collectionsWhereInput[];
    NOT?: Prisma.collectionsWhereInput | Prisma.collectionsWhereInput[];
    user_id?: Prisma.UuidFilter<"collections"> | string;
    name?: Prisma.StringFilter<"collections"> | string;
    description?: Prisma.StringNullableFilter<"collections"> | string | null;
    visibility?: Prisma.StringFilter<"collections"> | string;
    created_at?: Prisma.DateTimeFilter<"collections"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"collections"> | Date | string;
    game_id?: Prisma.UuidFilter<"collections"> | string;
    games?: Prisma.XOR<Prisma.GamesScalarRelationFilter, Prisma.gamesWhereInput>;
    user_profiles?: Prisma.XOR<Prisma.User_profilesScalarRelationFilter, Prisma.user_profilesWhereInput>;
    inventory_items?: Prisma.Inventory_itemsListRelationFilter;
}, "id" | "id_user_id" | "id_user_id_game_id" | "user_id_game_id_name">;
export type collectionsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    visibility?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    _count?: Prisma.collectionsCountOrderByAggregateInput;
    _max?: Prisma.collectionsMaxOrderByAggregateInput;
    _min?: Prisma.collectionsMinOrderByAggregateInput;
};
export type collectionsScalarWhereWithAggregatesInput = {
    AND?: Prisma.collectionsScalarWhereWithAggregatesInput | Prisma.collectionsScalarWhereWithAggregatesInput[];
    OR?: Prisma.collectionsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.collectionsScalarWhereWithAggregatesInput | Prisma.collectionsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"collections"> | string;
    user_id?: Prisma.UuidWithAggregatesFilter<"collections"> | string;
    name?: Prisma.StringWithAggregatesFilter<"collections"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"collections"> | string | null;
    visibility?: Prisma.StringWithAggregatesFilter<"collections"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"collections"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"collections"> | Date | string;
    game_id?: Prisma.UuidWithAggregatesFilter<"collections"> | string;
};
export type collectionsCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    visibility?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    games: Prisma.gamesCreateNestedOneWithoutCollectionsInput;
    user_profiles: Prisma.user_profilesCreateNestedOneWithoutCollectionsInput;
    inventory_items?: Prisma.inventory_itemsCreateNestedManyWithoutCollectionsInput;
};
export type collectionsUncheckedCreateInput = {
    id?: string;
    user_id: string;
    name: string;
    description?: string | null;
    visibility?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
    inventory_items?: Prisma.inventory_itemsUncheckedCreateNestedManyWithoutCollectionsInput;
};
export type collectionsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    games?: Prisma.gamesUpdateOneRequiredWithoutCollectionsNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneRequiredWithoutCollectionsNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateManyWithoutCollectionsNestedInput;
};
export type collectionsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_items?: Prisma.inventory_itemsUncheckedUpdateManyWithoutCollectionsNestedInput;
};
export type collectionsCreateManyInput = {
    id?: string;
    user_id: string;
    name: string;
    description?: string | null;
    visibility?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
};
export type collectionsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type collectionsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type collectionsIdUser_idCompoundUniqueInput = {
    id: string;
    user_id: string;
};
export type collectionsIdUser_idGame_idCompoundUniqueInput = {
    id: string;
    user_id: string;
    game_id: string;
};
export type collectionsUser_idGame_idNameCompoundUniqueInput = {
    user_id: string;
    game_id: string;
    name: string;
};
export type collectionsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    visibility?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
};
export type collectionsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    visibility?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
};
export type collectionsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    visibility?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
};
export type CollectionsListRelationFilter = {
    every?: Prisma.collectionsWhereInput;
    some?: Prisma.collectionsWhereInput;
    none?: Prisma.collectionsWhereInput;
};
export type collectionsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CollectionsNullableScalarRelationFilter = {
    is?: Prisma.collectionsWhereInput | null;
    isNot?: Prisma.collectionsWhereInput | null;
};
export type collectionsCreateNestedManyWithoutGamesInput = {
    create?: Prisma.XOR<Prisma.collectionsCreateWithoutGamesInput, Prisma.collectionsUncheckedCreateWithoutGamesInput> | Prisma.collectionsCreateWithoutGamesInput[] | Prisma.collectionsUncheckedCreateWithoutGamesInput[];
    connectOrCreate?: Prisma.collectionsCreateOrConnectWithoutGamesInput | Prisma.collectionsCreateOrConnectWithoutGamesInput[];
    createMany?: Prisma.collectionsCreateManyGamesInputEnvelope;
    connect?: Prisma.collectionsWhereUniqueInput | Prisma.collectionsWhereUniqueInput[];
};
export type collectionsUncheckedCreateNestedManyWithoutGamesInput = {
    create?: Prisma.XOR<Prisma.collectionsCreateWithoutGamesInput, Prisma.collectionsUncheckedCreateWithoutGamesInput> | Prisma.collectionsCreateWithoutGamesInput[] | Prisma.collectionsUncheckedCreateWithoutGamesInput[];
    connectOrCreate?: Prisma.collectionsCreateOrConnectWithoutGamesInput | Prisma.collectionsCreateOrConnectWithoutGamesInput[];
    createMany?: Prisma.collectionsCreateManyGamesInputEnvelope;
    connect?: Prisma.collectionsWhereUniqueInput | Prisma.collectionsWhereUniqueInput[];
};
export type collectionsUpdateManyWithoutGamesNestedInput = {
    create?: Prisma.XOR<Prisma.collectionsCreateWithoutGamesInput, Prisma.collectionsUncheckedCreateWithoutGamesInput> | Prisma.collectionsCreateWithoutGamesInput[] | Prisma.collectionsUncheckedCreateWithoutGamesInput[];
    connectOrCreate?: Prisma.collectionsCreateOrConnectWithoutGamesInput | Prisma.collectionsCreateOrConnectWithoutGamesInput[];
    upsert?: Prisma.collectionsUpsertWithWhereUniqueWithoutGamesInput | Prisma.collectionsUpsertWithWhereUniqueWithoutGamesInput[];
    createMany?: Prisma.collectionsCreateManyGamesInputEnvelope;
    set?: Prisma.collectionsWhereUniqueInput | Prisma.collectionsWhereUniqueInput[];
    disconnect?: Prisma.collectionsWhereUniqueInput | Prisma.collectionsWhereUniqueInput[];
    delete?: Prisma.collectionsWhereUniqueInput | Prisma.collectionsWhereUniqueInput[];
    connect?: Prisma.collectionsWhereUniqueInput | Prisma.collectionsWhereUniqueInput[];
    update?: Prisma.collectionsUpdateWithWhereUniqueWithoutGamesInput | Prisma.collectionsUpdateWithWhereUniqueWithoutGamesInput[];
    updateMany?: Prisma.collectionsUpdateManyWithWhereWithoutGamesInput | Prisma.collectionsUpdateManyWithWhereWithoutGamesInput[];
    deleteMany?: Prisma.collectionsScalarWhereInput | Prisma.collectionsScalarWhereInput[];
};
export type collectionsUncheckedUpdateManyWithoutGamesNestedInput = {
    create?: Prisma.XOR<Prisma.collectionsCreateWithoutGamesInput, Prisma.collectionsUncheckedCreateWithoutGamesInput> | Prisma.collectionsCreateWithoutGamesInput[] | Prisma.collectionsUncheckedCreateWithoutGamesInput[];
    connectOrCreate?: Prisma.collectionsCreateOrConnectWithoutGamesInput | Prisma.collectionsCreateOrConnectWithoutGamesInput[];
    upsert?: Prisma.collectionsUpsertWithWhereUniqueWithoutGamesInput | Prisma.collectionsUpsertWithWhereUniqueWithoutGamesInput[];
    createMany?: Prisma.collectionsCreateManyGamesInputEnvelope;
    set?: Prisma.collectionsWhereUniqueInput | Prisma.collectionsWhereUniqueInput[];
    disconnect?: Prisma.collectionsWhereUniqueInput | Prisma.collectionsWhereUniqueInput[];
    delete?: Prisma.collectionsWhereUniqueInput | Prisma.collectionsWhereUniqueInput[];
    connect?: Prisma.collectionsWhereUniqueInput | Prisma.collectionsWhereUniqueInput[];
    update?: Prisma.collectionsUpdateWithWhereUniqueWithoutGamesInput | Prisma.collectionsUpdateWithWhereUniqueWithoutGamesInput[];
    updateMany?: Prisma.collectionsUpdateManyWithWhereWithoutGamesInput | Prisma.collectionsUpdateManyWithWhereWithoutGamesInput[];
    deleteMany?: Prisma.collectionsScalarWhereInput | Prisma.collectionsScalarWhereInput[];
};
export type collectionsCreateNestedOneWithoutInventory_itemsInput = {
    create?: Prisma.XOR<Prisma.collectionsCreateWithoutInventory_itemsInput, Prisma.collectionsUncheckedCreateWithoutInventory_itemsInput>;
    connectOrCreate?: Prisma.collectionsCreateOrConnectWithoutInventory_itemsInput;
    connect?: Prisma.collectionsWhereUniqueInput;
};
export type collectionsUpdateOneWithoutInventory_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.collectionsCreateWithoutInventory_itemsInput, Prisma.collectionsUncheckedCreateWithoutInventory_itemsInput>;
    connectOrCreate?: Prisma.collectionsCreateOrConnectWithoutInventory_itemsInput;
    upsert?: Prisma.collectionsUpsertWithoutInventory_itemsInput;
    disconnect?: Prisma.collectionsWhereInput | boolean;
    delete?: Prisma.collectionsWhereInput | boolean;
    connect?: Prisma.collectionsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.collectionsUpdateToOneWithWhereWithoutInventory_itemsInput, Prisma.collectionsUpdateWithoutInventory_itemsInput>, Prisma.collectionsUncheckedUpdateWithoutInventory_itemsInput>;
};
export type collectionsCreateNestedManyWithoutUser_profilesInput = {
    create?: Prisma.XOR<Prisma.collectionsCreateWithoutUser_profilesInput, Prisma.collectionsUncheckedCreateWithoutUser_profilesInput> | Prisma.collectionsCreateWithoutUser_profilesInput[] | Prisma.collectionsUncheckedCreateWithoutUser_profilesInput[];
    connectOrCreate?: Prisma.collectionsCreateOrConnectWithoutUser_profilesInput | Prisma.collectionsCreateOrConnectWithoutUser_profilesInput[];
    createMany?: Prisma.collectionsCreateManyUser_profilesInputEnvelope;
    connect?: Prisma.collectionsWhereUniqueInput | Prisma.collectionsWhereUniqueInput[];
};
export type collectionsUncheckedCreateNestedManyWithoutUser_profilesInput = {
    create?: Prisma.XOR<Prisma.collectionsCreateWithoutUser_profilesInput, Prisma.collectionsUncheckedCreateWithoutUser_profilesInput> | Prisma.collectionsCreateWithoutUser_profilesInput[] | Prisma.collectionsUncheckedCreateWithoutUser_profilesInput[];
    connectOrCreate?: Prisma.collectionsCreateOrConnectWithoutUser_profilesInput | Prisma.collectionsCreateOrConnectWithoutUser_profilesInput[];
    createMany?: Prisma.collectionsCreateManyUser_profilesInputEnvelope;
    connect?: Prisma.collectionsWhereUniqueInput | Prisma.collectionsWhereUniqueInput[];
};
export type collectionsUpdateManyWithoutUser_profilesNestedInput = {
    create?: Prisma.XOR<Prisma.collectionsCreateWithoutUser_profilesInput, Prisma.collectionsUncheckedCreateWithoutUser_profilesInput> | Prisma.collectionsCreateWithoutUser_profilesInput[] | Prisma.collectionsUncheckedCreateWithoutUser_profilesInput[];
    connectOrCreate?: Prisma.collectionsCreateOrConnectWithoutUser_profilesInput | Prisma.collectionsCreateOrConnectWithoutUser_profilesInput[];
    upsert?: Prisma.collectionsUpsertWithWhereUniqueWithoutUser_profilesInput | Prisma.collectionsUpsertWithWhereUniqueWithoutUser_profilesInput[];
    createMany?: Prisma.collectionsCreateManyUser_profilesInputEnvelope;
    set?: Prisma.collectionsWhereUniqueInput | Prisma.collectionsWhereUniqueInput[];
    disconnect?: Prisma.collectionsWhereUniqueInput | Prisma.collectionsWhereUniqueInput[];
    delete?: Prisma.collectionsWhereUniqueInput | Prisma.collectionsWhereUniqueInput[];
    connect?: Prisma.collectionsWhereUniqueInput | Prisma.collectionsWhereUniqueInput[];
    update?: Prisma.collectionsUpdateWithWhereUniqueWithoutUser_profilesInput | Prisma.collectionsUpdateWithWhereUniqueWithoutUser_profilesInput[];
    updateMany?: Prisma.collectionsUpdateManyWithWhereWithoutUser_profilesInput | Prisma.collectionsUpdateManyWithWhereWithoutUser_profilesInput[];
    deleteMany?: Prisma.collectionsScalarWhereInput | Prisma.collectionsScalarWhereInput[];
};
export type collectionsUncheckedUpdateManyWithoutUser_profilesNestedInput = {
    create?: Prisma.XOR<Prisma.collectionsCreateWithoutUser_profilesInput, Prisma.collectionsUncheckedCreateWithoutUser_profilesInput> | Prisma.collectionsCreateWithoutUser_profilesInput[] | Prisma.collectionsUncheckedCreateWithoutUser_profilesInput[];
    connectOrCreate?: Prisma.collectionsCreateOrConnectWithoutUser_profilesInput | Prisma.collectionsCreateOrConnectWithoutUser_profilesInput[];
    upsert?: Prisma.collectionsUpsertWithWhereUniqueWithoutUser_profilesInput | Prisma.collectionsUpsertWithWhereUniqueWithoutUser_profilesInput[];
    createMany?: Prisma.collectionsCreateManyUser_profilesInputEnvelope;
    set?: Prisma.collectionsWhereUniqueInput | Prisma.collectionsWhereUniqueInput[];
    disconnect?: Prisma.collectionsWhereUniqueInput | Prisma.collectionsWhereUniqueInput[];
    delete?: Prisma.collectionsWhereUniqueInput | Prisma.collectionsWhereUniqueInput[];
    connect?: Prisma.collectionsWhereUniqueInput | Prisma.collectionsWhereUniqueInput[];
    update?: Prisma.collectionsUpdateWithWhereUniqueWithoutUser_profilesInput | Prisma.collectionsUpdateWithWhereUniqueWithoutUser_profilesInput[];
    updateMany?: Prisma.collectionsUpdateManyWithWhereWithoutUser_profilesInput | Prisma.collectionsUpdateManyWithWhereWithoutUser_profilesInput[];
    deleteMany?: Prisma.collectionsScalarWhereInput | Prisma.collectionsScalarWhereInput[];
};
export type collectionsCreateWithoutGamesInput = {
    id?: string;
    name: string;
    description?: string | null;
    visibility?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_profiles: Prisma.user_profilesCreateNestedOneWithoutCollectionsInput;
    inventory_items?: Prisma.inventory_itemsCreateNestedManyWithoutCollectionsInput;
};
export type collectionsUncheckedCreateWithoutGamesInput = {
    id?: string;
    user_id: string;
    name: string;
    description?: string | null;
    visibility?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_items?: Prisma.inventory_itemsUncheckedCreateNestedManyWithoutCollectionsInput;
};
export type collectionsCreateOrConnectWithoutGamesInput = {
    where: Prisma.collectionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.collectionsCreateWithoutGamesInput, Prisma.collectionsUncheckedCreateWithoutGamesInput>;
};
export type collectionsCreateManyGamesInputEnvelope = {
    data: Prisma.collectionsCreateManyGamesInput | Prisma.collectionsCreateManyGamesInput[];
    skipDuplicates?: boolean;
};
export type collectionsUpsertWithWhereUniqueWithoutGamesInput = {
    where: Prisma.collectionsWhereUniqueInput;
    update: Prisma.XOR<Prisma.collectionsUpdateWithoutGamesInput, Prisma.collectionsUncheckedUpdateWithoutGamesInput>;
    create: Prisma.XOR<Prisma.collectionsCreateWithoutGamesInput, Prisma.collectionsUncheckedCreateWithoutGamesInput>;
};
export type collectionsUpdateWithWhereUniqueWithoutGamesInput = {
    where: Prisma.collectionsWhereUniqueInput;
    data: Prisma.XOR<Prisma.collectionsUpdateWithoutGamesInput, Prisma.collectionsUncheckedUpdateWithoutGamesInput>;
};
export type collectionsUpdateManyWithWhereWithoutGamesInput = {
    where: Prisma.collectionsScalarWhereInput;
    data: Prisma.XOR<Prisma.collectionsUpdateManyMutationInput, Prisma.collectionsUncheckedUpdateManyWithoutGamesInput>;
};
export type collectionsScalarWhereInput = {
    AND?: Prisma.collectionsScalarWhereInput | Prisma.collectionsScalarWhereInput[];
    OR?: Prisma.collectionsScalarWhereInput[];
    NOT?: Prisma.collectionsScalarWhereInput | Prisma.collectionsScalarWhereInput[];
    id?: Prisma.UuidFilter<"collections"> | string;
    user_id?: Prisma.UuidFilter<"collections"> | string;
    name?: Prisma.StringFilter<"collections"> | string;
    description?: Prisma.StringNullableFilter<"collections"> | string | null;
    visibility?: Prisma.StringFilter<"collections"> | string;
    created_at?: Prisma.DateTimeFilter<"collections"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"collections"> | Date | string;
    game_id?: Prisma.UuidFilter<"collections"> | string;
};
export type collectionsCreateWithoutInventory_itemsInput = {
    id?: string;
    name: string;
    description?: string | null;
    visibility?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    games: Prisma.gamesCreateNestedOneWithoutCollectionsInput;
    user_profiles: Prisma.user_profilesCreateNestedOneWithoutCollectionsInput;
};
export type collectionsUncheckedCreateWithoutInventory_itemsInput = {
    id?: string;
    user_id: string;
    name: string;
    description?: string | null;
    visibility?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
};
export type collectionsCreateOrConnectWithoutInventory_itemsInput = {
    where: Prisma.collectionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.collectionsCreateWithoutInventory_itemsInput, Prisma.collectionsUncheckedCreateWithoutInventory_itemsInput>;
};
export type collectionsUpsertWithoutInventory_itemsInput = {
    update: Prisma.XOR<Prisma.collectionsUpdateWithoutInventory_itemsInput, Prisma.collectionsUncheckedUpdateWithoutInventory_itemsInput>;
    create: Prisma.XOR<Prisma.collectionsCreateWithoutInventory_itemsInput, Prisma.collectionsUncheckedCreateWithoutInventory_itemsInput>;
    where?: Prisma.collectionsWhereInput;
};
export type collectionsUpdateToOneWithWhereWithoutInventory_itemsInput = {
    where?: Prisma.collectionsWhereInput;
    data: Prisma.XOR<Prisma.collectionsUpdateWithoutInventory_itemsInput, Prisma.collectionsUncheckedUpdateWithoutInventory_itemsInput>;
};
export type collectionsUpdateWithoutInventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    games?: Prisma.gamesUpdateOneRequiredWithoutCollectionsNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneRequiredWithoutCollectionsNestedInput;
};
export type collectionsUncheckedUpdateWithoutInventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type collectionsCreateWithoutUser_profilesInput = {
    id?: string;
    name: string;
    description?: string | null;
    visibility?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    games: Prisma.gamesCreateNestedOneWithoutCollectionsInput;
    inventory_items?: Prisma.inventory_itemsCreateNestedManyWithoutCollectionsInput;
};
export type collectionsUncheckedCreateWithoutUser_profilesInput = {
    id?: string;
    name: string;
    description?: string | null;
    visibility?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
    inventory_items?: Prisma.inventory_itemsUncheckedCreateNestedManyWithoutCollectionsInput;
};
export type collectionsCreateOrConnectWithoutUser_profilesInput = {
    where: Prisma.collectionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.collectionsCreateWithoutUser_profilesInput, Prisma.collectionsUncheckedCreateWithoutUser_profilesInput>;
};
export type collectionsCreateManyUser_profilesInputEnvelope = {
    data: Prisma.collectionsCreateManyUser_profilesInput | Prisma.collectionsCreateManyUser_profilesInput[];
    skipDuplicates?: boolean;
};
export type collectionsUpsertWithWhereUniqueWithoutUser_profilesInput = {
    where: Prisma.collectionsWhereUniqueInput;
    update: Prisma.XOR<Prisma.collectionsUpdateWithoutUser_profilesInput, Prisma.collectionsUncheckedUpdateWithoutUser_profilesInput>;
    create: Prisma.XOR<Prisma.collectionsCreateWithoutUser_profilesInput, Prisma.collectionsUncheckedCreateWithoutUser_profilesInput>;
};
export type collectionsUpdateWithWhereUniqueWithoutUser_profilesInput = {
    where: Prisma.collectionsWhereUniqueInput;
    data: Prisma.XOR<Prisma.collectionsUpdateWithoutUser_profilesInput, Prisma.collectionsUncheckedUpdateWithoutUser_profilesInput>;
};
export type collectionsUpdateManyWithWhereWithoutUser_profilesInput = {
    where: Prisma.collectionsScalarWhereInput;
    data: Prisma.XOR<Prisma.collectionsUpdateManyMutationInput, Prisma.collectionsUncheckedUpdateManyWithoutUser_profilesInput>;
};
export type collectionsCreateManyGamesInput = {
    id?: string;
    user_id: string;
    name: string;
    description?: string | null;
    visibility?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type collectionsUpdateWithoutGamesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user_profiles?: Prisma.user_profilesUpdateOneRequiredWithoutCollectionsNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateManyWithoutCollectionsNestedInput;
};
export type collectionsUncheckedUpdateWithoutGamesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_items?: Prisma.inventory_itemsUncheckedUpdateManyWithoutCollectionsNestedInput;
};
export type collectionsUncheckedUpdateManyWithoutGamesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type collectionsCreateManyUser_profilesInput = {
    id?: string;
    name: string;
    description?: string | null;
    visibility?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
};
export type collectionsUpdateWithoutUser_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    games?: Prisma.gamesUpdateOneRequiredWithoutCollectionsNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateManyWithoutCollectionsNestedInput;
};
export type collectionsUncheckedUpdateWithoutUser_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_items?: Prisma.inventory_itemsUncheckedUpdateManyWithoutCollectionsNestedInput;
};
export type collectionsUncheckedUpdateManyWithoutUser_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
/**
 * Count Type CollectionsCountOutputType
 */
export type CollectionsCountOutputType = {
    inventory_items: number;
};
export type CollectionsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    inventory_items?: boolean | CollectionsCountOutputTypeCountInventory_itemsArgs;
};
/**
 * CollectionsCountOutputType without action
 */
export type CollectionsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionsCountOutputType
     */
    select?: Prisma.CollectionsCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * CollectionsCountOutputType without action
 */
export type CollectionsCountOutputTypeCountInventory_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.inventory_itemsWhereInput;
};
export type collectionsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    name?: boolean;
    description?: boolean;
    visibility?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    game_id?: boolean;
    games?: boolean | Prisma.gamesDefaultArgs<ExtArgs>;
    user_profiles?: boolean | Prisma.user_profilesDefaultArgs<ExtArgs>;
    inventory_items?: boolean | Prisma.collections$inventory_itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.CollectionsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["collections"]>;
export type collectionsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    name?: boolean;
    description?: boolean;
    visibility?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    game_id?: boolean;
    games?: boolean | Prisma.gamesDefaultArgs<ExtArgs>;
    user_profiles?: boolean | Prisma.user_profilesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["collections"]>;
export type collectionsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    name?: boolean;
    description?: boolean;
    visibility?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    game_id?: boolean;
    games?: boolean | Prisma.gamesDefaultArgs<ExtArgs>;
    user_profiles?: boolean | Prisma.user_profilesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["collections"]>;
export type collectionsSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    name?: boolean;
    description?: boolean;
    visibility?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    game_id?: boolean;
};
export type collectionsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "name" | "description" | "visibility" | "created_at" | "updated_at" | "game_id", ExtArgs["result"]["collections"]>;
export type collectionsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    games?: boolean | Prisma.gamesDefaultArgs<ExtArgs>;
    user_profiles?: boolean | Prisma.user_profilesDefaultArgs<ExtArgs>;
    inventory_items?: boolean | Prisma.collections$inventory_itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.CollectionsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type collectionsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    games?: boolean | Prisma.gamesDefaultArgs<ExtArgs>;
    user_profiles?: boolean | Prisma.user_profilesDefaultArgs<ExtArgs>;
};
export type collectionsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    games?: boolean | Prisma.gamesDefaultArgs<ExtArgs>;
    user_profiles?: boolean | Prisma.user_profilesDefaultArgs<ExtArgs>;
};
export type $collectionsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "collections";
    objects: {
        games: Prisma.$gamesPayload<ExtArgs>;
        user_profiles: Prisma.$user_profilesPayload<ExtArgs>;
        inventory_items: Prisma.$inventory_itemsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        user_id: string;
        name: string;
        description: string | null;
        visibility: string;
        created_at: Date;
        updated_at: Date;
        game_id: string;
    }, ExtArgs["result"]["collections"]>;
    composites: {};
};
export type collectionsGetPayload<S extends boolean | null | undefined | collectionsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$collectionsPayload, S>;
export type collectionsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<collectionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CollectionsCountAggregateInputType | true;
};
export interface collectionsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['collections'];
        meta: {
            name: 'collections';
        };
    };
    /**
     * Find zero or one Collections that matches the filter.
     * @param {collectionsFindUniqueArgs} args - Arguments to find a Collections
     * @example
     * // Get one Collections
     * const collections = await prisma.collections.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends collectionsFindUniqueArgs>(args: Prisma.SelectSubset<T, collectionsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__collectionsClient<runtime.Types.Result.GetResult<Prisma.$collectionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Collections that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {collectionsFindUniqueOrThrowArgs} args - Arguments to find a Collections
     * @example
     * // Get one Collections
     * const collections = await prisma.collections.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends collectionsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, collectionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__collectionsClient<runtime.Types.Result.GetResult<Prisma.$collectionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Collections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collectionsFindFirstArgs} args - Arguments to find a Collections
     * @example
     * // Get one Collections
     * const collections = await prisma.collections.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends collectionsFindFirstArgs>(args?: Prisma.SelectSubset<T, collectionsFindFirstArgs<ExtArgs>>): Prisma.Prisma__collectionsClient<runtime.Types.Result.GetResult<Prisma.$collectionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Collections that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collectionsFindFirstOrThrowArgs} args - Arguments to find a Collections
     * @example
     * // Get one Collections
     * const collections = await prisma.collections.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends collectionsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, collectionsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__collectionsClient<runtime.Types.Result.GetResult<Prisma.$collectionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Collections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collectionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Collections
     * const collections = await prisma.collections.findMany()
     *
     * // Get first 10 Collections
     * const collections = await prisma.collections.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const collectionsWithIdOnly = await prisma.collections.findMany({ select: { id: true } })
     *
     */
    findMany<T extends collectionsFindManyArgs>(args?: Prisma.SelectSubset<T, collectionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$collectionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Collections.
     * @param {collectionsCreateArgs} args - Arguments to create a Collections.
     * @example
     * // Create one Collections
     * const Collections = await prisma.collections.create({
     *   data: {
     *     // ... data to create a Collections
     *   }
     * })
     *
     */
    create<T extends collectionsCreateArgs>(args: Prisma.SelectSubset<T, collectionsCreateArgs<ExtArgs>>): Prisma.Prisma__collectionsClient<runtime.Types.Result.GetResult<Prisma.$collectionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Collections.
     * @param {collectionsCreateManyArgs} args - Arguments to create many Collections.
     * @example
     * // Create many Collections
     * const collections = await prisma.collections.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends collectionsCreateManyArgs>(args?: Prisma.SelectSubset<T, collectionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Collections and returns the data saved in the database.
     * @param {collectionsCreateManyAndReturnArgs} args - Arguments to create many Collections.
     * @example
     * // Create many Collections
     * const collections = await prisma.collections.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Collections and only return the `id`
     * const collectionsWithIdOnly = await prisma.collections.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends collectionsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, collectionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$collectionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Collections.
     * @param {collectionsDeleteArgs} args - Arguments to delete one Collections.
     * @example
     * // Delete one Collections
     * const Collections = await prisma.collections.delete({
     *   where: {
     *     // ... filter to delete one Collections
     *   }
     * })
     *
     */
    delete<T extends collectionsDeleteArgs>(args: Prisma.SelectSubset<T, collectionsDeleteArgs<ExtArgs>>): Prisma.Prisma__collectionsClient<runtime.Types.Result.GetResult<Prisma.$collectionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Collections.
     * @param {collectionsUpdateArgs} args - Arguments to update one Collections.
     * @example
     * // Update one Collections
     * const collections = await prisma.collections.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends collectionsUpdateArgs>(args: Prisma.SelectSubset<T, collectionsUpdateArgs<ExtArgs>>): Prisma.Prisma__collectionsClient<runtime.Types.Result.GetResult<Prisma.$collectionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Collections.
     * @param {collectionsDeleteManyArgs} args - Arguments to filter Collections to delete.
     * @example
     * // Delete a few Collections
     * const { count } = await prisma.collections.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends collectionsDeleteManyArgs>(args?: Prisma.SelectSubset<T, collectionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collectionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Collections
     * const collections = await prisma.collections.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends collectionsUpdateManyArgs>(args: Prisma.SelectSubset<T, collectionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Collections and returns the data updated in the database.
     * @param {collectionsUpdateManyAndReturnArgs} args - Arguments to update many Collections.
     * @example
     * // Update many Collections
     * const collections = await prisma.collections.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Collections and only return the `id`
     * const collectionsWithIdOnly = await prisma.collections.updateManyAndReturn({
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
    updateManyAndReturn<T extends collectionsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, collectionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$collectionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Collections.
     * @param {collectionsUpsertArgs} args - Arguments to update or create a Collections.
     * @example
     * // Update or create a Collections
     * const collections = await prisma.collections.upsert({
     *   create: {
     *     // ... data to create a Collections
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Collections we want to update
     *   }
     * })
     */
    upsert<T extends collectionsUpsertArgs>(args: Prisma.SelectSubset<T, collectionsUpsertArgs<ExtArgs>>): Prisma.Prisma__collectionsClient<runtime.Types.Result.GetResult<Prisma.$collectionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collectionsCountArgs} args - Arguments to filter Collections to count.
     * @example
     * // Count the number of Collections
     * const count = await prisma.collections.count({
     *   where: {
     *     // ... the filter for the Collections we want to count
     *   }
     * })
    **/
    count<T extends collectionsCountArgs>(args?: Prisma.Subset<T, collectionsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CollectionsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CollectionsAggregateArgs>(args: Prisma.Subset<T, CollectionsAggregateArgs>): Prisma.PrismaPromise<GetCollectionsAggregateType<T>>;
    /**
     * Group by Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collectionsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends collectionsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: collectionsGroupByArgs['orderBy'];
    } : {
        orderBy?: collectionsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, collectionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollectionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the collections model
     */
    readonly fields: collectionsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for collections.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__collectionsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    games<T extends Prisma.gamesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.gamesDefaultArgs<ExtArgs>>): Prisma.Prisma__gamesClient<runtime.Types.Result.GetResult<Prisma.$gamesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user_profiles<T extends Prisma.user_profilesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.user_profilesDefaultArgs<ExtArgs>>): Prisma.Prisma__user_profilesClient<runtime.Types.Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    inventory_items<T extends Prisma.collections$inventory_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.collections$inventory_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$inventory_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the collections model
 */
export interface collectionsFieldRefs {
    readonly id: Prisma.FieldRef<"collections", 'String'>;
    readonly user_id: Prisma.FieldRef<"collections", 'String'>;
    readonly name: Prisma.FieldRef<"collections", 'String'>;
    readonly description: Prisma.FieldRef<"collections", 'String'>;
    readonly visibility: Prisma.FieldRef<"collections", 'String'>;
    readonly created_at: Prisma.FieldRef<"collections", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"collections", 'DateTime'>;
    readonly game_id: Prisma.FieldRef<"collections", 'String'>;
}
/**
 * collections findUnique
 */
export type collectionsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which collections to fetch.
     */
    where: Prisma.collectionsWhereUniqueInput;
};
/**
 * collections findUniqueOrThrow
 */
export type collectionsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which collections to fetch.
     */
    where: Prisma.collectionsWhereUniqueInput;
};
/**
 * collections findFirst
 */
export type collectionsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which collections to fetch.
     */
    where?: Prisma.collectionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of collections to fetch.
     */
    orderBy?: Prisma.collectionsOrderByWithRelationInput | Prisma.collectionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for collections.
     */
    cursor?: Prisma.collectionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` collections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` collections.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of collections.
     */
    distinct?: Prisma.CollectionsScalarFieldEnum | Prisma.CollectionsScalarFieldEnum[];
};
/**
 * collections findFirstOrThrow
 */
export type collectionsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which collections to fetch.
     */
    where?: Prisma.collectionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of collections to fetch.
     */
    orderBy?: Prisma.collectionsOrderByWithRelationInput | Prisma.collectionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for collections.
     */
    cursor?: Prisma.collectionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` collections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` collections.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of collections.
     */
    distinct?: Prisma.CollectionsScalarFieldEnum | Prisma.CollectionsScalarFieldEnum[];
};
/**
 * collections findMany
 */
export type collectionsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which collections to fetch.
     */
    where?: Prisma.collectionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of collections to fetch.
     */
    orderBy?: Prisma.collectionsOrderByWithRelationInput | Prisma.collectionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing collections.
     */
    cursor?: Prisma.collectionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` collections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` collections.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of collections.
     */
    distinct?: Prisma.CollectionsScalarFieldEnum | Prisma.CollectionsScalarFieldEnum[];
};
/**
 * collections create
 */
export type collectionsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a collections.
     */
    data: Prisma.XOR<Prisma.collectionsCreateInput, Prisma.collectionsUncheckedCreateInput>;
};
/**
 * collections createMany
 */
export type collectionsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many collections.
     */
    data: Prisma.collectionsCreateManyInput | Prisma.collectionsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * collections createManyAndReturn
 */
export type collectionsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collections
     */
    select?: Prisma.collectionsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the collections
     */
    omit?: Prisma.collectionsOmit<ExtArgs> | null;
    /**
     * The data used to create many collections.
     */
    data: Prisma.collectionsCreateManyInput | Prisma.collectionsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.collectionsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * collections update
 */
export type collectionsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a collections.
     */
    data: Prisma.XOR<Prisma.collectionsUpdateInput, Prisma.collectionsUncheckedUpdateInput>;
    /**
     * Choose, which collections to update.
     */
    where: Prisma.collectionsWhereUniqueInput;
};
/**
 * collections updateMany
 */
export type collectionsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update collections.
     */
    data: Prisma.XOR<Prisma.collectionsUpdateManyMutationInput, Prisma.collectionsUncheckedUpdateManyInput>;
    /**
     * Filter which collections to update
     */
    where?: Prisma.collectionsWhereInput;
    /**
     * Limit how many collections to update.
     */
    limit?: number;
};
/**
 * collections updateManyAndReturn
 */
export type collectionsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collections
     */
    select?: Prisma.collectionsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the collections
     */
    omit?: Prisma.collectionsOmit<ExtArgs> | null;
    /**
     * The data used to update collections.
     */
    data: Prisma.XOR<Prisma.collectionsUpdateManyMutationInput, Prisma.collectionsUncheckedUpdateManyInput>;
    /**
     * Filter which collections to update
     */
    where?: Prisma.collectionsWhereInput;
    /**
     * Limit how many collections to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.collectionsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * collections upsert
 */
export type collectionsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the collections to update in case it exists.
     */
    where: Prisma.collectionsWhereUniqueInput;
    /**
     * In case the collections found by the `where` argument doesn't exist, create a new collections with this data.
     */
    create: Prisma.XOR<Prisma.collectionsCreateInput, Prisma.collectionsUncheckedCreateInput>;
    /**
     * In case the collections was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.collectionsUpdateInput, Prisma.collectionsUncheckedUpdateInput>;
};
/**
 * collections delete
 */
export type collectionsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which collections to delete.
     */
    where: Prisma.collectionsWhereUniqueInput;
};
/**
 * collections deleteMany
 */
export type collectionsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which collections to delete
     */
    where?: Prisma.collectionsWhereInput;
    /**
     * Limit how many collections to delete.
     */
    limit?: number;
};
/**
 * collections.inventory_items
 */
export type collections$inventory_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * collections without action
 */
export type collectionsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
