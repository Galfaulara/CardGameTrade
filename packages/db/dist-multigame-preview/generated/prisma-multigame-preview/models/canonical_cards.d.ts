import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model canonical_cards
 *
 */
export type canonical_cardsModel = runtime.Types.Result.DefaultSelection<Prisma.$canonical_cardsPayload>;
export type AggregateCanonical_cards = {
    _count: Canonical_cardsCountAggregateOutputType | null;
    _min: Canonical_cardsMinAggregateOutputType | null;
    _max: Canonical_cardsMaxAggregateOutputType | null;
};
export type Canonical_cardsMinAggregateOutputType = {
    id: string | null;
    game_id: string | null;
    source: string | null;
    source_key: string | null;
    name: string | null;
    normalized_name: string | null;
    mana_cost: string | null;
    type_line: string | null;
    oracle_text: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Canonical_cardsMaxAggregateOutputType = {
    id: string | null;
    game_id: string | null;
    source: string | null;
    source_key: string | null;
    name: string | null;
    normalized_name: string | null;
    mana_cost: string | null;
    type_line: string | null;
    oracle_text: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Canonical_cardsCountAggregateOutputType = {
    id: number;
    game_id: number;
    source: number;
    source_key: number;
    name: number;
    normalized_name: number;
    mana_cost: number;
    type_line: number;
    oracle_text: number;
    colors: number;
    color_identity: number;
    raw_data: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Canonical_cardsMinAggregateInputType = {
    id?: true;
    game_id?: true;
    source?: true;
    source_key?: true;
    name?: true;
    normalized_name?: true;
    mana_cost?: true;
    type_line?: true;
    oracle_text?: true;
    created_at?: true;
    updated_at?: true;
};
export type Canonical_cardsMaxAggregateInputType = {
    id?: true;
    game_id?: true;
    source?: true;
    source_key?: true;
    name?: true;
    normalized_name?: true;
    mana_cost?: true;
    type_line?: true;
    oracle_text?: true;
    created_at?: true;
    updated_at?: true;
};
export type Canonical_cardsCountAggregateInputType = {
    id?: true;
    game_id?: true;
    source?: true;
    source_key?: true;
    name?: true;
    normalized_name?: true;
    mana_cost?: true;
    type_line?: true;
    oracle_text?: true;
    colors?: true;
    color_identity?: true;
    raw_data?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Canonical_cardsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which canonical_cards to aggregate.
     */
    where?: Prisma.canonical_cardsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of canonical_cards to fetch.
     */
    orderBy?: Prisma.canonical_cardsOrderByWithRelationInput | Prisma.canonical_cardsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.canonical_cardsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` canonical_cards from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` canonical_cards.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned canonical_cards
    **/
    _count?: true | Canonical_cardsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Canonical_cardsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Canonical_cardsMaxAggregateInputType;
};
export type GetCanonical_cardsAggregateType<T extends Canonical_cardsAggregateArgs> = {
    [P in keyof T & keyof AggregateCanonical_cards]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCanonical_cards[P]> : Prisma.GetScalarType<T[P], AggregateCanonical_cards[P]>;
};
export type canonical_cardsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.canonical_cardsWhereInput;
    orderBy?: Prisma.canonical_cardsOrderByWithAggregationInput | Prisma.canonical_cardsOrderByWithAggregationInput[];
    by: Prisma.Canonical_cardsScalarFieldEnum[] | Prisma.Canonical_cardsScalarFieldEnum;
    having?: Prisma.canonical_cardsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Canonical_cardsCountAggregateInputType | true;
    _min?: Canonical_cardsMinAggregateInputType;
    _max?: Canonical_cardsMaxAggregateInputType;
};
export type Canonical_cardsGroupByOutputType = {
    id: string;
    game_id: string;
    source: string;
    source_key: string;
    name: string;
    normalized_name: string;
    mana_cost: string | null;
    type_line: string | null;
    oracle_text: string | null;
    colors: string[];
    color_identity: string[];
    raw_data: runtime.JsonValue | null;
    created_at: Date;
    updated_at: Date;
    _count: Canonical_cardsCountAggregateOutputType | null;
    _min: Canonical_cardsMinAggregateOutputType | null;
    _max: Canonical_cardsMaxAggregateOutputType | null;
};
export type GetCanonical_cardsGroupByPayload<T extends canonical_cardsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Canonical_cardsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Canonical_cardsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Canonical_cardsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Canonical_cardsGroupByOutputType[P]>;
}>>;
export type canonical_cardsWhereInput = {
    AND?: Prisma.canonical_cardsWhereInput | Prisma.canonical_cardsWhereInput[];
    OR?: Prisma.canonical_cardsWhereInput[];
    NOT?: Prisma.canonical_cardsWhereInput | Prisma.canonical_cardsWhereInput[];
    id?: Prisma.UuidFilter<"canonical_cards"> | string;
    game_id?: Prisma.UuidFilter<"canonical_cards"> | string;
    source?: Prisma.StringFilter<"canonical_cards"> | string;
    source_key?: Prisma.StringFilter<"canonical_cards"> | string;
    name?: Prisma.StringFilter<"canonical_cards"> | string;
    normalized_name?: Prisma.StringFilter<"canonical_cards"> | string;
    mana_cost?: Prisma.StringNullableFilter<"canonical_cards"> | string | null;
    type_line?: Prisma.StringNullableFilter<"canonical_cards"> | string | null;
    oracle_text?: Prisma.StringNullableFilter<"canonical_cards"> | string | null;
    colors?: Prisma.StringNullableListFilter<"canonical_cards">;
    color_identity?: Prisma.StringNullableListFilter<"canonical_cards">;
    raw_data?: Prisma.JsonNullableFilter<"canonical_cards">;
    created_at?: Prisma.DateTimeFilter<"canonical_cards"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"canonical_cards"> | Date | string;
    games?: Prisma.XOR<Prisma.GamesScalarRelationFilter, Prisma.gamesWhereInput>;
    card_printings?: Prisma.Card_printingsListRelationFilter;
    wishlist_items?: Prisma.Wishlist_itemsListRelationFilter;
    wishlist_offer_requested_items?: Prisma.Wishlist_offer_requested_itemsListRelationFilter;
};
export type canonical_cardsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    source_key?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    normalized_name?: Prisma.SortOrder;
    mana_cost?: Prisma.SortOrderInput | Prisma.SortOrder;
    type_line?: Prisma.SortOrderInput | Prisma.SortOrder;
    oracle_text?: Prisma.SortOrderInput | Prisma.SortOrder;
    colors?: Prisma.SortOrder;
    color_identity?: Prisma.SortOrder;
    raw_data?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    games?: Prisma.gamesOrderByWithRelationInput;
    card_printings?: Prisma.card_printingsOrderByRelationAggregateInput;
    wishlist_items?: Prisma.wishlist_itemsOrderByRelationAggregateInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsOrderByRelationAggregateInput;
};
export type canonical_cardsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    id_game_id?: Prisma.canonical_cardsIdGame_idCompoundUniqueInput;
    game_id_source_source_key?: Prisma.canonical_cardsGame_idSourceSource_keyCompoundUniqueInput;
    AND?: Prisma.canonical_cardsWhereInput | Prisma.canonical_cardsWhereInput[];
    OR?: Prisma.canonical_cardsWhereInput[];
    NOT?: Prisma.canonical_cardsWhereInput | Prisma.canonical_cardsWhereInput[];
    game_id?: Prisma.UuidFilter<"canonical_cards"> | string;
    source?: Prisma.StringFilter<"canonical_cards"> | string;
    source_key?: Prisma.StringFilter<"canonical_cards"> | string;
    name?: Prisma.StringFilter<"canonical_cards"> | string;
    normalized_name?: Prisma.StringFilter<"canonical_cards"> | string;
    mana_cost?: Prisma.StringNullableFilter<"canonical_cards"> | string | null;
    type_line?: Prisma.StringNullableFilter<"canonical_cards"> | string | null;
    oracle_text?: Prisma.StringNullableFilter<"canonical_cards"> | string | null;
    colors?: Prisma.StringNullableListFilter<"canonical_cards">;
    color_identity?: Prisma.StringNullableListFilter<"canonical_cards">;
    raw_data?: Prisma.JsonNullableFilter<"canonical_cards">;
    created_at?: Prisma.DateTimeFilter<"canonical_cards"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"canonical_cards"> | Date | string;
    games?: Prisma.XOR<Prisma.GamesScalarRelationFilter, Prisma.gamesWhereInput>;
    card_printings?: Prisma.Card_printingsListRelationFilter;
    wishlist_items?: Prisma.Wishlist_itemsListRelationFilter;
    wishlist_offer_requested_items?: Prisma.Wishlist_offer_requested_itemsListRelationFilter;
}, "id" | "id_game_id" | "game_id_source_source_key">;
export type canonical_cardsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    source_key?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    normalized_name?: Prisma.SortOrder;
    mana_cost?: Prisma.SortOrderInput | Prisma.SortOrder;
    type_line?: Prisma.SortOrderInput | Prisma.SortOrder;
    oracle_text?: Prisma.SortOrderInput | Prisma.SortOrder;
    colors?: Prisma.SortOrder;
    color_identity?: Prisma.SortOrder;
    raw_data?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.canonical_cardsCountOrderByAggregateInput;
    _max?: Prisma.canonical_cardsMaxOrderByAggregateInput;
    _min?: Prisma.canonical_cardsMinOrderByAggregateInput;
};
export type canonical_cardsScalarWhereWithAggregatesInput = {
    AND?: Prisma.canonical_cardsScalarWhereWithAggregatesInput | Prisma.canonical_cardsScalarWhereWithAggregatesInput[];
    OR?: Prisma.canonical_cardsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.canonical_cardsScalarWhereWithAggregatesInput | Prisma.canonical_cardsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"canonical_cards"> | string;
    game_id?: Prisma.UuidWithAggregatesFilter<"canonical_cards"> | string;
    source?: Prisma.StringWithAggregatesFilter<"canonical_cards"> | string;
    source_key?: Prisma.StringWithAggregatesFilter<"canonical_cards"> | string;
    name?: Prisma.StringWithAggregatesFilter<"canonical_cards"> | string;
    normalized_name?: Prisma.StringWithAggregatesFilter<"canonical_cards"> | string;
    mana_cost?: Prisma.StringNullableWithAggregatesFilter<"canonical_cards"> | string | null;
    type_line?: Prisma.StringNullableWithAggregatesFilter<"canonical_cards"> | string | null;
    oracle_text?: Prisma.StringNullableWithAggregatesFilter<"canonical_cards"> | string | null;
    colors?: Prisma.StringNullableListFilter<"canonical_cards">;
    color_identity?: Prisma.StringNullableListFilter<"canonical_cards">;
    raw_data?: Prisma.JsonNullableWithAggregatesFilter<"canonical_cards">;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"canonical_cards"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"canonical_cards"> | Date | string;
};
export type canonical_cardsCreateInput = {
    id?: string;
    source: string;
    source_key: string;
    name: string;
    normalized_name: string;
    mana_cost?: string | null;
    type_line?: string | null;
    oracle_text?: string | null;
    colors?: Prisma.canonical_cardsCreatecolorsInput | string[];
    color_identity?: Prisma.canonical_cardsCreatecolor_identityInput | string[];
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
    updated_at?: Date | string;
    games: Prisma.gamesCreateNestedOneWithoutCanonical_cardsInput;
    card_printings?: Prisma.card_printingsCreateNestedManyWithoutCanonical_cardsInput;
    wishlist_items?: Prisma.wishlist_itemsCreateNestedManyWithoutCanonical_cardsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsCreateNestedManyWithoutCanonical_cardsInput;
};
export type canonical_cardsUncheckedCreateInput = {
    id?: string;
    game_id: string;
    source: string;
    source_key: string;
    name: string;
    normalized_name: string;
    mana_cost?: string | null;
    type_line?: string | null;
    oracle_text?: string | null;
    colors?: Prisma.canonical_cardsCreatecolorsInput | string[];
    color_identity?: Prisma.canonical_cardsCreatecolor_identityInput | string[];
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
    updated_at?: Date | string;
    card_printings?: Prisma.card_printingsUncheckedCreateNestedManyWithoutCanonical_cardsInput;
    wishlist_items?: Prisma.wishlist_itemsUncheckedCreateNestedManyWithoutCanonical_cardsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedCreateNestedManyWithoutCanonical_cardsInput;
};
export type canonical_cardsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    source_key?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    normalized_name?: Prisma.StringFieldUpdateOperationsInput | string;
    mana_cost?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type_line?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    oracle_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    colors?: Prisma.canonical_cardsUpdatecolorsInput | string[];
    color_identity?: Prisma.canonical_cardsUpdatecolor_identityInput | string[];
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    games?: Prisma.gamesUpdateOneRequiredWithoutCanonical_cardsNestedInput;
    card_printings?: Prisma.card_printingsUpdateManyWithoutCanonical_cardsNestedInput;
    wishlist_items?: Prisma.wishlist_itemsUpdateManyWithoutCanonical_cardsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUpdateManyWithoutCanonical_cardsNestedInput;
};
export type canonical_cardsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    source_key?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    normalized_name?: Prisma.StringFieldUpdateOperationsInput | string;
    mana_cost?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type_line?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    oracle_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    colors?: Prisma.canonical_cardsUpdatecolorsInput | string[];
    color_identity?: Prisma.canonical_cardsUpdatecolor_identityInput | string[];
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    card_printings?: Prisma.card_printingsUncheckedUpdateManyWithoutCanonical_cardsNestedInput;
    wishlist_items?: Prisma.wishlist_itemsUncheckedUpdateManyWithoutCanonical_cardsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedUpdateManyWithoutCanonical_cardsNestedInput;
};
export type canonical_cardsCreateManyInput = {
    id?: string;
    game_id: string;
    source: string;
    source_key: string;
    name: string;
    normalized_name: string;
    mana_cost?: string | null;
    type_line?: string | null;
    oracle_text?: string | null;
    colors?: Prisma.canonical_cardsCreatecolorsInput | string[];
    color_identity?: Prisma.canonical_cardsCreatecolor_identityInput | string[];
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type canonical_cardsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    source_key?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    normalized_name?: Prisma.StringFieldUpdateOperationsInput | string;
    mana_cost?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type_line?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    oracle_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    colors?: Prisma.canonical_cardsUpdatecolorsInput | string[];
    color_identity?: Prisma.canonical_cardsUpdatecolor_identityInput | string[];
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type canonical_cardsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    source_key?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    normalized_name?: Prisma.StringFieldUpdateOperationsInput | string;
    mana_cost?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type_line?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    oracle_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    colors?: Prisma.canonical_cardsUpdatecolorsInput | string[];
    color_identity?: Prisma.canonical_cardsUpdatecolor_identityInput | string[];
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type canonical_cardsIdGame_idCompoundUniqueInput = {
    id: string;
    game_id: string;
};
export type canonical_cardsGame_idSourceSource_keyCompoundUniqueInput = {
    game_id: string;
    source: string;
    source_key: string;
};
export type canonical_cardsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    source_key?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    normalized_name?: Prisma.SortOrder;
    mana_cost?: Prisma.SortOrder;
    type_line?: Prisma.SortOrder;
    oracle_text?: Prisma.SortOrder;
    colors?: Prisma.SortOrder;
    color_identity?: Prisma.SortOrder;
    raw_data?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type canonical_cardsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    source_key?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    normalized_name?: Prisma.SortOrder;
    mana_cost?: Prisma.SortOrder;
    type_line?: Prisma.SortOrder;
    oracle_text?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type canonical_cardsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    source_key?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    normalized_name?: Prisma.SortOrder;
    mana_cost?: Prisma.SortOrder;
    type_line?: Prisma.SortOrder;
    oracle_text?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type Canonical_cardsScalarRelationFilter = {
    is?: Prisma.canonical_cardsWhereInput;
    isNot?: Prisma.canonical_cardsWhereInput;
};
export type Canonical_cardsListRelationFilter = {
    every?: Prisma.canonical_cardsWhereInput;
    some?: Prisma.canonical_cardsWhereInput;
    none?: Prisma.canonical_cardsWhereInput;
};
export type canonical_cardsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Canonical_cardsNullableScalarRelationFilter = {
    is?: Prisma.canonical_cardsWhereInput | null;
    isNot?: Prisma.canonical_cardsWhereInput | null;
};
export type canonical_cardsCreatecolorsInput = {
    set: string[];
};
export type canonical_cardsCreatecolor_identityInput = {
    set: string[];
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type canonical_cardsUpdatecolorsInput = {
    set?: string[];
    push?: string | string[];
};
export type canonical_cardsUpdatecolor_identityInput = {
    set?: string[];
    push?: string | string[];
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type canonical_cardsCreateNestedOneWithoutCard_printingsInput = {
    create?: Prisma.XOR<Prisma.canonical_cardsCreateWithoutCard_printingsInput, Prisma.canonical_cardsUncheckedCreateWithoutCard_printingsInput>;
    connectOrCreate?: Prisma.canonical_cardsCreateOrConnectWithoutCard_printingsInput;
    connect?: Prisma.canonical_cardsWhereUniqueInput;
};
export type canonical_cardsUpdateOneRequiredWithoutCard_printingsNestedInput = {
    create?: Prisma.XOR<Prisma.canonical_cardsCreateWithoutCard_printingsInput, Prisma.canonical_cardsUncheckedCreateWithoutCard_printingsInput>;
    connectOrCreate?: Prisma.canonical_cardsCreateOrConnectWithoutCard_printingsInput;
    upsert?: Prisma.canonical_cardsUpsertWithoutCard_printingsInput;
    connect?: Prisma.canonical_cardsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.canonical_cardsUpdateToOneWithWhereWithoutCard_printingsInput, Prisma.canonical_cardsUpdateWithoutCard_printingsInput>, Prisma.canonical_cardsUncheckedUpdateWithoutCard_printingsInput>;
};
export type canonical_cardsCreateNestedManyWithoutGamesInput = {
    create?: Prisma.XOR<Prisma.canonical_cardsCreateWithoutGamesInput, Prisma.canonical_cardsUncheckedCreateWithoutGamesInput> | Prisma.canonical_cardsCreateWithoutGamesInput[] | Prisma.canonical_cardsUncheckedCreateWithoutGamesInput[];
    connectOrCreate?: Prisma.canonical_cardsCreateOrConnectWithoutGamesInput | Prisma.canonical_cardsCreateOrConnectWithoutGamesInput[];
    createMany?: Prisma.canonical_cardsCreateManyGamesInputEnvelope;
    connect?: Prisma.canonical_cardsWhereUniqueInput | Prisma.canonical_cardsWhereUniqueInput[];
};
export type canonical_cardsUncheckedCreateNestedManyWithoutGamesInput = {
    create?: Prisma.XOR<Prisma.canonical_cardsCreateWithoutGamesInput, Prisma.canonical_cardsUncheckedCreateWithoutGamesInput> | Prisma.canonical_cardsCreateWithoutGamesInput[] | Prisma.canonical_cardsUncheckedCreateWithoutGamesInput[];
    connectOrCreate?: Prisma.canonical_cardsCreateOrConnectWithoutGamesInput | Prisma.canonical_cardsCreateOrConnectWithoutGamesInput[];
    createMany?: Prisma.canonical_cardsCreateManyGamesInputEnvelope;
    connect?: Prisma.canonical_cardsWhereUniqueInput | Prisma.canonical_cardsWhereUniqueInput[];
};
export type canonical_cardsUpdateManyWithoutGamesNestedInput = {
    create?: Prisma.XOR<Prisma.canonical_cardsCreateWithoutGamesInput, Prisma.canonical_cardsUncheckedCreateWithoutGamesInput> | Prisma.canonical_cardsCreateWithoutGamesInput[] | Prisma.canonical_cardsUncheckedCreateWithoutGamesInput[];
    connectOrCreate?: Prisma.canonical_cardsCreateOrConnectWithoutGamesInput | Prisma.canonical_cardsCreateOrConnectWithoutGamesInput[];
    upsert?: Prisma.canonical_cardsUpsertWithWhereUniqueWithoutGamesInput | Prisma.canonical_cardsUpsertWithWhereUniqueWithoutGamesInput[];
    createMany?: Prisma.canonical_cardsCreateManyGamesInputEnvelope;
    set?: Prisma.canonical_cardsWhereUniqueInput | Prisma.canonical_cardsWhereUniqueInput[];
    disconnect?: Prisma.canonical_cardsWhereUniqueInput | Prisma.canonical_cardsWhereUniqueInput[];
    delete?: Prisma.canonical_cardsWhereUniqueInput | Prisma.canonical_cardsWhereUniqueInput[];
    connect?: Prisma.canonical_cardsWhereUniqueInput | Prisma.canonical_cardsWhereUniqueInput[];
    update?: Prisma.canonical_cardsUpdateWithWhereUniqueWithoutGamesInput | Prisma.canonical_cardsUpdateWithWhereUniqueWithoutGamesInput[];
    updateMany?: Prisma.canonical_cardsUpdateManyWithWhereWithoutGamesInput | Prisma.canonical_cardsUpdateManyWithWhereWithoutGamesInput[];
    deleteMany?: Prisma.canonical_cardsScalarWhereInput | Prisma.canonical_cardsScalarWhereInput[];
};
export type canonical_cardsUncheckedUpdateManyWithoutGamesNestedInput = {
    create?: Prisma.XOR<Prisma.canonical_cardsCreateWithoutGamesInput, Prisma.canonical_cardsUncheckedCreateWithoutGamesInput> | Prisma.canonical_cardsCreateWithoutGamesInput[] | Prisma.canonical_cardsUncheckedCreateWithoutGamesInput[];
    connectOrCreate?: Prisma.canonical_cardsCreateOrConnectWithoutGamesInput | Prisma.canonical_cardsCreateOrConnectWithoutGamesInput[];
    upsert?: Prisma.canonical_cardsUpsertWithWhereUniqueWithoutGamesInput | Prisma.canonical_cardsUpsertWithWhereUniqueWithoutGamesInput[];
    createMany?: Prisma.canonical_cardsCreateManyGamesInputEnvelope;
    set?: Prisma.canonical_cardsWhereUniqueInput | Prisma.canonical_cardsWhereUniqueInput[];
    disconnect?: Prisma.canonical_cardsWhereUniqueInput | Prisma.canonical_cardsWhereUniqueInput[];
    delete?: Prisma.canonical_cardsWhereUniqueInput | Prisma.canonical_cardsWhereUniqueInput[];
    connect?: Prisma.canonical_cardsWhereUniqueInput | Prisma.canonical_cardsWhereUniqueInput[];
    update?: Prisma.canonical_cardsUpdateWithWhereUniqueWithoutGamesInput | Prisma.canonical_cardsUpdateWithWhereUniqueWithoutGamesInput[];
    updateMany?: Prisma.canonical_cardsUpdateManyWithWhereWithoutGamesInput | Prisma.canonical_cardsUpdateManyWithWhereWithoutGamesInput[];
    deleteMany?: Prisma.canonical_cardsScalarWhereInput | Prisma.canonical_cardsScalarWhereInput[];
};
export type canonical_cardsCreateNestedOneWithoutWishlist_itemsInput = {
    create?: Prisma.XOR<Prisma.canonical_cardsCreateWithoutWishlist_itemsInput, Prisma.canonical_cardsUncheckedCreateWithoutWishlist_itemsInput>;
    connectOrCreate?: Prisma.canonical_cardsCreateOrConnectWithoutWishlist_itemsInput;
    connect?: Prisma.canonical_cardsWhereUniqueInput;
};
export type canonical_cardsUpdateOneWithoutWishlist_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.canonical_cardsCreateWithoutWishlist_itemsInput, Prisma.canonical_cardsUncheckedCreateWithoutWishlist_itemsInput>;
    connectOrCreate?: Prisma.canonical_cardsCreateOrConnectWithoutWishlist_itemsInput;
    upsert?: Prisma.canonical_cardsUpsertWithoutWishlist_itemsInput;
    disconnect?: Prisma.canonical_cardsWhereInput | boolean;
    delete?: Prisma.canonical_cardsWhereInput | boolean;
    connect?: Prisma.canonical_cardsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.canonical_cardsUpdateToOneWithWhereWithoutWishlist_itemsInput, Prisma.canonical_cardsUpdateWithoutWishlist_itemsInput>, Prisma.canonical_cardsUncheckedUpdateWithoutWishlist_itemsInput>;
};
export type canonical_cardsCreateNestedOneWithoutWishlist_offer_requested_itemsInput = {
    create?: Prisma.XOR<Prisma.canonical_cardsCreateWithoutWishlist_offer_requested_itemsInput, Prisma.canonical_cardsUncheckedCreateWithoutWishlist_offer_requested_itemsInput>;
    connectOrCreate?: Prisma.canonical_cardsCreateOrConnectWithoutWishlist_offer_requested_itemsInput;
    connect?: Prisma.canonical_cardsWhereUniqueInput;
};
export type canonical_cardsUpdateOneWithoutWishlist_offer_requested_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.canonical_cardsCreateWithoutWishlist_offer_requested_itemsInput, Prisma.canonical_cardsUncheckedCreateWithoutWishlist_offer_requested_itemsInput>;
    connectOrCreate?: Prisma.canonical_cardsCreateOrConnectWithoutWishlist_offer_requested_itemsInput;
    upsert?: Prisma.canonical_cardsUpsertWithoutWishlist_offer_requested_itemsInput;
    disconnect?: Prisma.canonical_cardsWhereInput | boolean;
    delete?: Prisma.canonical_cardsWhereInput | boolean;
    connect?: Prisma.canonical_cardsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.canonical_cardsUpdateToOneWithWhereWithoutWishlist_offer_requested_itemsInput, Prisma.canonical_cardsUpdateWithoutWishlist_offer_requested_itemsInput>, Prisma.canonical_cardsUncheckedUpdateWithoutWishlist_offer_requested_itemsInput>;
};
export type canonical_cardsCreateWithoutCard_printingsInput = {
    id?: string;
    source: string;
    source_key: string;
    name: string;
    normalized_name: string;
    mana_cost?: string | null;
    type_line?: string | null;
    oracle_text?: string | null;
    colors?: Prisma.canonical_cardsCreatecolorsInput | string[];
    color_identity?: Prisma.canonical_cardsCreatecolor_identityInput | string[];
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
    updated_at?: Date | string;
    games: Prisma.gamesCreateNestedOneWithoutCanonical_cardsInput;
    wishlist_items?: Prisma.wishlist_itemsCreateNestedManyWithoutCanonical_cardsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsCreateNestedManyWithoutCanonical_cardsInput;
};
export type canonical_cardsUncheckedCreateWithoutCard_printingsInput = {
    id?: string;
    game_id: string;
    source: string;
    source_key: string;
    name: string;
    normalized_name: string;
    mana_cost?: string | null;
    type_line?: string | null;
    oracle_text?: string | null;
    colors?: Prisma.canonical_cardsCreatecolorsInput | string[];
    color_identity?: Prisma.canonical_cardsCreatecolor_identityInput | string[];
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
    updated_at?: Date | string;
    wishlist_items?: Prisma.wishlist_itemsUncheckedCreateNestedManyWithoutCanonical_cardsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedCreateNestedManyWithoutCanonical_cardsInput;
};
export type canonical_cardsCreateOrConnectWithoutCard_printingsInput = {
    where: Prisma.canonical_cardsWhereUniqueInput;
    create: Prisma.XOR<Prisma.canonical_cardsCreateWithoutCard_printingsInput, Prisma.canonical_cardsUncheckedCreateWithoutCard_printingsInput>;
};
export type canonical_cardsUpsertWithoutCard_printingsInput = {
    update: Prisma.XOR<Prisma.canonical_cardsUpdateWithoutCard_printingsInput, Prisma.canonical_cardsUncheckedUpdateWithoutCard_printingsInput>;
    create: Prisma.XOR<Prisma.canonical_cardsCreateWithoutCard_printingsInput, Prisma.canonical_cardsUncheckedCreateWithoutCard_printingsInput>;
    where?: Prisma.canonical_cardsWhereInput;
};
export type canonical_cardsUpdateToOneWithWhereWithoutCard_printingsInput = {
    where?: Prisma.canonical_cardsWhereInput;
    data: Prisma.XOR<Prisma.canonical_cardsUpdateWithoutCard_printingsInput, Prisma.canonical_cardsUncheckedUpdateWithoutCard_printingsInput>;
};
export type canonical_cardsUpdateWithoutCard_printingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    source_key?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    normalized_name?: Prisma.StringFieldUpdateOperationsInput | string;
    mana_cost?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type_line?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    oracle_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    colors?: Prisma.canonical_cardsUpdatecolorsInput | string[];
    color_identity?: Prisma.canonical_cardsUpdatecolor_identityInput | string[];
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    games?: Prisma.gamesUpdateOneRequiredWithoutCanonical_cardsNestedInput;
    wishlist_items?: Prisma.wishlist_itemsUpdateManyWithoutCanonical_cardsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUpdateManyWithoutCanonical_cardsNestedInput;
};
export type canonical_cardsUncheckedUpdateWithoutCard_printingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    source_key?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    normalized_name?: Prisma.StringFieldUpdateOperationsInput | string;
    mana_cost?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type_line?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    oracle_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    colors?: Prisma.canonical_cardsUpdatecolorsInput | string[];
    color_identity?: Prisma.canonical_cardsUpdatecolor_identityInput | string[];
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wishlist_items?: Prisma.wishlist_itemsUncheckedUpdateManyWithoutCanonical_cardsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedUpdateManyWithoutCanonical_cardsNestedInput;
};
export type canonical_cardsCreateWithoutGamesInput = {
    id?: string;
    source: string;
    source_key: string;
    name: string;
    normalized_name: string;
    mana_cost?: string | null;
    type_line?: string | null;
    oracle_text?: string | null;
    colors?: Prisma.canonical_cardsCreatecolorsInput | string[];
    color_identity?: Prisma.canonical_cardsCreatecolor_identityInput | string[];
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
    updated_at?: Date | string;
    card_printings?: Prisma.card_printingsCreateNestedManyWithoutCanonical_cardsInput;
    wishlist_items?: Prisma.wishlist_itemsCreateNestedManyWithoutCanonical_cardsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsCreateNestedManyWithoutCanonical_cardsInput;
};
export type canonical_cardsUncheckedCreateWithoutGamesInput = {
    id?: string;
    source: string;
    source_key: string;
    name: string;
    normalized_name: string;
    mana_cost?: string | null;
    type_line?: string | null;
    oracle_text?: string | null;
    colors?: Prisma.canonical_cardsCreatecolorsInput | string[];
    color_identity?: Prisma.canonical_cardsCreatecolor_identityInput | string[];
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
    updated_at?: Date | string;
    card_printings?: Prisma.card_printingsUncheckedCreateNestedManyWithoutCanonical_cardsInput;
    wishlist_items?: Prisma.wishlist_itemsUncheckedCreateNestedManyWithoutCanonical_cardsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedCreateNestedManyWithoutCanonical_cardsInput;
};
export type canonical_cardsCreateOrConnectWithoutGamesInput = {
    where: Prisma.canonical_cardsWhereUniqueInput;
    create: Prisma.XOR<Prisma.canonical_cardsCreateWithoutGamesInput, Prisma.canonical_cardsUncheckedCreateWithoutGamesInput>;
};
export type canonical_cardsCreateManyGamesInputEnvelope = {
    data: Prisma.canonical_cardsCreateManyGamesInput | Prisma.canonical_cardsCreateManyGamesInput[];
    skipDuplicates?: boolean;
};
export type canonical_cardsUpsertWithWhereUniqueWithoutGamesInput = {
    where: Prisma.canonical_cardsWhereUniqueInput;
    update: Prisma.XOR<Prisma.canonical_cardsUpdateWithoutGamesInput, Prisma.canonical_cardsUncheckedUpdateWithoutGamesInput>;
    create: Prisma.XOR<Prisma.canonical_cardsCreateWithoutGamesInput, Prisma.canonical_cardsUncheckedCreateWithoutGamesInput>;
};
export type canonical_cardsUpdateWithWhereUniqueWithoutGamesInput = {
    where: Prisma.canonical_cardsWhereUniqueInput;
    data: Prisma.XOR<Prisma.canonical_cardsUpdateWithoutGamesInput, Prisma.canonical_cardsUncheckedUpdateWithoutGamesInput>;
};
export type canonical_cardsUpdateManyWithWhereWithoutGamesInput = {
    where: Prisma.canonical_cardsScalarWhereInput;
    data: Prisma.XOR<Prisma.canonical_cardsUpdateManyMutationInput, Prisma.canonical_cardsUncheckedUpdateManyWithoutGamesInput>;
};
export type canonical_cardsScalarWhereInput = {
    AND?: Prisma.canonical_cardsScalarWhereInput | Prisma.canonical_cardsScalarWhereInput[];
    OR?: Prisma.canonical_cardsScalarWhereInput[];
    NOT?: Prisma.canonical_cardsScalarWhereInput | Prisma.canonical_cardsScalarWhereInput[];
    id?: Prisma.UuidFilter<"canonical_cards"> | string;
    game_id?: Prisma.UuidFilter<"canonical_cards"> | string;
    source?: Prisma.StringFilter<"canonical_cards"> | string;
    source_key?: Prisma.StringFilter<"canonical_cards"> | string;
    name?: Prisma.StringFilter<"canonical_cards"> | string;
    normalized_name?: Prisma.StringFilter<"canonical_cards"> | string;
    mana_cost?: Prisma.StringNullableFilter<"canonical_cards"> | string | null;
    type_line?: Prisma.StringNullableFilter<"canonical_cards"> | string | null;
    oracle_text?: Prisma.StringNullableFilter<"canonical_cards"> | string | null;
    colors?: Prisma.StringNullableListFilter<"canonical_cards">;
    color_identity?: Prisma.StringNullableListFilter<"canonical_cards">;
    raw_data?: Prisma.JsonNullableFilter<"canonical_cards">;
    created_at?: Prisma.DateTimeFilter<"canonical_cards"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"canonical_cards"> | Date | string;
};
export type canonical_cardsCreateWithoutWishlist_itemsInput = {
    id?: string;
    source: string;
    source_key: string;
    name: string;
    normalized_name: string;
    mana_cost?: string | null;
    type_line?: string | null;
    oracle_text?: string | null;
    colors?: Prisma.canonical_cardsCreatecolorsInput | string[];
    color_identity?: Prisma.canonical_cardsCreatecolor_identityInput | string[];
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
    updated_at?: Date | string;
    games: Prisma.gamesCreateNestedOneWithoutCanonical_cardsInput;
    card_printings?: Prisma.card_printingsCreateNestedManyWithoutCanonical_cardsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsCreateNestedManyWithoutCanonical_cardsInput;
};
export type canonical_cardsUncheckedCreateWithoutWishlist_itemsInput = {
    id?: string;
    game_id: string;
    source: string;
    source_key: string;
    name: string;
    normalized_name: string;
    mana_cost?: string | null;
    type_line?: string | null;
    oracle_text?: string | null;
    colors?: Prisma.canonical_cardsCreatecolorsInput | string[];
    color_identity?: Prisma.canonical_cardsCreatecolor_identityInput | string[];
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
    updated_at?: Date | string;
    card_printings?: Prisma.card_printingsUncheckedCreateNestedManyWithoutCanonical_cardsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedCreateNestedManyWithoutCanonical_cardsInput;
};
export type canonical_cardsCreateOrConnectWithoutWishlist_itemsInput = {
    where: Prisma.canonical_cardsWhereUniqueInput;
    create: Prisma.XOR<Prisma.canonical_cardsCreateWithoutWishlist_itemsInput, Prisma.canonical_cardsUncheckedCreateWithoutWishlist_itemsInput>;
};
export type canonical_cardsUpsertWithoutWishlist_itemsInput = {
    update: Prisma.XOR<Prisma.canonical_cardsUpdateWithoutWishlist_itemsInput, Prisma.canonical_cardsUncheckedUpdateWithoutWishlist_itemsInput>;
    create: Prisma.XOR<Prisma.canonical_cardsCreateWithoutWishlist_itemsInput, Prisma.canonical_cardsUncheckedCreateWithoutWishlist_itemsInput>;
    where?: Prisma.canonical_cardsWhereInput;
};
export type canonical_cardsUpdateToOneWithWhereWithoutWishlist_itemsInput = {
    where?: Prisma.canonical_cardsWhereInput;
    data: Prisma.XOR<Prisma.canonical_cardsUpdateWithoutWishlist_itemsInput, Prisma.canonical_cardsUncheckedUpdateWithoutWishlist_itemsInput>;
};
export type canonical_cardsUpdateWithoutWishlist_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    source_key?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    normalized_name?: Prisma.StringFieldUpdateOperationsInput | string;
    mana_cost?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type_line?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    oracle_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    colors?: Prisma.canonical_cardsUpdatecolorsInput | string[];
    color_identity?: Prisma.canonical_cardsUpdatecolor_identityInput | string[];
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    games?: Prisma.gamesUpdateOneRequiredWithoutCanonical_cardsNestedInput;
    card_printings?: Prisma.card_printingsUpdateManyWithoutCanonical_cardsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUpdateManyWithoutCanonical_cardsNestedInput;
};
export type canonical_cardsUncheckedUpdateWithoutWishlist_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    source_key?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    normalized_name?: Prisma.StringFieldUpdateOperationsInput | string;
    mana_cost?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type_line?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    oracle_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    colors?: Prisma.canonical_cardsUpdatecolorsInput | string[];
    color_identity?: Prisma.canonical_cardsUpdatecolor_identityInput | string[];
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    card_printings?: Prisma.card_printingsUncheckedUpdateManyWithoutCanonical_cardsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedUpdateManyWithoutCanonical_cardsNestedInput;
};
export type canonical_cardsCreateWithoutWishlist_offer_requested_itemsInput = {
    id?: string;
    source: string;
    source_key: string;
    name: string;
    normalized_name: string;
    mana_cost?: string | null;
    type_line?: string | null;
    oracle_text?: string | null;
    colors?: Prisma.canonical_cardsCreatecolorsInput | string[];
    color_identity?: Prisma.canonical_cardsCreatecolor_identityInput | string[];
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
    updated_at?: Date | string;
    games: Prisma.gamesCreateNestedOneWithoutCanonical_cardsInput;
    card_printings?: Prisma.card_printingsCreateNestedManyWithoutCanonical_cardsInput;
    wishlist_items?: Prisma.wishlist_itemsCreateNestedManyWithoutCanonical_cardsInput;
};
export type canonical_cardsUncheckedCreateWithoutWishlist_offer_requested_itemsInput = {
    id?: string;
    game_id: string;
    source: string;
    source_key: string;
    name: string;
    normalized_name: string;
    mana_cost?: string | null;
    type_line?: string | null;
    oracle_text?: string | null;
    colors?: Prisma.canonical_cardsCreatecolorsInput | string[];
    color_identity?: Prisma.canonical_cardsCreatecolor_identityInput | string[];
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
    updated_at?: Date | string;
    card_printings?: Prisma.card_printingsUncheckedCreateNestedManyWithoutCanonical_cardsInput;
    wishlist_items?: Prisma.wishlist_itemsUncheckedCreateNestedManyWithoutCanonical_cardsInput;
};
export type canonical_cardsCreateOrConnectWithoutWishlist_offer_requested_itemsInput = {
    where: Prisma.canonical_cardsWhereUniqueInput;
    create: Prisma.XOR<Prisma.canonical_cardsCreateWithoutWishlist_offer_requested_itemsInput, Prisma.canonical_cardsUncheckedCreateWithoutWishlist_offer_requested_itemsInput>;
};
export type canonical_cardsUpsertWithoutWishlist_offer_requested_itemsInput = {
    update: Prisma.XOR<Prisma.canonical_cardsUpdateWithoutWishlist_offer_requested_itemsInput, Prisma.canonical_cardsUncheckedUpdateWithoutWishlist_offer_requested_itemsInput>;
    create: Prisma.XOR<Prisma.canonical_cardsCreateWithoutWishlist_offer_requested_itemsInput, Prisma.canonical_cardsUncheckedCreateWithoutWishlist_offer_requested_itemsInput>;
    where?: Prisma.canonical_cardsWhereInput;
};
export type canonical_cardsUpdateToOneWithWhereWithoutWishlist_offer_requested_itemsInput = {
    where?: Prisma.canonical_cardsWhereInput;
    data: Prisma.XOR<Prisma.canonical_cardsUpdateWithoutWishlist_offer_requested_itemsInput, Prisma.canonical_cardsUncheckedUpdateWithoutWishlist_offer_requested_itemsInput>;
};
export type canonical_cardsUpdateWithoutWishlist_offer_requested_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    source_key?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    normalized_name?: Prisma.StringFieldUpdateOperationsInput | string;
    mana_cost?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type_line?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    oracle_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    colors?: Prisma.canonical_cardsUpdatecolorsInput | string[];
    color_identity?: Prisma.canonical_cardsUpdatecolor_identityInput | string[];
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    games?: Prisma.gamesUpdateOneRequiredWithoutCanonical_cardsNestedInput;
    card_printings?: Prisma.card_printingsUpdateManyWithoutCanonical_cardsNestedInput;
    wishlist_items?: Prisma.wishlist_itemsUpdateManyWithoutCanonical_cardsNestedInput;
};
export type canonical_cardsUncheckedUpdateWithoutWishlist_offer_requested_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    source_key?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    normalized_name?: Prisma.StringFieldUpdateOperationsInput | string;
    mana_cost?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type_line?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    oracle_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    colors?: Prisma.canonical_cardsUpdatecolorsInput | string[];
    color_identity?: Prisma.canonical_cardsUpdatecolor_identityInput | string[];
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    card_printings?: Prisma.card_printingsUncheckedUpdateManyWithoutCanonical_cardsNestedInput;
    wishlist_items?: Prisma.wishlist_itemsUncheckedUpdateManyWithoutCanonical_cardsNestedInput;
};
export type canonical_cardsCreateManyGamesInput = {
    id?: string;
    source: string;
    source_key: string;
    name: string;
    normalized_name: string;
    mana_cost?: string | null;
    type_line?: string | null;
    oracle_text?: string | null;
    colors?: Prisma.canonical_cardsCreatecolorsInput | string[];
    color_identity?: Prisma.canonical_cardsCreatecolor_identityInput | string[];
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type canonical_cardsUpdateWithoutGamesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    source_key?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    normalized_name?: Prisma.StringFieldUpdateOperationsInput | string;
    mana_cost?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type_line?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    oracle_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    colors?: Prisma.canonical_cardsUpdatecolorsInput | string[];
    color_identity?: Prisma.canonical_cardsUpdatecolor_identityInput | string[];
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    card_printings?: Prisma.card_printingsUpdateManyWithoutCanonical_cardsNestedInput;
    wishlist_items?: Prisma.wishlist_itemsUpdateManyWithoutCanonical_cardsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUpdateManyWithoutCanonical_cardsNestedInput;
};
export type canonical_cardsUncheckedUpdateWithoutGamesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    source_key?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    normalized_name?: Prisma.StringFieldUpdateOperationsInput | string;
    mana_cost?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type_line?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    oracle_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    colors?: Prisma.canonical_cardsUpdatecolorsInput | string[];
    color_identity?: Prisma.canonical_cardsUpdatecolor_identityInput | string[];
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    card_printings?: Prisma.card_printingsUncheckedUpdateManyWithoutCanonical_cardsNestedInput;
    wishlist_items?: Prisma.wishlist_itemsUncheckedUpdateManyWithoutCanonical_cardsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedUpdateManyWithoutCanonical_cardsNestedInput;
};
export type canonical_cardsUncheckedUpdateManyWithoutGamesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    source_key?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    normalized_name?: Prisma.StringFieldUpdateOperationsInput | string;
    mana_cost?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type_line?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    oracle_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    colors?: Prisma.canonical_cardsUpdatecolorsInput | string[];
    color_identity?: Prisma.canonical_cardsUpdatecolor_identityInput | string[];
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type Canonical_cardsCountOutputType
 */
