import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model card_sets
 *
 */
export type card_setsModel = runtime.Types.Result.DefaultSelection<Prisma.$card_setsPayload>;
export type AggregateCard_sets = {
    _count: Card_setsCountAggregateOutputType | null;
    _min: Card_setsMinAggregateOutputType | null;
    _max: Card_setsMaxAggregateOutputType | null;
};
export type Card_setsMinAggregateOutputType = {
    id: string | null;
    game_id: string | null;
    code: string | null;
    name: string | null;
    source: string | null;
    source_id: string | null;
    release_date: Date | null;
    set_type: string | null;
    created_at: Date | null;
};
export type Card_setsMaxAggregateOutputType = {
    id: string | null;
    game_id: string | null;
    code: string | null;
    name: string | null;
    source: string | null;
    source_id: string | null;
    release_date: Date | null;
    set_type: string | null;
    created_at: Date | null;
};
export type Card_setsCountAggregateOutputType = {
    id: number;
    game_id: number;
    code: number;
    name: number;
    source: number;
    source_id: number;
    release_date: number;
    set_type: number;
    created_at: number;
    _all: number;
};
export type Card_setsMinAggregateInputType = {
    id?: true;
    game_id?: true;
    code?: true;
    name?: true;
    source?: true;
    source_id?: true;
    release_date?: true;
    set_type?: true;
    created_at?: true;
};
export type Card_setsMaxAggregateInputType = {
    id?: true;
    game_id?: true;
    code?: true;
    name?: true;
    source?: true;
    source_id?: true;
    release_date?: true;
    set_type?: true;
    created_at?: true;
};
export type Card_setsCountAggregateInputType = {
    id?: true;
    game_id?: true;
    code?: true;
    name?: true;
    source?: true;
    source_id?: true;
    release_date?: true;
    set_type?: true;
    created_at?: true;
    _all?: true;
};
export type Card_setsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which card_sets to aggregate.
     */
    where?: Prisma.card_setsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of card_sets to fetch.
     */
    orderBy?: Prisma.card_setsOrderByWithRelationInput | Prisma.card_setsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.card_setsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` card_sets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` card_sets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned card_sets
    **/
    _count?: true | Card_setsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Card_setsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Card_setsMaxAggregateInputType;
};
export type GetCard_setsAggregateType<T extends Card_setsAggregateArgs> = {
    [P in keyof T & keyof AggregateCard_sets]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCard_sets[P]> : Prisma.GetScalarType<T[P], AggregateCard_sets[P]>;
};
export type card_setsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.card_setsWhereInput;
    orderBy?: Prisma.card_setsOrderByWithAggregationInput | Prisma.card_setsOrderByWithAggregationInput[];
    by: Prisma.Card_setsScalarFieldEnum[] | Prisma.Card_setsScalarFieldEnum;
    having?: Prisma.card_setsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Card_setsCountAggregateInputType | true;
    _min?: Card_setsMinAggregateInputType;
    _max?: Card_setsMaxAggregateInputType;
};
export type Card_setsGroupByOutputType = {
    id: string;
    game_id: string;
    code: string;
    name: string;
    source: string;
    source_id: string | null;
    release_date: Date | null;
    set_type: string | null;
    created_at: Date;
    _count: Card_setsCountAggregateOutputType | null;
    _min: Card_setsMinAggregateOutputType | null;
    _max: Card_setsMaxAggregateOutputType | null;
};
export type GetCard_setsGroupByPayload<T extends card_setsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Card_setsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Card_setsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Card_setsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Card_setsGroupByOutputType[P]>;
}>>;
export type card_setsWhereInput = {
    AND?: Prisma.card_setsWhereInput | Prisma.card_setsWhereInput[];
    OR?: Prisma.card_setsWhereInput[];
    NOT?: Prisma.card_setsWhereInput | Prisma.card_setsWhereInput[];
    id?: Prisma.UuidFilter<"card_sets"> | string;
    game_id?: Prisma.UuidFilter<"card_sets"> | string;
    code?: Prisma.StringFilter<"card_sets"> | string;
    name?: Prisma.StringFilter<"card_sets"> | string;
    source?: Prisma.StringFilter<"card_sets"> | string;
    source_id?: Prisma.StringNullableFilter<"card_sets"> | string | null;
    release_date?: Prisma.DateTimeNullableFilter<"card_sets"> | Date | string | null;
    set_type?: Prisma.StringNullableFilter<"card_sets"> | string | null;
    created_at?: Prisma.DateTimeFilter<"card_sets"> | Date | string;
    card_printings?: Prisma.Card_printingsListRelationFilter;
    games?: Prisma.XOR<Prisma.GamesScalarRelationFilter, Prisma.gamesWhereInput>;
};
export type card_setsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    source_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    release_date?: Prisma.SortOrderInput | Prisma.SortOrder;
    set_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    card_printings?: Prisma.card_printingsOrderByRelationAggregateInput;
    games?: Prisma.gamesOrderByWithRelationInput;
};
export type card_setsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    game_id_code?: Prisma.card_setsGame_idCodeCompoundUniqueInput;
    id_game_id?: Prisma.card_setsIdGame_idCompoundUniqueInput;
    game_id_source_source_id?: Prisma.card_setsGame_idSourceSource_idCompoundUniqueInput;
    AND?: Prisma.card_setsWhereInput | Prisma.card_setsWhereInput[];
    OR?: Prisma.card_setsWhereInput[];
    NOT?: Prisma.card_setsWhereInput | Prisma.card_setsWhereInput[];
    game_id?: Prisma.UuidFilter<"card_sets"> | string;
    code?: Prisma.StringFilter<"card_sets"> | string;
    name?: Prisma.StringFilter<"card_sets"> | string;
    source?: Prisma.StringFilter<"card_sets"> | string;
    source_id?: Prisma.StringNullableFilter<"card_sets"> | string | null;
    release_date?: Prisma.DateTimeNullableFilter<"card_sets"> | Date | string | null;
    set_type?: Prisma.StringNullableFilter<"card_sets"> | string | null;
    created_at?: Prisma.DateTimeFilter<"card_sets"> | Date | string;
    card_printings?: Prisma.Card_printingsListRelationFilter;
    games?: Prisma.XOR<Prisma.GamesScalarRelationFilter, Prisma.gamesWhereInput>;
}, "id" | "game_id_code" | "id_game_id" | "game_id_source_source_id">;
export type card_setsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    source_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    release_date?: Prisma.SortOrderInput | Prisma.SortOrder;
    set_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.card_setsCountOrderByAggregateInput;
    _max?: Prisma.card_setsMaxOrderByAggregateInput;
    _min?: Prisma.card_setsMinOrderByAggregateInput;
};
export type card_setsScalarWhereWithAggregatesInput = {
    AND?: Prisma.card_setsScalarWhereWithAggregatesInput | Prisma.card_setsScalarWhereWithAggregatesInput[];
    OR?: Prisma.card_setsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.card_setsScalarWhereWithAggregatesInput | Prisma.card_setsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"card_sets"> | string;
    game_id?: Prisma.UuidWithAggregatesFilter<"card_sets"> | string;
    code?: Prisma.StringWithAggregatesFilter<"card_sets"> | string;
    name?: Prisma.StringWithAggregatesFilter<"card_sets"> | string;
    source?: Prisma.StringWithAggregatesFilter<"card_sets"> | string;
    source_id?: Prisma.StringNullableWithAggregatesFilter<"card_sets"> | string | null;
    release_date?: Prisma.DateTimeNullableWithAggregatesFilter<"card_sets"> | Date | string | null;
    set_type?: Prisma.StringNullableWithAggregatesFilter<"card_sets"> | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"card_sets"> | Date | string;
};
export type card_setsCreateInput = {
    id?: string;
    code: string;
    name: string;
    source: string;
    source_id?: string | null;
    release_date?: Date | string | null;
    set_type?: string | null;
    created_at?: Date | string;
    card_printings?: Prisma.card_printingsCreateNestedManyWithoutCard_setsInput;
    games: Prisma.gamesCreateNestedOneWithoutCard_setsInput;
};
export type card_setsUncheckedCreateInput = {
    id?: string;
    game_id: string;
    code: string;
    name: string;
    source: string;
    source_id?: string | null;
    release_date?: Date | string | null;
    set_type?: string | null;
    created_at?: Date | string;
    card_printings?: Prisma.card_printingsUncheckedCreateNestedManyWithoutCard_setsInput;
};
export type card_setsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    source_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    release_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    set_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    card_printings?: Prisma.card_printingsUpdateManyWithoutCard_setsNestedInput;
    games?: Prisma.gamesUpdateOneRequiredWithoutCard_setsNestedInput;
};
export type card_setsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    source_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    release_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    set_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    card_printings?: Prisma.card_printingsUncheckedUpdateManyWithoutCard_setsNestedInput;
};
export type card_setsCreateManyInput = {
    id?: string;
    game_id: string;
    code: string;
    name: string;
    source: string;
    source_id?: string | null;
    release_date?: Date | string | null;
    set_type?: string | null;
    created_at?: Date | string;
};
export type card_setsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    source_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    release_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    set_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type card_setsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    source_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    release_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    set_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Card_setsScalarRelationFilter = {
    is?: Prisma.card_setsWhereInput;
    isNot?: Prisma.card_setsWhereInput;
};
export type card_setsGame_idCodeCompoundUniqueInput = {
    game_id: string;
    code: string;
};
export type card_setsIdGame_idCompoundUniqueInput = {
    id: string;
    game_id: string;
};
export type card_setsGame_idSourceSource_idCompoundUniqueInput = {
    game_id: string;
    source: string;
    source_id: string;
};
export type card_setsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    source_id?: Prisma.SortOrder;
    release_date?: Prisma.SortOrder;
    set_type?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type card_setsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    source_id?: Prisma.SortOrder;
    release_date?: Prisma.SortOrder;
    set_type?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type card_setsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    source_id?: Prisma.SortOrder;
    release_date?: Prisma.SortOrder;
    set_type?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type Card_setsListRelationFilter = {
    every?: Prisma.card_setsWhereInput;
    some?: Prisma.card_setsWhereInput;
    none?: Prisma.card_setsWhereInput;
};
export type card_setsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type card_setsCreateNestedOneWithoutCard_printingsInput = {
    create?: Prisma.XOR<Prisma.card_setsCreateWithoutCard_printingsInput, Prisma.card_setsUncheckedCreateWithoutCard_printingsInput>;
    connectOrCreate?: Prisma.card_setsCreateOrConnectWithoutCard_printingsInput;
    connect?: Prisma.card_setsWhereUniqueInput;
};
export type card_setsUpdateOneRequiredWithoutCard_printingsNestedInput = {
    create?: Prisma.XOR<Prisma.card_setsCreateWithoutCard_printingsInput, Prisma.card_setsUncheckedCreateWithoutCard_printingsInput>;
    connectOrCreate?: Prisma.card_setsCreateOrConnectWithoutCard_printingsInput;
    upsert?: Prisma.card_setsUpsertWithoutCard_printingsInput;
    connect?: Prisma.card_setsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.card_setsUpdateToOneWithWhereWithoutCard_printingsInput, Prisma.card_setsUpdateWithoutCard_printingsInput>, Prisma.card_setsUncheckedUpdateWithoutCard_printingsInput>;
};
export type card_setsCreateNestedManyWithoutGamesInput = {
    create?: Prisma.XOR<Prisma.card_setsCreateWithoutGamesInput, Prisma.card_setsUncheckedCreateWithoutGamesInput> | Prisma.card_setsCreateWithoutGamesInput[] | Prisma.card_setsUncheckedCreateWithoutGamesInput[];
    connectOrCreate?: Prisma.card_setsCreateOrConnectWithoutGamesInput | Prisma.card_setsCreateOrConnectWithoutGamesInput[];
    createMany?: Prisma.card_setsCreateManyGamesInputEnvelope;
    connect?: Prisma.card_setsWhereUniqueInput | Prisma.card_setsWhereUniqueInput[];
};
export type card_setsUncheckedCreateNestedManyWithoutGamesInput = {
    create?: Prisma.XOR<Prisma.card_setsCreateWithoutGamesInput, Prisma.card_setsUncheckedCreateWithoutGamesInput> | Prisma.card_setsCreateWithoutGamesInput[] | Prisma.card_setsUncheckedCreateWithoutGamesInput[];
    connectOrCreate?: Prisma.card_setsCreateOrConnectWithoutGamesInput | Prisma.card_setsCreateOrConnectWithoutGamesInput[];
    createMany?: Prisma.card_setsCreateManyGamesInputEnvelope;
    connect?: Prisma.card_setsWhereUniqueInput | Prisma.card_setsWhereUniqueInput[];
};
export type card_setsUpdateManyWithoutGamesNestedInput = {
    create?: Prisma.XOR<Prisma.card_setsCreateWithoutGamesInput, Prisma.card_setsUncheckedCreateWithoutGamesInput> | Prisma.card_setsCreateWithoutGamesInput[] | Prisma.card_setsUncheckedCreateWithoutGamesInput[];
    connectOrCreate?: Prisma.card_setsCreateOrConnectWithoutGamesInput | Prisma.card_setsCreateOrConnectWithoutGamesInput[];
    upsert?: Prisma.card_setsUpsertWithWhereUniqueWithoutGamesInput | Prisma.card_setsUpsertWithWhereUniqueWithoutGamesInput[];
    createMany?: Prisma.card_setsCreateManyGamesInputEnvelope;
    set?: Prisma.card_setsWhereUniqueInput | Prisma.card_setsWhereUniqueInput[];
    disconnect?: Prisma.card_setsWhereUniqueInput | Prisma.card_setsWhereUniqueInput[];
    delete?: Prisma.card_setsWhereUniqueInput | Prisma.card_setsWhereUniqueInput[];
    connect?: Prisma.card_setsWhereUniqueInput | Prisma.card_setsWhereUniqueInput[];
    update?: Prisma.card_setsUpdateWithWhereUniqueWithoutGamesInput | Prisma.card_setsUpdateWithWhereUniqueWithoutGamesInput[];
    updateMany?: Prisma.card_setsUpdateManyWithWhereWithoutGamesInput | Prisma.card_setsUpdateManyWithWhereWithoutGamesInput[];
    deleteMany?: Prisma.card_setsScalarWhereInput | Prisma.card_setsScalarWhereInput[];
};
export type card_setsUncheckedUpdateManyWithoutGamesNestedInput = {
    create?: Prisma.XOR<Prisma.card_setsCreateWithoutGamesInput, Prisma.card_setsUncheckedCreateWithoutGamesInput> | Prisma.card_setsCreateWithoutGamesInput[] | Prisma.card_setsUncheckedCreateWithoutGamesInput[];
    connectOrCreate?: Prisma.card_setsCreateOrConnectWithoutGamesInput | Prisma.card_setsCreateOrConnectWithoutGamesInput[];
    upsert?: Prisma.card_setsUpsertWithWhereUniqueWithoutGamesInput | Prisma.card_setsUpsertWithWhereUniqueWithoutGamesInput[];
    createMany?: Prisma.card_setsCreateManyGamesInputEnvelope;
    set?: Prisma.card_setsWhereUniqueInput | Prisma.card_setsWhereUniqueInput[];
    disconnect?: Prisma.card_setsWhereUniqueInput | Prisma.card_setsWhereUniqueInput[];
    delete?: Prisma.card_setsWhereUniqueInput | Prisma.card_setsWhereUniqueInput[];
    connect?: Prisma.card_setsWhereUniqueInput | Prisma.card_setsWhereUniqueInput[];
    update?: Prisma.card_setsUpdateWithWhereUniqueWithoutGamesInput | Prisma.card_setsUpdateWithWhereUniqueWithoutGamesInput[];
    updateMany?: Prisma.card_setsUpdateManyWithWhereWithoutGamesInput | Prisma.card_setsUpdateManyWithWhereWithoutGamesInput[];
    deleteMany?: Prisma.card_setsScalarWhereInput | Prisma.card_setsScalarWhereInput[];
};
export type card_setsCreateWithoutCard_printingsInput = {
    id?: string;
    code: string;
    name: string;
    source: string;
    source_id?: string | null;
    release_date?: Date | string | null;
    set_type?: string | null;
    created_at?: Date | string;
    games: Prisma.gamesCreateNestedOneWithoutCard_setsInput;
};
export type card_setsUncheckedCreateWithoutCard_printingsInput = {
    id?: string;
    game_id: string;
    code: string;
    name: string;
    source: string;
    source_id?: string | null;
    release_date?: Date | string | null;
    set_type?: string | null;
    created_at?: Date | string;
};
export type card_setsCreateOrConnectWithoutCard_printingsInput = {
    where: Prisma.card_setsWhereUniqueInput;
    create: Prisma.XOR<Prisma.card_setsCreateWithoutCard_printingsInput, Prisma.card_setsUncheckedCreateWithoutCard_printingsInput>;
};
export type card_setsUpsertWithoutCard_printingsInput = {
    update: Prisma.XOR<Prisma.card_setsUpdateWithoutCard_printingsInput, Prisma.card_setsUncheckedUpdateWithoutCard_printingsInput>;
    create: Prisma.XOR<Prisma.card_setsCreateWithoutCard_printingsInput, Prisma.card_setsUncheckedCreateWithoutCard_printingsInput>;
    where?: Prisma.card_setsWhereInput;
};
export type card_setsUpdateToOneWithWhereWithoutCard_printingsInput = {
    where?: Prisma.card_setsWhereInput;
    data: Prisma.XOR<Prisma.card_setsUpdateWithoutCard_printingsInput, Prisma.card_setsUncheckedUpdateWithoutCard_printingsInput>;
};
export type card_setsUpdateWithoutCard_printingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    source_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    release_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    set_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    games?: Prisma.gamesUpdateOneRequiredWithoutCard_setsNestedInput;
};
export type card_setsUncheckedUpdateWithoutCard_printingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    source_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    release_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    set_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type card_setsCreateWithoutGamesInput = {
    id?: string;
    code: string;
    name: string;
    source: string;
    source_id?: string | null;
    release_date?: Date | string | null;
    set_type?: string | null;
    created_at?: Date | string;
    card_printings?: Prisma.card_printingsCreateNestedManyWithoutCard_setsInput;
};
export type card_setsUncheckedCreateWithoutGamesInput = {
    id?: string;
    code: string;
    name: string;
    source: string;
    source_id?: string | null;
    release_date?: Date | string | null;
    set_type?: string | null;
    created_at?: Date | string;
    card_printings?: Prisma.card_printingsUncheckedCreateNestedManyWithoutCard_setsInput;
};
export type card_setsCreateOrConnectWithoutGamesInput = {
    where: Prisma.card_setsWhereUniqueInput;
    create: Prisma.XOR<Prisma.card_setsCreateWithoutGamesInput, Prisma.card_setsUncheckedCreateWithoutGamesInput>;
};
export type card_setsCreateManyGamesInputEnvelope = {
    data: Prisma.card_setsCreateManyGamesInput | Prisma.card_setsCreateManyGamesInput[];
    skipDuplicates?: boolean;
};
export type card_setsUpsertWithWhereUniqueWithoutGamesInput = {
    where: Prisma.card_setsWhereUniqueInput;
    update: Prisma.XOR<Prisma.card_setsUpdateWithoutGamesInput, Prisma.card_setsUncheckedUpdateWithoutGamesInput>;
    create: Prisma.XOR<Prisma.card_setsCreateWithoutGamesInput, Prisma.card_setsUncheckedCreateWithoutGamesInput>;
};
export type card_setsUpdateWithWhereUniqueWithoutGamesInput = {
    where: Prisma.card_setsWhereUniqueInput;
    data: Prisma.XOR<Prisma.card_setsUpdateWithoutGamesInput, Prisma.card_setsUncheckedUpdateWithoutGamesInput>;
};
export type card_setsUpdateManyWithWhereWithoutGamesInput = {
    where: Prisma.card_setsScalarWhereInput;
    data: Prisma.XOR<Prisma.card_setsUpdateManyMutationInput, Prisma.card_setsUncheckedUpdateManyWithoutGamesInput>;
};
export type card_setsScalarWhereInput = {
    AND?: Prisma.card_setsScalarWhereInput | Prisma.card_setsScalarWhereInput[];
    OR?: Prisma.card_setsScalarWhereInput[];
    NOT?: Prisma.card_setsScalarWhereInput | Prisma.card_setsScalarWhereInput[];
    id?: Prisma.UuidFilter<"card_sets"> | string;
    game_id?: Prisma.UuidFilter<"card_sets"> | string;
    code?: Prisma.StringFilter<"card_sets"> | string;
    name?: Prisma.StringFilter<"card_sets"> | string;
    source?: Prisma.StringFilter<"card_sets"> | string;
    source_id?: Prisma.StringNullableFilter<"card_sets"> | string | null;
    release_date?: Prisma.DateTimeNullableFilter<"card_sets"> | Date | string | null;
    set_type?: Prisma.StringNullableFilter<"card_sets"> | string | null;
    created_at?: Prisma.DateTimeFilter<"card_sets"> | Date | string;
};
export type card_setsCreateManyGamesInput = {
    id?: string;
    code: string;
    name: string;
    source: string;
    source_id?: string | null;
    release_date?: Date | string | null;
    set_type?: string | null;
    created_at?: Date | string;
};
export type card_setsUpdateWithoutGamesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    source_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    release_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    set_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    card_printings?: Prisma.card_printingsUpdateManyWithoutCard_setsNestedInput;
};
export type card_setsUncheckedUpdateWithoutGamesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    source_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    release_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    set_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    card_printings?: Prisma.card_printingsUncheckedUpdateManyWithoutCard_setsNestedInput;
};
export type card_setsUncheckedUpdateManyWithoutGamesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    source_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    release_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    set_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type Card_setsCountOutputType
 */