export type Canonical_cardsCountOutputType = {
    card_printings: number;
    wishlist_items: number;
    wishlist_offer_requested_items: number;
};
export type Canonical_cardsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    card_printings?: boolean | Canonical_cardsCountOutputTypeCountCard_printingsArgs;
    wishlist_items?: boolean | Canonical_cardsCountOutputTypeCountWishlist_itemsArgs;
    wishlist_offer_requested_items?: boolean | Canonical_cardsCountOutputTypeCountWishlist_offer_requested_itemsArgs;
};
/**
 * Canonical_cardsCountOutputType without action
 */
export type Canonical_cardsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Canonical_cardsCountOutputType
     */
    select?: Prisma.Canonical_cardsCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * Canonical_cardsCountOutputType without action
 */
export type Canonical_cardsCountOutputTypeCountCard_printingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.card_printingsWhereInput;
};
/**
 * Canonical_cardsCountOutputType without action
 */
export type Canonical_cardsCountOutputTypeCountWishlist_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.wishlist_itemsWhereInput;
};
/**
 * Canonical_cardsCountOutputType without action
 */
export type Canonical_cardsCountOutputTypeCountWishlist_offer_requested_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.wishlist_offer_requested_itemsWhereInput;
};
export type canonical_cardsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    game_id?: boolean;
    source?: boolean;
    source_key?: boolean;
    name?: boolean;
    normalized_name?: boolean;
    mana_cost?: boolean;
    type_line?: boolean;
    oracle_text?: boolean;
    colors?: boolean;
    color_identity?: boolean;
    raw_data?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    games?: boolean | Prisma.gamesDefaultArgs<ExtArgs>;
    card_printings?: boolean | Prisma.canonical_cards$card_printingsArgs<ExtArgs>;
    wishlist_items?: boolean | Prisma.canonical_cards$wishlist_itemsArgs<ExtArgs>;
    wishlist_offer_requested_items?: boolean | Prisma.canonical_cards$wishlist_offer_requested_itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.Canonical_cardsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["canonical_cards"]>;
export type canonical_cardsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    game_id?: boolean;
    source?: boolean;
    source_key?: boolean;
    name?: boolean;
    normalized_name?: boolean;
    mana_cost?: boolean;
    type_line?: boolean;
    oracle_text?: boolean;
    colors?: boolean;
    color_identity?: boolean;
    raw_data?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    games?: boolean | Prisma.gamesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["canonical_cards"]>;
export type canonical_cardsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    game_id?: boolean;
    source?: boolean;
    source_key?: boolean;
    name?: boolean;
    normalized_name?: boolean;
    mana_cost?: boolean;
    type_line?: boolean;
    oracle_text?: boolean;
    colors?: boolean;
    color_identity?: boolean;
    raw_data?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    games?: boolean | Prisma.gamesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["canonical_cards"]>;
export type canonical_cardsSelectScalar = {
    id?: boolean;
    game_id?: boolean;
    source?: boolean;
    source_key?: boolean;
    name?: boolean;
    normalized_name?: boolean;
    mana_cost?: boolean;
    type_line?: boolean;
    oracle_text?: boolean;
    colors?: boolean;
    color_identity?: boolean;
    raw_data?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type canonical_cardsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "game_id" | "source" | "source_key" | "name" | "normalized_name" | "mana_cost" | "type_line" | "oracle_text" | "colors" | "color_identity" | "raw_data" | "created_at" | "updated_at", ExtArgs["result"]["canonical_cards"]>;
export type canonical_cardsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    games?: boolean | Prisma.gamesDefaultArgs<ExtArgs>;
    card_printings?: boolean | Prisma.canonical_cards$card_printingsArgs<ExtArgs>;
    wishlist_items?: boolean | Prisma.canonical_cards$wishlist_itemsArgs<ExtArgs>;
    wishlist_offer_requested_items?: boolean | Prisma.canonical_cards$wishlist_offer_requested_itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.Canonical_cardsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type canonical_cardsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    games?: boolean | Prisma.gamesDefaultArgs<ExtArgs>;
};
export type canonical_cardsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    games?: boolean | Prisma.gamesDefaultArgs<ExtArgs>;
};
export type $canonical_cardsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "canonical_cards";
    objects: {
        games: Prisma.$gamesPayload<ExtArgs>;
        card_printings: Prisma.$card_printingsPayload<ExtArgs>[];
        wishlist_items: Prisma.$wishlist_itemsPayload<ExtArgs>[];
        wishlist_offer_requested_items: Prisma.$wishlist_offer_requested_itemsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        game_id: string;
        source: string;
        source_key: string;
        name: string;
        normalized_name: string;
        mana_cost: string | null;
        type_line: string | null;
        oracle_text: string | null;
        colors: string[];
        color_identity: string[];
        raw_data: runtime.JsonValue | null;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["canonical_cards"]>;
    composites: {};
};
export type canonical_cardsGetPayload<S extends boolean | null | undefined | canonical_cardsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$canonical_cardsPayload, S>;
export type canonical_cardsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<canonical_cardsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Canonical_cardsCountAggregateInputType | true;
};
export interface canonical_cardsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['canonical_cards'];
        meta: {
            name: 'canonical_cards';
        };
    };
    /**
     * Find zero or one Canonical_cards that matches the filter.
     * @param {canonical_cardsFindUniqueArgs} args - Arguments to find a Canonical_cards
     * @example
     * // Get one Canonical_cards
     * const canonical_cards = await prisma.canonical_cards.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends canonical_cardsFindUniqueArgs>(args: Prisma.SelectSubset<T, canonical_cardsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__canonical_cardsClient<runtime.Types.Result.GetResult<Prisma.$canonical_cardsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Canonical_cards that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {canonical_cardsFindUniqueOrThrowArgs} args - Arguments to find a Canonical_cards
     * @example
     * // Get one Canonical_cards
     * const canonical_cards = await prisma.canonical_cards.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends canonical_cardsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, canonical_cardsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__canonical_cardsClient<runtime.Types.Result.GetResult<Prisma.$canonical_cardsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Canonical_cards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {canonical_cardsFindFirstArgs} args - Arguments to find a Canonical_cards
     * @example
     * // Get one Canonical_cards
     * const canonical_cards = await prisma.canonical_cards.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends canonical_cardsFindFirstArgs>(args?: Prisma.SelectSubset<T, canonical_cardsFindFirstArgs<ExtArgs>>): Prisma.Prisma__canonical_cardsClient<runtime.Types.Result.GetResult<Prisma.$canonical_cardsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Canonical_cards that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {canonical_cardsFindFirstOrThrowArgs} args - Arguments to find a Canonical_cards
     * @example
     * // Get one Canonical_cards
     * const canonical_cards = await prisma.canonical_cards.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends canonical_cardsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, canonical_cardsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__canonical_cardsClient<runtime.Types.Result.GetResult<Prisma.$canonical_cardsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Canonical_cards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {canonical_cardsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Canonical_cards
     * const canonical_cards = await prisma.canonical_cards.findMany()
     *
     * // Get first 10 Canonical_cards
     * const canonical_cards = await prisma.canonical_cards.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const canonical_cardsWithIdOnly = await prisma.canonical_cards.findMany({ select: { id: true } })
     *
     */
    findMany<T extends canonical_cardsFindManyArgs>(args?: Prisma.SelectSubset<T, canonical_cardsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$canonical_cardsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Canonical_cards.
     * @param {canonical_cardsCreateArgs} args - Arguments to create a Canonical_cards.
     * @example
     * // Create one Canonical_cards
     * const Canonical_cards = await prisma.canonical_cards.create({
     *   data: {
     *     // ... data to create a Canonical_cards
     *   }
     * })
     *
     */
    create<T extends canonical_cardsCreateArgs>(args: Prisma.SelectSubset<T, canonical_cardsCreateArgs<ExtArgs>>): Prisma.Prisma__canonical_cardsClient<runtime.Types.Result.GetResult<Prisma.$canonical_cardsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Canonical_cards.
     * @param {canonical_cardsCreateManyArgs} args - Arguments to create many Canonical_cards.
     * @example
     * // Create many Canonical_cards
     * const canonical_cards = await prisma.canonical_cards.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends canonical_cardsCreateManyArgs>(args?: Prisma.SelectSubset<T, canonical_cardsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Canonical_cards and returns the data saved in the database.
     * @param {canonical_cardsCreateManyAndReturnArgs} args - Arguments to create many Canonical_cards.
     * @example
     * // Create many Canonical_cards
     * const canonical_cards = await prisma.canonical_cards.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Canonical_cards and only return the `id`
     * const canonical_cardsWithIdOnly = await prisma.canonical_cards.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends canonical_cardsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, canonical_cardsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$canonical_cardsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Canonical_cards.
     * @param {canonical_cardsDeleteArgs} args - Arguments to delete one Canonical_cards.
     * @example
     * // Delete one Canonical_cards
     * const Canonical_cards = await prisma.canonical_cards.delete({
     *   where: {
     *     // ... filter to delete one Canonical_cards
     *   }
     * })
     *
     */
    delete<T extends canonical_cardsDeleteArgs>(args: Prisma.SelectSubset<T, canonical_cardsDeleteArgs<ExtArgs>>): Prisma.Prisma__canonical_cardsClient<runtime.Types.Result.GetResult<Prisma.$canonical_cardsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Canonical_cards.
     * @param {canonical_cardsUpdateArgs} args - Arguments to update one Canonical_cards.
     * @example
     * // Update one Canonical_cards
     * const canonical_cards = await prisma.canonical_cards.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends canonical_cardsUpdateArgs>(args: Prisma.SelectSubset<T, canonical_cardsUpdateArgs<ExtArgs>>): Prisma.Prisma__canonical_cardsClient<runtime.Types.Result.GetResult<Prisma.$canonical_cardsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Canonical_cards.
     * @param {canonical_cardsDeleteManyArgs} args - Arguments to filter Canonical_cards to delete.
     * @example
     * // Delete a few Canonical_cards
     * const { count } = await prisma.canonical_cards.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends canonical_cardsDeleteManyArgs>(args?: Prisma.SelectSubset<T, canonical_cardsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Canonical_cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {canonical_cardsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Canonical_cards
     * const canonical_cards = await prisma.canonical_cards.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends canonical_cardsUpdateManyArgs>(args: Prisma.SelectSubset<T, canonical_cardsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Canonical_cards and returns the data updated in the database.
     * @param {canonical_cardsUpdateManyAndReturnArgs} args - Arguments to update many Canonical_cards.
     * @example
     * // Update many Canonical_cards
     * const canonical_cards = await prisma.canonical_cards.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Canonical_cards and only return the `id`
     * const canonical_cardsWithIdOnly = await prisma.canonical_cards.updateManyAndReturn({
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
    updateManyAndReturn<T extends canonical_cardsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, canonical_cardsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$canonical_cardsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Canonical_cards.
     * @param {canonical_cardsUpsertArgs} args - Arguments to update or create a Canonical_cards.
     * @example
     * // Update or create a Canonical_cards
     * const canonical_cards = await prisma.canonical_cards.upsert({
     *   create: {
     *     // ... data to create a Canonical_cards
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Canonical_cards we want to update
     *   }
     * })
     */
    upsert<T extends canonical_cardsUpsertArgs>(args: Prisma.SelectSubset<T, canonical_cardsUpsertArgs<ExtArgs>>): Prisma.Prisma__canonical_cardsClient<runtime.Types.Result.GetResult<Prisma.$canonical_cardsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Canonical_cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {canonical_cardsCountArgs} args - Arguments to filter Canonical_cards to count.
     * @example
     * // Count the number of Canonical_cards
     * const count = await prisma.canonical_cards.count({
     *   where: {
     *     // ... the filter for the Canonical_cards we want to count
     *   }
     * })
    **/
    count<T extends canonical_cardsCountArgs>(args?: Prisma.Subset<T, canonical_cardsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Canonical_cardsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Canonical_cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Canonical_cardsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Canonical_cardsAggregateArgs>(args: Prisma.Subset<T, Canonical_cardsAggregateArgs>): Prisma.PrismaPromise<GetCanonical_cardsAggregateType<T>>;
    /**
     * Group by Canonical_cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {canonical_cardsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends canonical_cardsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: canonical_cardsGroupByArgs['orderBy'];
    } : {
        orderBy?: canonical_cardsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, canonical_cardsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCanonical_cardsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the canonical_cards model
     */
    readonly fields: canonical_cardsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for canonical_cards.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__canonical_cardsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    games<T extends Prisma.gamesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.gamesDefaultArgs<ExtArgs>>): Prisma.Prisma__gamesClient<runtime.Types.Result.GetResult<Prisma.$gamesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    card_printings<T extends Prisma.canonical_cards$card_printingsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.canonical_cards$card_printingsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$card_printingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    wishlist_items<T extends Prisma.canonical_cards$wishlist_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.canonical_cards$wishlist_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$wishlist_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    wishlist_offer_requested_items<T extends Prisma.canonical_cards$wishlist_offer_requested_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.canonical_cards$wishlist_offer_requested_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$wishlist_offer_requested_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the canonical_cards model
 */
export interface canonical_cardsFieldRefs {
    readonly id: Prisma.FieldRef<"canonical_cards", 'String'>;
    readonly game_id: Prisma.FieldRef<"canonical_cards", 'String'>;
    readonly source: Prisma.FieldRef<"canonical_cards", 'String'>;
    readonly source_key: Prisma.FieldRef<"canonical_cards", 'String'>;
    readonly name: Prisma.FieldRef<"canonical_cards", 'String'>;
    readonly normalized_name: Prisma.FieldRef<"canonical_cards", 'String'>;
    readonly mana_cost: Prisma.FieldRef<"canonical_cards", 'String'>;
    readonly type_line: Prisma.FieldRef<"canonical_cards", 'String'>;
    readonly oracle_text: Prisma.FieldRef<"canonical_cards", 'String'>;
    readonly colors: Prisma.FieldRef<"canonical_cards", 'String[]'>;
    readonly color_identity: Prisma.FieldRef<"canonical_cards", 'String[]'>;
    readonly raw_data: Prisma.FieldRef<"canonical_cards", 'Json'>;
    readonly created_at: Prisma.FieldRef<"canonical_cards", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"canonical_cards", 'DateTime'>;
}
/**
 * canonical_cards findUnique
 */
export type canonical_cardsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which canonical_cards to fetch.
     */
    where: Prisma.canonical_cardsWhereUniqueInput;
};
/**
 * canonical_cards findUniqueOrThrow
 */
export type canonical_cardsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which canonical_cards to fetch.
     */
    where: Prisma.canonical_cardsWhereUniqueInput;
};
/**
 * canonical_cards findFirst
 */
export type canonical_cardsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which canonical_cards to fetch.
     */
    where?: Prisma.canonical_cardsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of canonical_cards to fetch.
     */
    orderBy?: Prisma.canonical_cardsOrderByWithRelationInput | Prisma.canonical_cardsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for canonical_cards.
     */
    cursor?: Prisma.canonical_cardsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` canonical_cards from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` canonical_cards.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of canonical_cards.
     */
    distinct?: Prisma.Canonical_cardsScalarFieldEnum | Prisma.Canonical_cardsScalarFieldEnum[];
};
/**
 * canonical_cards findFirstOrThrow
 */
export type canonical_cardsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which canonical_cards to fetch.
     */
    where?: Prisma.canonical_cardsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of canonical_cards to fetch.
     */
    orderBy?: Prisma.canonical_cardsOrderByWithRelationInput | Prisma.canonical_cardsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for canonical_cards.
     */
    cursor?: Prisma.canonical_cardsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` canonical_cards from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` canonical_cards.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of canonical_cards.
     */
    distinct?: Prisma.Canonical_cardsScalarFieldEnum | Prisma.Canonical_cardsScalarFieldEnum[];
};
/**
 * canonical_cards findMany
 */
export type canonical_cardsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which canonical_cards to fetch.
     */
    where?: Prisma.canonical_cardsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of canonical_cards to fetch.
     */
    orderBy?: Prisma.canonical_cardsOrderByWithRelationInput | Prisma.canonical_cardsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing canonical_cards.
     */
    cursor?: Prisma.canonical_cardsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` canonical_cards from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` canonical_cards.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of canonical_cards.
     */
    distinct?: Prisma.Canonical_cardsScalarFieldEnum | Prisma.Canonical_cardsScalarFieldEnum[];
};
/**
 * canonical_cards create
 */
export type canonical_cardsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a canonical_cards.
     */
    data: Prisma.XOR<Prisma.canonical_cardsCreateInput, Prisma.canonical_cardsUncheckedCreateInput>;
};
/**
 * canonical_cards createMany
 */
export type canonical_cardsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many canonical_cards.
     */
    data: Prisma.canonical_cardsCreateManyInput | Prisma.canonical_cardsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * canonical_cards createManyAndReturn
 */
export type canonical_cardsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the canonical_cards
     */
    select?: Prisma.canonical_cardsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the canonical_cards
     */
    omit?: Prisma.canonical_cardsOmit<ExtArgs> | null;
    /**
     * The data used to create many canonical_cards.
     */
    data: Prisma.canonical_cardsCreateManyInput | Prisma.canonical_cardsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.canonical_cardsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * canonical_cards update
 */
export type canonical_cardsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a canonical_cards.
     */
    data: Prisma.XOR<Prisma.canonical_cardsUpdateInput, Prisma.canonical_cardsUncheckedUpdateInput>;
    /**
     * Choose, which canonical_cards to update.
     */
    where: Prisma.canonical_cardsWhereUniqueInput;
};
/**
 * canonical_cards updateMany
 */