export type Card_setsCountOutputType = {
    card_printings: number;
};
export type Card_setsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    card_printings?: boolean | Card_setsCountOutputTypeCountCard_printingsArgs;
};
/**
 * Card_setsCountOutputType without action
 */
export type Card_setsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card_setsCountOutputType
     */
    select?: Prisma.Card_setsCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * Card_setsCountOutputType without action
 */
export type Card_setsCountOutputTypeCountCard_printingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.card_printingsWhereInput;
};
export type card_setsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    game_id?: boolean;
    code?: boolean;
    name?: boolean;
    source?: boolean;
    source_id?: boolean;
    release_date?: boolean;
    set_type?: boolean;
    created_at?: boolean;
    card_printings?: boolean | Prisma.card_sets$card_printingsArgs<ExtArgs>;
    games?: boolean | Prisma.gamesDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.Card_setsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["card_sets"]>;
export type card_setsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    game_id?: boolean;
    code?: boolean;
    name?: boolean;
    source?: boolean;
    source_id?: boolean;
    release_date?: boolean;
    set_type?: boolean;
    created_at?: boolean;
    games?: boolean | Prisma.gamesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["card_sets"]>;
export type card_setsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    game_id?: boolean;
    code?: boolean;
    name?: boolean;
    source?: boolean;
    source_id?: boolean;
    release_date?: boolean;
    set_type?: boolean;
    created_at?: boolean;
    games?: boolean | Prisma.gamesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["card_sets"]>;