export type canonical_cardsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update canonical_cards.
     */
    data: Prisma.XOR<Prisma.canonical_cardsUpdateManyMutationInput, Prisma.canonical_cardsUncheckedUpdateManyInput>;
    /**
     * Filter which canonical_cards to update
     */
    where?: Prisma.canonical_cardsWhereInput;
    /**
     * Limit how many canonical_cards to update.
     */
    limit?: number;
};
/**
 * canonical_cards updateManyAndReturn
 */
export type canonical_cardsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the canonical_cards
     */
    select?: Prisma.canonical_cardsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the canonical_cards
     */
    omit?: Prisma.canonical_cardsOmit<ExtArgs> | null;
    /**
     * The data used to update canonical_cards.
     */
    data: Prisma.XOR<Prisma.canonical_cardsUpdateManyMutationInput, Prisma.canonical_cardsUncheckedUpdateManyInput>;
    /**
     * Filter which canonical_cards to update
     */
    where?: Prisma.canonical_cardsWhereInput;
    /**
     * Limit how many canonical_cards to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.canonical_cardsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * canonical_cards upsert
 */
export type canonical_cardsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the canonical_cards to update in case it exists.
     */
    where: Prisma.canonical_cardsWhereUniqueInput;
    /**
     * In case the canonical_cards found by the `where` argument doesn't exist, create a new canonical_cards with this data.
     */
    create: Prisma.XOR<Prisma.canonical_cardsCreateInput, Prisma.canonical_cardsUncheckedCreateInput>;
    /**
     * In case the canonical_cards was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.canonical_cardsUpdateInput, Prisma.canonical_cardsUncheckedUpdateInput>;
};
/**
 * canonical_cards delete
 */
export type canonical_cardsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which canonical_cards to delete.
     */
    where: Prisma.canonical_cardsWhereUniqueInput;
};
/**
 * canonical_cards deleteMany
 */
export type canonical_cardsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which canonical_cards to delete
     */
    where?: Prisma.canonical_cardsWhereInput;
    /**
     * Limit how many canonical_cards to delete.
     */
    limit?: number;
};
/**
 * canonical_cards.card_printings
 */
export type canonical_cards$card_printingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * canonical_cards.wishlist_items
 */
export type canonical_cards$wishlist_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * canonical_cards.wishlist_offer_requested_items
 */
export type canonical_cards$wishlist_offer_requested_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * canonical_cards without action
 */
export type canonical_cardsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