export type card_setsSelectScalar = {
    id?: boolean;
    game_id?: boolean;
    code?: boolean;
    name?: boolean;
    source?: boolean;
    source_id?: boolean;
    release_date?: boolean;
    set_type?: boolean;
    created_at?: boolean;
};
export type card_setsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "game_id" | "code" | "name" | "source" | "source_id" | "release_date" | "set_type" | "created_at", ExtArgs["result"]["card_sets"]>;
export type card_setsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    card_printings?: boolean | Prisma.card_sets$card_printingsArgs<ExtArgs>;
    games?: boolean | Prisma.gamesDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.Card_setsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type card_setsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    games?: boolean | Prisma.gamesDefaultArgs<ExtArgs>;
};
export type card_setsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    games?: boolean | Prisma.gamesDefaultArgs<ExtArgs>;
};
export type $card_setsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "card_sets";
    objects: {
        card_printings: Prisma.$card_printingsPayload<ExtArgs>[];
        games: Prisma.$gamesPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        game_id: string;
        code: string;
        name: string;
        source: string;
        source_id: string | null;
        release_date: Date | null;
        set_type: string | null;
        created_at: Date;
    }, ExtArgs["result"]["card_sets"]>;
    composites: {};
};
export type card_setsGetPayload<S extends boolean | null | undefined | card_setsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$card_setsPayload, S>;
export type card_setsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<card_setsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Card_setsCountAggregateInputType | true;
};
export interface card_setsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['card_sets'];
        meta: {
            name: 'card_sets';
        };
    };
    /**
     * Find zero or one Card_sets that matches the filter.
     * @param {card_setsFindUniqueArgs} args - Arguments to find a Card_sets
     * @example
     * // Get one Card_sets
     * const card_sets = await prisma.card_sets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends card_setsFindUniqueArgs>(args: Prisma.SelectSubset<T, card_setsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__card_setsClient<runtime.Types.Result.GetResult<Prisma.$card_setsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Card_sets that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {card_setsFindUniqueOrThrowArgs} args - Arguments to find a Card_sets
     * @example
     * // Get one Card_sets
     * const card_sets = await prisma.card_sets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends card_setsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, card_setsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__card_setsClient<runtime.Types.Result.GetResult<Prisma.$card_setsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Card_sets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {card_setsFindFirstArgs} args - Arguments to find a Card_sets
     * @example
     * // Get one Card_sets
     * const card_sets = await prisma.card_sets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends card_setsFindFirstArgs>(args?: Prisma.SelectSubset<T, card_setsFindFirstArgs<ExtArgs>>): Prisma.Prisma__card_setsClient<runtime.Types.Result.GetResult<Prisma.$card_setsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Card_sets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {card_setsFindFirstOrThrowArgs} args - Arguments to find a Card_sets
     * @example
     * // Get one Card_sets
     * const card_sets = await prisma.card_sets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends card_setsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, card_setsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__card_setsClient<runtime.Types.Result.GetResult<Prisma.$card_setsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Card_sets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {card_setsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Card_sets
     * const card_sets = await prisma.card_sets.findMany()
     *
     * // Get first 10 Card_sets
     * const card_sets = await prisma.card_sets.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const card_setsWithIdOnly = await prisma.card_sets.findMany({ select: { id: true } })
     *
     */
    findMany<T extends card_setsFindManyArgs>(args?: Prisma.SelectSubset<T, card_setsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$card_setsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Card_sets.
     * @param {card_setsCreateArgs} args - Arguments to create a Card_sets.
     * @example
     * // Create one Card_sets
     * const Card_sets = await prisma.card_sets.create({
     *   data: {
     *     // ... data to create a Card_sets
     *   }
     * })
     *
     */
    create<T extends card_setsCreateArgs>(args: Prisma.SelectSubset<T, card_setsCreateArgs<ExtArgs>>): Prisma.Prisma__card_setsClient<runtime.Types.Result.GetResult<Prisma.$card_setsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Card_sets.
     * @param {card_setsCreateManyArgs} args - Arguments to create many Card_sets.
     * @example
     * // Create many Card_sets
     * const card_sets = await prisma.card_sets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends card_setsCreateManyArgs>(args?: Prisma.SelectSubset<T, card_setsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Card_sets and returns the data saved in the database.
     * @param {card_setsCreateManyAndReturnArgs} args - Arguments to create many Card_sets.
     * @example
     * // Create many Card_sets
     * const card_sets = await prisma.card_sets.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Card_sets and only return the `id`
     * const card_setsWithIdOnly = await prisma.card_sets.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends card_setsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, card_setsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$card_setsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Card_sets.
     * @param {card_setsDeleteArgs} args - Arguments to delete one Card_sets.
     * @example
     * // Delete one Card_sets
     * const Card_sets = await prisma.card_sets.delete({
     *   where: {
     *     // ... filter to delete one Card_sets
     *   }
     * })
     *
     */
    delete<T extends card_setsDeleteArgs>(args: Prisma.SelectSubset<T, card_setsDeleteArgs<ExtArgs>>): Prisma.Prisma__card_setsClient<runtime.Types.Result.GetResult<Prisma.$card_setsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Card_sets.
     * @param {card_setsUpdateArgs} args - Arguments to update one Card_sets.
     * @example
     * // Update one Card_sets
     * const card_sets = await prisma.card_sets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends card_setsUpdateArgs>(args: Prisma.SelectSubset<T, card_setsUpdateArgs<ExtArgs>>): Prisma.Prisma__card_setsClient<runtime.Types.Result.GetResult<Prisma.$card_setsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Card_sets.
     * @param {card_setsDeleteManyArgs} args - Arguments to filter Card_sets to delete.
     * @example
     * // Delete a few Card_sets
     * const { count } = await prisma.card_sets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends card_setsDeleteManyArgs>(args?: Prisma.SelectSubset<T, card_setsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Card_sets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {card_setsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Card_sets
     * const card_sets = await prisma.card_sets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends card_setsUpdateManyArgs>(args: Prisma.SelectSubset<T, card_setsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Card_sets and returns the data updated in the database.
     * @param {card_setsUpdateManyAndReturnArgs} args - Arguments to update many Card_sets.
     * @example
     * // Update many Card_sets
     * const card_sets = await prisma.card_sets.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Card_sets and only return the `id`
     * const card_setsWithIdOnly = await prisma.card_sets.updateManyAndReturn({
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
    updateManyAndReturn<T extends card_setsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, card_setsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$card_setsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Card_sets.
     * @param {card_setsUpsertArgs} args - Arguments to update or create a Card_sets.
     * @example
     * // Update or create a Card_sets
     * const card_sets = await prisma.card_sets.upsert({
     *   create: {
     *     // ... data to create a Card_sets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Card_sets we want to update
     *   }
     * })
     */
    upsert<T extends card_setsUpsertArgs>(args: Prisma.SelectSubset<T, card_setsUpsertArgs<ExtArgs>>): Prisma.Prisma__card_setsClient<runtime.Types.Result.GetResult<Prisma.$card_setsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Card_sets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {card_setsCountArgs} args - Arguments to filter Card_sets to count.
     * @example
     * // Count the number of Card_sets
     * const count = await prisma.card_sets.count({
     *   where: {
     *     // ... the filter for the Card_sets we want to count
     *   }
     * })
    **/
    count<T extends card_setsCountArgs>(args?: Prisma.Subset<T, card_setsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Card_setsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Card_sets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Card_setsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Card_setsAggregateArgs>(args: Prisma.Subset<T, Card_setsAggregateArgs>): Prisma.PrismaPromise<GetCard_setsAggregateType<T>>;
    /**
     * Group by Card_sets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {card_setsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends card_setsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: card_setsGroupByArgs['orderBy'];
    } : {
        orderBy?: card_setsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, card_setsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCard_setsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the card_sets model
     */
    readonly fields: card_setsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for card_sets.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__card_setsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    card_printings<T extends Prisma.card_sets$card_printingsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.card_sets$card_printingsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$card_printingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    games<T extends Prisma.gamesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.gamesDefaultArgs<ExtArgs>>): Prisma.Prisma__gamesClient<runtime.Types.Result.GetResult<Prisma.$gamesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the card_sets model
 */
export interface card_setsFieldRefs {
    readonly id: Prisma.FieldRef<"card_sets", 'String'>;
    readonly game_id: Prisma.FieldRef<"card_sets", 'String'>;
    readonly code: Prisma.FieldRef<"card_sets", 'String'>;
    readonly name: Prisma.FieldRef<"card_sets", 'String'>;
    readonly source: Prisma.FieldRef<"card_sets", 'String'>;
    readonly source_id: Prisma.FieldRef<"card_sets", 'String'>;
    readonly release_date: Prisma.FieldRef<"card_sets", 'DateTime'>;
    readonly set_type: Prisma.FieldRef<"card_sets", 'String'>;
    readonly created_at: Prisma.FieldRef<"card_sets", 'DateTime'>;
}
/**
 * card_sets findUnique
 */
export type card_setsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which card_sets to fetch.
     */
    where: Prisma.card_setsWhereUniqueInput;
};
/**
 * card_sets findUniqueOrThrow
 */
export type card_setsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which card_sets to fetch.
     */
    where: Prisma.card_setsWhereUniqueInput;
};
/**
 * card_sets findFirst
 */
export type card_setsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which card_sets to fetch.
     */
    where?: Prisma.card_setsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of card_sets to fetch.
     */
    orderBy?: Prisma.card_setsOrderByWithRelationInput | Prisma.card_setsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for card_sets.
     */
    cursor?: Prisma.card_setsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` card_sets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` card_sets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of card_sets.
     */
    distinct?: Prisma.Card_setsScalarFieldEnum | Prisma.Card_setsScalarFieldEnum[];
};
/**
 * card_sets findFirstOrThrow
 */
export type card_setsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which card_sets to fetch.
     */
    where?: Prisma.card_setsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of card_sets to fetch.
     */
    orderBy?: Prisma.card_setsOrderByWithRelationInput | Prisma.card_setsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for card_sets.
     */
    cursor?: Prisma.card_setsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` card_sets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` card_sets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of card_sets.
     */
    distinct?: Prisma.Card_setsScalarFieldEnum | Prisma.Card_setsScalarFieldEnum[];
};
/**
 * card_sets findMany
 */
export type card_setsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which card_sets to fetch.
     */
    where?: Prisma.card_setsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of card_sets to fetch.
     */
    orderBy?: Prisma.card_setsOrderByWithRelationInput | Prisma.card_setsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing card_sets.
     */
    cursor?: Prisma.card_setsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` card_sets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` card_sets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of card_sets.
     */
    distinct?: Prisma.Card_setsScalarFieldEnum | Prisma.Card_setsScalarFieldEnum[];
};
/**
 * card_sets create
 */
export type card_setsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a card_sets.
     */
    data: Prisma.XOR<Prisma.card_setsCreateInput, Prisma.card_setsUncheckedCreateInput>;
};
/**
 * card_sets createMany
 */
export type card_setsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many card_sets.
     */
    data: Prisma.card_setsCreateManyInput | Prisma.card_setsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * card_sets createManyAndReturn
 */
export type card_setsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the card_sets
     */
    select?: Prisma.card_setsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the card_sets
     */
    omit?: Prisma.card_setsOmit<ExtArgs> | null;
    /**
     * The data used to create many card_sets.
     */
    data: Prisma.card_setsCreateManyInput | Prisma.card_setsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.card_setsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * card_sets update
 */
export type card_setsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a card_sets.
     */
    data: Prisma.XOR<Prisma.card_setsUpdateInput, Prisma.card_setsUncheckedUpdateInput>;
    /**
     * Choose, which card_sets to update.
     */
    where: Prisma.card_setsWhereUniqueInput;
};
/**
 * card_sets updateMany
 */
export type card_setsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update card_sets.
     */
    data: Prisma.XOR<Prisma.card_setsUpdateManyMutationInput, Prisma.card_setsUncheckedUpdateManyInput>;
    /**
     * Filter which card_sets to update
     */
    where?: Prisma.card_setsWhereInput;
    /**
     * Limit how many card_sets to update.
     */
    limit?: number;
};
/**
 * card_sets updateManyAndReturn
 */
export type card_setsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the card_sets
     */
    select?: Prisma.card_setsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the card_sets
     */
    omit?: Prisma.card_setsOmit<ExtArgs> | null;
    /**
     * The data used to update card_sets.
     */
    data: Prisma.XOR<Prisma.card_setsUpdateManyMutationInput, Prisma.card_setsUncheckedUpdateManyInput>;
    /**
     * Filter which card_sets to update
     */
    where?: Prisma.card_setsWhereInput;
    /**
     * Limit how many card_sets to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.card_setsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * card_sets upsert
 */
export type card_setsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the card_sets to update in case it exists.
     */
    where: Prisma.card_setsWhereUniqueInput;
    /**
     * In case the card_sets found by the `where` argument doesn't exist, create a new card_sets with this data.
     */
    create: Prisma.XOR<Prisma.card_setsCreateInput, Prisma.card_setsUncheckedCreateInput>;
    /**
     * In case the card_sets was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.card_setsUpdateInput, Prisma.card_setsUncheckedUpdateInput>;
};
/**
 * card_sets delete
 */
export type card_setsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which card_sets to delete.
     */
    where: Prisma.card_setsWhereUniqueInput;
};
/**
 * card_sets deleteMany
 */
export type card_setsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which card_sets to delete
     */
    where?: Prisma.card_setsWhereInput;
    /**
     * Limit how many card_sets to delete.
     */
    limit?: number;
};
/**
 * card_sets.card_printings
 */
export type card_sets$card_printingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * card_sets without action
 */
export type card_setsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
