import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model card_printings
 *
 */
export type card_printingsModel = runtime.Types.Result.DefaultSelection<Prisma.$card_printingsPayload>;
export type AggregateCard_printings = {
    _count: Card_printingsCountAggregateOutputType | null;
    _min: Card_printingsMinAggregateOutputType | null;
    _max: Card_printingsMaxAggregateOutputType | null;
};
export type Card_printingsMinAggregateOutputType = {
    id: string | null;
    game_id: string | null;
    canonical_card_id: string | null;
    card_set_id: string | null;
    source: string | null;
    source_key: string | null;
    collector_number: string | null;
    language_code: string | null;
    printed_name: string | null;
    printed_type_line: string | null;
    printed_text: string | null;
    rarity: string | null;
    artist_name: string | null;
    treatment: string | null;
    frame_version: string | null;
    border_color: string | null;
    is_promo: boolean | null;
    is_reprint: boolean | null;
    is_digital: boolean | null;
    released_at: Date | null;
    image_small_uri: string | null;
    image_normal_uri: string | null;
    image_large_uri: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Card_printingsMaxAggregateOutputType = {
    id: string | null;
    game_id: string | null;
    canonical_card_id: string | null;
    card_set_id: string | null;
    source: string | null;
    source_key: string | null;
    collector_number: string | null;
    language_code: string | null;
    printed_name: string | null;
    printed_type_line: string | null;
    printed_text: string | null;
    rarity: string | null;
    artist_name: string | null;
    treatment: string | null;
    frame_version: string | null;
    border_color: string | null;
    is_promo: boolean | null;
    is_reprint: boolean | null;
    is_digital: boolean | null;
    released_at: Date | null;
    image_small_uri: string | null;
    image_normal_uri: string | null;
    image_large_uri: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Card_printingsCountAggregateOutputType = {
    id: number;
    game_id: number;
    canonical_card_id: number;
    card_set_id: number;
    source: number;
    source_key: number;
    collector_number: number;
    language_code: number;
    printed_name: number;
    printed_type_line: number;
    printed_text: number;
    rarity: number;
    artist_name: number;
    treatment: number;
    frame_version: number;
    border_color: number;
    is_promo: number;
    is_reprint: number;
    is_digital: number;
    released_at: number;
    image_small_uri: number;
    image_normal_uri: number;
    image_large_uri: number;
    raw_data: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Card_printingsMinAggregateInputType = {
    id?: true;
    game_id?: true;
    canonical_card_id?: true;
    card_set_id?: true;
    source?: true;
    source_key?: true;
    collector_number?: true;
    language_code?: true;
    printed_name?: true;
    printed_type_line?: true;
    printed_text?: true;
    rarity?: true;
    artist_name?: true;
    treatment?: true;
    frame_version?: true;
    border_color?: true;
    is_promo?: true;
    is_reprint?: true;
    is_digital?: true;
    released_at?: true;
    image_small_uri?: true;
    image_normal_uri?: true;
    image_large_uri?: true;
    created_at?: true;
    updated_at?: true;
};
export type Card_printingsMaxAggregateInputType = {
    id?: true;
    game_id?: true;
    canonical_card_id?: true;
    card_set_id?: true;
    source?: true;
    source_key?: true;
    collector_number?: true;
    language_code?: true;
    printed_name?: true;
    printed_type_line?: true;
    printed_text?: true;
    rarity?: true;
    artist_name?: true;
    treatment?: true;
    frame_version?: true;
    border_color?: true;
    is_promo?: true;
    is_reprint?: true;
    is_digital?: true;
    released_at?: true;
    image_small_uri?: true;
    image_normal_uri?: true;
    image_large_uri?: true;
    created_at?: true;
    updated_at?: true;
};
export type Card_printingsCountAggregateInputType = {
    id?: true;
    game_id?: true;
    canonical_card_id?: true;
    card_set_id?: true;
    source?: true;
    source_key?: true;
    collector_number?: true;
    language_code?: true;
    printed_name?: true;
    printed_type_line?: true;
    printed_text?: true;
    rarity?: true;
    artist_name?: true;
    treatment?: true;
    frame_version?: true;
    border_color?: true;
    is_promo?: true;
    is_reprint?: true;
    is_digital?: true;
    released_at?: true;
    image_small_uri?: true;
    image_normal_uri?: true;
    image_large_uri?: true;
    raw_data?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Card_printingsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which card_printings to aggregate.
     */
    where?: Prisma.card_printingsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of card_printings to fetch.
     */
    orderBy?: Prisma.card_printingsOrderByWithRelationInput | Prisma.card_printingsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.card_printingsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` card_printings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` card_printings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned card_printings
    **/
    _count?: true | Card_printingsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Card_printingsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Card_printingsMaxAggregateInputType;
};
export type GetCard_printingsAggregateType<T extends Card_printingsAggregateArgs> = {
    [P in keyof T & keyof AggregateCard_printings]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCard_printings[P]> : Prisma.GetScalarType<T[P], AggregateCard_printings[P]>;
};
export type card_printingsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.card_printingsWhereInput;
    orderBy?: Prisma.card_printingsOrderByWithAggregationInput | Prisma.card_printingsOrderByWithAggregationInput[];
    by: Prisma.Card_printingsScalarFieldEnum[] | Prisma.Card_printingsScalarFieldEnum;
    having?: Prisma.card_printingsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Card_printingsCountAggregateInputType | true;
    _min?: Card_printingsMinAggregateInputType;
    _max?: Card_printingsMaxAggregateInputType;
};
export type Card_printingsGroupByOutputType = {
    id: string;
    game_id: string;
    canonical_card_id: string;
    card_set_id: string;
    source: string;
    source_key: string;
    collector_number: string;
    language_code: string;
    printed_name: string | null;
    printed_type_line: string | null;
    printed_text: string | null;
    rarity: string | null;
    artist_name: string | null;
    treatment: string | null;
    frame_version: string | null;
    border_color: string | null;
    is_promo: boolean;
    is_reprint: boolean;
    is_digital: boolean;
    released_at: Date | null;
    image_small_uri: string | null;
    image_normal_uri: string | null;
    image_large_uri: string | null;
    raw_data: runtime.JsonValue | null;
    created_at: Date;
    updated_at: Date;
    _count: Card_printingsCountAggregateOutputType | null;
    _min: Card_printingsMinAggregateOutputType | null;
    _max: Card_printingsMaxAggregateOutputType | null;
};
export type GetCard_printingsGroupByPayload<T extends card_printingsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Card_printingsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Card_printingsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Card_printingsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Card_printingsGroupByOutputType[P]>;
}>>;
export type card_printingsWhereInput = {
    AND?: Prisma.card_printingsWhereInput | Prisma.card_printingsWhereInput[];
    OR?: Prisma.card_printingsWhereInput[];
    NOT?: Prisma.card_printingsWhereInput | Prisma.card_printingsWhereInput[];
    id?: Prisma.UuidFilter<"card_printings"> | string;
    game_id?: Prisma.UuidFilter<"card_printings"> | string;
    canonical_card_id?: Prisma.UuidFilter<"card_printings"> | string;
    card_set_id?: Prisma.UuidFilter<"card_printings"> | string;
    source?: Prisma.StringFilter<"card_printings"> | string;
    source_key?: Prisma.StringFilter<"card_printings"> | string;
    collector_number?: Prisma.StringFilter<"card_printings"> | string;
    language_code?: Prisma.StringFilter<"card_printings"> | string;
    printed_name?: Prisma.StringNullableFilter<"card_printings"> | string | null;
    printed_type_line?: Prisma.StringNullableFilter<"card_printings"> | string | null;
    printed_text?: Prisma.StringNullableFilter<"card_printings"> | string | null;
    rarity?: Prisma.StringNullableFilter<"card_printings"> | string | null;
    artist_name?: Prisma.StringNullableFilter<"card_printings"> | string | null;
    treatment?: Prisma.StringNullableFilter<"card_printings"> | string | null;
    frame_version?: Prisma.StringNullableFilter<"card_printings"> | string | null;
    border_color?: Prisma.StringNullableFilter<"card_printings"> | string | null;
    is_promo?: Prisma.BoolFilter<"card_printings"> | boolean;
    is_reprint?: Prisma.BoolFilter<"card_printings"> | boolean;
    is_digital?: Prisma.BoolFilter<"card_printings"> | boolean;
    released_at?: Prisma.DateTimeNullableFilter<"card_printings"> | Date | string | null;
    image_small_uri?: Prisma.StringNullableFilter<"card_printings"> | string | null;
    image_normal_uri?: Prisma.StringNullableFilter<"card_printings"> | string | null;
    image_large_uri?: Prisma.StringNullableFilter<"card_printings"> | string | null;
    raw_data?: Prisma.JsonNullableFilter<"card_printings">;
    created_at?: Prisma.DateTimeFilter<"card_printings"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"card_printings"> | Date | string;
    canonical_cards?: Prisma.XOR<Prisma.Canonical_cardsScalarRelationFilter, Prisma.canonical_cardsWhereInput>;
    games?: Prisma.XOR<Prisma.GamesScalarRelationFilter, Prisma.gamesWhereInput>;
    card_sets?: Prisma.XOR<Prisma.Card_setsScalarRelationFilter, Prisma.card_setsWhereInput>;
    inventory_items?: Prisma.Inventory_itemsListRelationFilter;
    printing_finishes?: Prisma.Printing_finishesListRelationFilter;
    wishlist_items?: Prisma.Wishlist_itemsListRelationFilter;
    wishlist_offer_requested_items?: Prisma.Wishlist_offer_requested_itemsListRelationFilter;
};
export type card_printingsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    canonical_card_id?: Prisma.SortOrder;
    card_set_id?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    source_key?: Prisma.SortOrder;
    collector_number?: Prisma.SortOrder;
    language_code?: Prisma.SortOrder;
    printed_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    printed_type_line?: Prisma.SortOrderInput | Prisma.SortOrder;
    printed_text?: Prisma.SortOrderInput | Prisma.SortOrder;
    rarity?: Prisma.SortOrderInput | Prisma.SortOrder;
    artist_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    treatment?: Prisma.SortOrderInput | Prisma.SortOrder;
    frame_version?: Prisma.SortOrderInput | Prisma.SortOrder;
    border_color?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_promo?: Prisma.SortOrder;
    is_reprint?: Prisma.SortOrder;
    is_digital?: Prisma.SortOrder;
    released_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    image_small_uri?: Prisma.SortOrderInput | Prisma.SortOrder;
    image_normal_uri?: Prisma.SortOrderInput | Prisma.SortOrder;
    image_large_uri?: Prisma.SortOrderInput | Prisma.SortOrder;
    raw_data?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    canonical_cards?: Prisma.canonical_cardsOrderByWithRelationInput;
    games?: Prisma.gamesOrderByWithRelationInput;
    card_sets?: Prisma.card_setsOrderByWithRelationInput;
    inventory_items?: Prisma.inventory_itemsOrderByRelationAggregateInput;
    printing_finishes?: Prisma.printing_finishesOrderByRelationAggregateInput;
    wishlist_items?: Prisma.wishlist_itemsOrderByRelationAggregateInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsOrderByRelationAggregateInput;
};
export type card_printingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    game_id_source_source_key?: Prisma.card_printingsGame_idSourceSource_keyCompoundUniqueInput;
    id_game_id?: Prisma.card_printingsIdGame_idCompoundUniqueInput;
    AND?: Prisma.card_printingsWhereInput | Prisma.card_printingsWhereInput[];
    OR?: Prisma.card_printingsWhereInput[];
    NOT?: Prisma.card_printingsWhereInput | Prisma.card_printingsWhereInput[];
    game_id?: Prisma.UuidFilter<"card_printings"> | string;
    canonical_card_id?: Prisma.UuidFilter<"card_printings"> | string;
    card_set_id?: Prisma.UuidFilter<"card_printings"> | string;
    source?: Prisma.StringFilter<"card_printings"> | string;
    source_key?: Prisma.StringFilter<"card_printings"> | string;
    collector_number?: Prisma.StringFilter<"card_printings"> | string;
    language_code?: Prisma.StringFilter<"card_printings"> | string;
    printed_name?: Prisma.StringNullableFilter<"card_printings"> | string | null;
    printed_type_line?: Prisma.StringNullableFilter<"card_printings"> | string | null;
    printed_text?: Prisma.StringNullableFilter<"card_printings"> | string | null;
    rarity?: Prisma.StringNullableFilter<"card_printings"> | string | null;
    artist_name?: Prisma.StringNullableFilter<"card_printings"> | string | null;
    treatment?: Prisma.StringNullableFilter<"card_printings"> | string | null;
    frame_version?: Prisma.StringNullableFilter<"card_printings"> | string | null;
    border_color?: Prisma.StringNullableFilter<"card_printings"> | string | null;
    is_promo?: Prisma.BoolFilter<"card_printings"> | boolean;
    is_reprint?: Prisma.BoolFilter<"card_printings"> | boolean;
    is_digital?: Prisma.BoolFilter<"card_printings"> | boolean;
    released_at?: Prisma.DateTimeNullableFilter<"card_printings"> | Date | string | null;
    image_small_uri?: Prisma.StringNullableFilter<"card_printings"> | string | null;
    image_normal_uri?: Prisma.StringNullableFilter<"card_printings"> | string | null;
    image_large_uri?: Prisma.StringNullableFilter<"card_printings"> | string | null;
    raw_data?: Prisma.JsonNullableFilter<"card_printings">;
    created_at?: Prisma.DateTimeFilter<"card_printings"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"card_printings"> | Date | string;
    canonical_cards?: Prisma.XOR<Prisma.Canonical_cardsScalarRelationFilter, Prisma.canonical_cardsWhereInput>;
    games?: Prisma.XOR<Prisma.GamesScalarRelationFilter, Prisma.gamesWhereInput>;
    card_sets?: Prisma.XOR<Prisma.Card_setsScalarRelationFilter, Prisma.card_setsWhereInput>;
    inventory_items?: Prisma.Inventory_itemsListRelationFilter;
    printing_finishes?: Prisma.Printing_finishesListRelationFilter;
    wishlist_items?: Prisma.Wishlist_itemsListRelationFilter;
    wishlist_offer_requested_items?: Prisma.Wishlist_offer_requested_itemsListRelationFilter;
}, "id" | "game_id_source_source_key" | "id_game_id">;
export type card_printingsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    canonical_card_id?: Prisma.SortOrder;
    card_set_id?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    source_key?: Prisma.SortOrder;
    collector_number?: Prisma.SortOrder;
    language_code?: Prisma.SortOrder;
    printed_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    printed_type_line?: Prisma.SortOrderInput | Prisma.SortOrder;
    printed_text?: Prisma.SortOrderInput | Prisma.SortOrder;
    rarity?: Prisma.SortOrderInput | Prisma.SortOrder;
    artist_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    treatment?: Prisma.SortOrderInput | Prisma.SortOrder;
    frame_version?: Prisma.SortOrderInput | Prisma.SortOrder;
    border_color?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_promo?: Prisma.SortOrder;
    is_reprint?: Prisma.SortOrder;
    is_digital?: Prisma.SortOrder;
    released_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    image_small_uri?: Prisma.SortOrderInput | Prisma.SortOrder;
    image_normal_uri?: Prisma.SortOrderInput | Prisma.SortOrder;
    image_large_uri?: Prisma.SortOrderInput | Prisma.SortOrder;
    raw_data?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.card_printingsCountOrderByAggregateInput;
    _max?: Prisma.card_printingsMaxOrderByAggregateInput;
    _min?: Prisma.card_printingsMinOrderByAggregateInput;
};
export type card_printingsScalarWhereWithAggregatesInput = {
    AND?: Prisma.card_printingsScalarWhereWithAggregatesInput | Prisma.card_printingsScalarWhereWithAggregatesInput[];
    OR?: Prisma.card_printingsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.card_printingsScalarWhereWithAggregatesInput | Prisma.card_printingsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"card_printings"> | string;
    game_id?: Prisma.UuidWithAggregatesFilter<"card_printings"> | string;
    canonical_card_id?: Prisma.UuidWithAggregatesFilter<"card_printings"> | string;
    card_set_id?: Prisma.UuidWithAggregatesFilter<"card_printings"> | string;
    source?: Prisma.StringWithAggregatesFilter<"card_printings"> | string;
    source_key?: Prisma.StringWithAggregatesFilter<"card_printings"> | string;
    collector_number?: Prisma.StringWithAggregatesFilter<"card_printings"> | string;
    language_code?: Prisma.StringWithAggregatesFilter<"card_printings"> | string;
    printed_name?: Prisma.StringNullableWithAggregatesFilter<"card_printings"> | string | null;
    printed_type_line?: Prisma.StringNullableWithAggregatesFilter<"card_printings"> | string | null;
    printed_text?: Prisma.StringNullableWithAggregatesFilter<"card_printings"> | string | null;
    rarity?: Prisma.StringNullableWithAggregatesFilter<"card_printings"> | string | null;
    artist_name?: Prisma.StringNullableWithAggregatesFilter<"card_printings"> | string | null;
    treatment?: Prisma.StringNullableWithAggregatesFilter<"card_printings"> | string | null;
    frame_version?: Prisma.StringNullableWithAggregatesFilter<"card_printings"> | string | null;
    border_color?: Prisma.StringNullableWithAggregatesFilter<"card_printings"> | string | null;
    is_promo?: Prisma.BoolWithAggregatesFilter<"card_printings"> | boolean;
    is_reprint?: Prisma.BoolWithAggregatesFilter<"card_printings"> | boolean;
    is_digital?: Prisma.BoolWithAggregatesFilter<"card_printings"> | boolean;
    released_at?: Prisma.DateTimeNullableWithAggregatesFilter<"card_printings"> | Date | string | null;
    image_small_uri?: Prisma.StringNullableWithAggregatesFilter<"card_printings"> | string | null;
    image_normal_uri?: Prisma.StringNullableWithAggregatesFilter<"card_printings"> | string | null;
    image_large_uri?: Prisma.StringNullableWithAggregatesFilter<"card_printings"> | string | null;
    raw_data?: Prisma.JsonNullableWithAggregatesFilter<"card_printings">;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"card_printings"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"card_printings"> | Date | string;
};
export type card_printingsCreateInput = {
    id?: string;
    source: string;
    source_key: string;
    collector_number: string;
    language_code?: string;
    printed_name?: string | null;
    printed_type_line?: string | null;
    printed_text?: string | null;
    rarity?: string | null;
    artist_name?: string | null;
    treatment?: string | null;
    frame_version?: string | null;
    border_color?: string | null;
    is_promo?: boolean;
    is_reprint?: boolean;
    is_digital?: boolean;
    released_at?: Date | string | null;
    image_small_uri?: string | null;
    image_normal_uri?: string | null;
    image_large_uri?: string | null;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
    updated_at?: Date | string;
    canonical_cards: Prisma.canonical_cardsCreateNestedOneWithoutCard_printingsInput;
    games: Prisma.gamesCreateNestedOneWithoutCard_printingsInput;
    card_sets: Prisma.card_setsCreateNestedOneWithoutCard_printingsInput;
    inventory_items?: Prisma.inventory_itemsCreateNestedManyWithoutCard_printingsInput;
    printing_finishes?: Prisma.printing_finishesCreateNestedManyWithoutCard_printingsInput;
    wishlist_items?: Prisma.wishlist_itemsCreateNestedManyWithoutCard_printingsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsCreateNestedManyWithoutCard_printingsInput;
};
export type card_printingsUncheckedCreateInput = {
    id?: string;
    game_id: string;
    canonical_card_id: string;
    card_set_id: string;
    source: string;
    source_key: string;
    collector_number: string;
    language_code?: string;
    printed_name?: string | null;
    printed_type_line?: string | null;
    printed_text?: string | null;
    rarity?: string | null;
    artist_name?: string | null;
    treatment?: string | null;
    frame_version?: string | null;
    border_color?: string | null;
    is_promo?: boolean;
    is_reprint?: boolean;
    is_digital?: boolean;
    released_at?: Date | string | null;
    image_small_uri?: string | null;
    image_normal_uri?: string | null;
    image_large_uri?: string | null;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_items?: Prisma.inventory_itemsUncheckedCreateNestedManyWithoutCard_printingsInput;
    printing_finishes?: Prisma.printing_finishesUncheckedCreateNestedManyWithoutCard_printingsInput;
    wishlist_items?: Prisma.wishlist_itemsUncheckedCreateNestedManyWithoutCard_printingsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedCreateNestedManyWithoutCard_printingsInput;
};
export type card_printingsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    source_key?: Prisma.StringFieldUpdateOperationsInput | string;
    collector_number?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    printed_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    printed_type_line?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    printed_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rarity?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artist_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    treatment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    frame_version?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    border_color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_promo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_reprint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_digital?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    released_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    image_small_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_normal_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_large_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    canonical_cards?: Prisma.canonical_cardsUpdateOneRequiredWithoutCard_printingsNestedInput;
    games?: Prisma.gamesUpdateOneRequiredWithoutCard_printingsNestedInput;
    card_sets?: Prisma.card_setsUpdateOneRequiredWithoutCard_printingsNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateManyWithoutCard_printingsNestedInput;
    printing_finishes?: Prisma.printing_finishesUpdateManyWithoutCard_printingsNestedInput;
    wishlist_items?: Prisma.wishlist_itemsUpdateManyWithoutCard_printingsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUpdateManyWithoutCard_printingsNestedInput;
};
export type card_printingsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    canonical_card_id?: Prisma.StringFieldUpdateOperationsInput | string;
    card_set_id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    source_key?: Prisma.StringFieldUpdateOperationsInput | string;
    collector_number?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    printed_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    printed_type_line?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    printed_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rarity?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artist_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    treatment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    frame_version?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    border_color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_promo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_reprint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_digital?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    released_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    image_small_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_normal_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_large_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_items?: Prisma.inventory_itemsUncheckedUpdateManyWithoutCard_printingsNestedInput;
    printing_finishes?: Prisma.printing_finishesUncheckedUpdateManyWithoutCard_printingsNestedInput;
    wishlist_items?: Prisma.wishlist_itemsUncheckedUpdateManyWithoutCard_printingsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedUpdateManyWithoutCard_printingsNestedInput;
};
export type card_printingsCreateManyInput = {
    id?: string;
    game_id: string;
    canonical_card_id: string;
    card_set_id: string;
    source: string;
    source_key: string;
    collector_number: string;
    language_code?: string;
    printed_name?: string | null;
    printed_type_line?: string | null;
    printed_text?: string | null;
    rarity?: string | null;
    artist_name?: string | null;
    treatment?: string | null;
    frame_version?: string | null;
    border_color?: string | null;
    is_promo?: boolean;
    is_reprint?: boolean;
    is_digital?: boolean;
    released_at?: Date | string | null;
    image_small_uri?: string | null;
    image_normal_uri?: string | null;
    image_large_uri?: string | null;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type card_printingsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    source_key?: Prisma.StringFieldUpdateOperationsInput | string;
    collector_number?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    printed_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    printed_type_line?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    printed_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rarity?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artist_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    treatment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    frame_version?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    border_color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_promo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_reprint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_digital?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    released_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    image_small_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_normal_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_large_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type card_printingsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    canonical_card_id?: Prisma.StringFieldUpdateOperationsInput | string;
    card_set_id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    source_key?: Prisma.StringFieldUpdateOperationsInput | string;
    collector_number?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    printed_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    printed_type_line?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    printed_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rarity?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artist_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    treatment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    frame_version?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    border_color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_promo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_reprint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_digital?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    released_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    image_small_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_normal_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_large_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Card_printingsListRelationFilter = {
    every?: Prisma.card_printingsWhereInput;
    some?: Prisma.card_printingsWhereInput;
    none?: Prisma.card_printingsWhereInput;
};
export type card_printingsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type card_printingsGame_idSourceSource_keyCompoundUniqueInput = {
    game_id: string;
    source: string;
    source_key: string;
};
export type card_printingsIdGame_idCompoundUniqueInput = {
    id: string;
    game_id: string;
};
export type card_printingsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    canonical_card_id?: Prisma.SortOrder;
    card_set_id?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    source_key?: Prisma.SortOrder;
    collector_number?: Prisma.SortOrder;
    language_code?: Prisma.SortOrder;
    printed_name?: Prisma.SortOrder;
    printed_type_line?: Prisma.SortOrder;
    printed_text?: Prisma.SortOrder;
    rarity?: Prisma.SortOrder;
    artist_name?: Prisma.SortOrder;
    treatment?: Prisma.SortOrder;
    frame_version?: Prisma.SortOrder;
    border_color?: Prisma.SortOrder;
    is_promo?: Prisma.SortOrder;
    is_reprint?: Prisma.SortOrder;
    is_digital?: Prisma.SortOrder;
    released_at?: Prisma.SortOrder;
    image_small_uri?: Prisma.SortOrder;
    image_normal_uri?: Prisma.SortOrder;
    image_large_uri?: Prisma.SortOrder;
    raw_data?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type card_printingsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    canonical_card_id?: Prisma.SortOrder;
    card_set_id?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    source_key?: Prisma.SortOrder;
    collector_number?: Prisma.SortOrder;
    language_code?: Prisma.SortOrder;
    printed_name?: Prisma.SortOrder;
    printed_type_line?: Prisma.SortOrder;
    printed_text?: Prisma.SortOrder;
    rarity?: Prisma.SortOrder;
    artist_name?: Prisma.SortOrder;
    treatment?: Prisma.SortOrder;
    frame_version?: Prisma.SortOrder;
    border_color?: Prisma.SortOrder;
    is_promo?: Prisma.SortOrder;
    is_reprint?: Prisma.SortOrder;
    is_digital?: Prisma.SortOrder;
    released_at?: Prisma.SortOrder;
    image_small_uri?: Prisma.SortOrder;
    image_normal_uri?: Prisma.SortOrder;
    image_large_uri?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type card_printingsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    canonical_card_id?: Prisma.SortOrder;
    card_set_id?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    source_key?: Prisma.SortOrder;
    collector_number?: Prisma.SortOrder;
    language_code?: Prisma.SortOrder;
    printed_name?: Prisma.SortOrder;
    printed_type_line?: Prisma.SortOrder;
    printed_text?: Prisma.SortOrder;
    rarity?: Prisma.SortOrder;
    artist_name?: Prisma.SortOrder;
    treatment?: Prisma.SortOrder;
    frame_version?: Prisma.SortOrder;
    border_color?: Prisma.SortOrder;
    is_promo?: Prisma.SortOrder;
    is_reprint?: Prisma.SortOrder;
    is_digital?: Prisma.SortOrder;
    released_at?: Prisma.SortOrder;
    image_small_uri?: Prisma.SortOrder;
    image_normal_uri?: Prisma.SortOrder;
    image_large_uri?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type Card_printingsScalarRelationFilter = {
    is?: Prisma.card_printingsWhereInput;
    isNot?: Prisma.card_printingsWhereInput;
};
export type Card_printingsNullableScalarRelationFilter = {
    is?: Prisma.card_printingsWhereInput | null;
    isNot?: Prisma.card_printingsWhereInput | null;
};
export type card_printingsCreateNestedManyWithoutCanonical_cardsInput = {
    create?: Prisma.XOR<Prisma.card_printingsCreateWithoutCanonical_cardsInput, Prisma.card_printingsUncheckedCreateWithoutCanonical_cardsInput> | Prisma.card_printingsCreateWithoutCanonical_cardsInput[] | Prisma.card_printingsUncheckedCreateWithoutCanonical_cardsInput[];
    connectOrCreate?: Prisma.card_printingsCreateOrConnectWithoutCanonical_cardsInput | Prisma.card_printingsCreateOrConnectWithoutCanonical_cardsInput[];
    createMany?: Prisma.card_printingsCreateManyCanonical_cardsInputEnvelope;
    connect?: Prisma.card_printingsWhereUniqueInput | Prisma.card_printingsWhereUniqueInput[];
};
export type card_printingsUncheckedCreateNestedManyWithoutCanonical_cardsInput = {
    create?: Prisma.XOR<Prisma.card_printingsCreateWithoutCanonical_cardsInput, Prisma.card_printingsUncheckedCreateWithoutCanonical_cardsInput> | Prisma.card_printingsCreateWithoutCanonical_cardsInput[] | Prisma.card_printingsUncheckedCreateWithoutCanonical_cardsInput[];
    connectOrCreate?: Prisma.card_printingsCreateOrConnectWithoutCanonical_cardsInput | Prisma.card_printingsCreateOrConnectWithoutCanonical_cardsInput[];
    createMany?: Prisma.card_printingsCreateManyCanonical_cardsInputEnvelope;
    connect?: Prisma.card_printingsWhereUniqueInput | Prisma.card_printingsWhereUniqueInput[];
};
export type card_printingsUpdateManyWithoutCanonical_cardsNestedInput = {
    create?: Prisma.XOR<Prisma.card_printingsCreateWithoutCanonical_cardsInput, Prisma.card_printingsUncheckedCreateWithoutCanonical_cardsInput> | Prisma.card_printingsCreateWithoutCanonical_cardsInput[] | Prisma.card_printingsUncheckedCreateWithoutCanonical_cardsInput[];
    connectOrCreate?: Prisma.card_printingsCreateOrConnectWithoutCanonical_cardsInput | Prisma.card_printingsCreateOrConnectWithoutCanonical_cardsInput[];
    upsert?: Prisma.card_printingsUpsertWithWhereUniqueWithoutCanonical_cardsInput | Prisma.card_printingsUpsertWithWhereUniqueWithoutCanonical_cardsInput[];
    createMany?: Prisma.card_printingsCreateManyCanonical_cardsInputEnvelope;
    set?: Prisma.card_printingsWhereUniqueInput | Prisma.card_printingsWhereUniqueInput[];
    disconnect?: Prisma.card_printingsWhereUniqueInput | Prisma.card_printingsWhereUniqueInput[];
    delete?: Prisma.card_printingsWhereUniqueInput | Prisma.card_printingsWhereUniqueInput[];
    connect?: Prisma.card_printingsWhereUniqueInput | Prisma.card_printingsWhereUniqueInput[];
    update?: Prisma.card_printingsUpdateWithWhereUniqueWithoutCanonical_cardsInput | Prisma.card_printingsUpdateWithWhereUniqueWithoutCanonical_cardsInput[];
    updateMany?: Prisma.card_printingsUpdateManyWithWhereWithoutCanonical_cardsInput | Prisma.card_printingsUpdateManyWithWhereWithoutCanonical_cardsInput[];
    deleteMany?: Prisma.card_printingsScalarWhereInput | Prisma.card_printingsScalarWhereInput[];
};
export type card_printingsUncheckedUpdateManyWithoutCanonical_cardsNestedInput = {
    create?: Prisma.XOR<Prisma.card_printingsCreateWithoutCanonical_cardsInput, Prisma.card_printingsUncheckedCreateWithoutCanonical_cardsInput> | Prisma.card_printingsCreateWithoutCanonical_cardsInput[] | Prisma.card_printingsUncheckedCreateWithoutCanonical_cardsInput[];
    connectOrCreate?: Prisma.card_printingsCreateOrConnectWithoutCanonical_cardsInput | Prisma.card_printingsCreateOrConnectWithoutCanonical_cardsInput[];
    upsert?: Prisma.card_printingsUpsertWithWhereUniqueWithoutCanonical_cardsInput | Prisma.card_printingsUpsertWithWhereUniqueWithoutCanonical_cardsInput[];
    createMany?: Prisma.card_printingsCreateManyCanonical_cardsInputEnvelope;
    set?: Prisma.card_printingsWhereUniqueInput | Prisma.card_printingsWhereUniqueInput[];
    disconnect?: Prisma.card_printingsWhereUniqueInput | Prisma.card_printingsWhereUniqueInput[];
    delete?: Prisma.card_printingsWhereUniqueInput | Prisma.card_printingsWhereUniqueInput[];
    connect?: Prisma.card_printingsWhereUniqueInput | Prisma.card_printingsWhereUniqueInput[];
    update?: Prisma.card_printingsUpdateWithWhereUniqueWithoutCanonical_cardsInput | Prisma.card_printingsUpdateWithWhereUniqueWithoutCanonical_cardsInput[];
    updateMany?: Prisma.card_printingsUpdateManyWithWhereWithoutCanonical_cardsInput | Prisma.card_printingsUpdateManyWithWhereWithoutCanonical_cardsInput[];
    deleteMany?: Prisma.card_printingsScalarWhereInput | Prisma.card_printingsScalarWhereInput[];
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type card_printingsCreateNestedManyWithoutCard_setsInput = {
    create?: Prisma.XOR<Prisma.card_printingsCreateWithoutCard_setsInput, Prisma.card_printingsUncheckedCreateWithoutCard_setsInput> | Prisma.card_printingsCreateWithoutCard_setsInput[] | Prisma.card_printingsUncheckedCreateWithoutCard_setsInput[];
    connectOrCreate?: Prisma.card_printingsCreateOrConnectWithoutCard_setsInput | Prisma.card_printingsCreateOrConnectWithoutCard_setsInput[];
    createMany?: Prisma.card_printingsCreateManyCard_setsInputEnvelope;
    connect?: Prisma.card_printingsWhereUniqueInput | Prisma.card_printingsWhereUniqueInput[];
};
export type card_printingsUncheckedCreateNestedManyWithoutCard_setsInput = {
    create?: Prisma.XOR<Prisma.card_printingsCreateWithoutCard_setsInput, Prisma.card_printingsUncheckedCreateWithoutCard_setsInput> | Prisma.card_printingsCreateWithoutCard_setsInput[] | Prisma.card_printingsUncheckedCreateWithoutCard_setsInput[];
    connectOrCreate?: Prisma.card_printingsCreateOrConnectWithoutCard_setsInput | Prisma.card_printingsCreateOrConnectWithoutCard_setsInput[];
    createMany?: Prisma.card_printingsCreateManyCard_setsInputEnvelope;
    connect?: Prisma.card_printingsWhereUniqueInput | Prisma.card_printingsWhereUniqueInput[];
};
export type card_printingsUpdateManyWithoutCard_setsNestedInput = {
    create?: Prisma.XOR<Prisma.card_printingsCreateWithoutCard_setsInput, Prisma.card_printingsUncheckedCreateWithoutCard_setsInput> | Prisma.card_printingsCreateWithoutCard_setsInput[] | Prisma.card_printingsUncheckedCreateWithoutCard_setsInput[];
    connectOrCreate?: Prisma.card_printingsCreateOrConnectWithoutCard_setsInput | Prisma.card_printingsCreateOrConnectWithoutCard_setsInput[];
    upsert?: Prisma.card_printingsUpsertWithWhereUniqueWithoutCard_setsInput | Prisma.card_printingsUpsertWithWhereUniqueWithoutCard_setsInput[];
    createMany?: Prisma.card_printingsCreateManyCard_setsInputEnvelope;
    set?: Prisma.card_printingsWhereUniqueInput | Prisma.card_printingsWhereUniqueInput[];
    disconnect?: Prisma.card_printingsWhereUniqueInput | Prisma.card_printingsWhereUniqueInput[];
    delete?: Prisma.card_printingsWhereUniqueInput | Prisma.card_printingsWhereUniqueInput[];
    connect?: Prisma.card_printingsWhereUniqueInput | Prisma.card_printingsWhereUniqueInput[];
    update?: Prisma.card_printingsUpdateWithWhereUniqueWithoutCard_setsInput | Prisma.card_printingsUpdateWithWhereUniqueWithoutCard_setsInput[];
    updateMany?: Prisma.card_printingsUpdateManyWithWhereWithoutCard_setsInput | Prisma.card_printingsUpdateManyWithWhereWithoutCard_setsInput[];
    deleteMany?: Prisma.card_printingsScalarWhereInput | Prisma.card_printingsScalarWhereInput[];
};
export type card_printingsUncheckedUpdateManyWithoutCard_setsNestedInput = {
    create?: Prisma.XOR<Prisma.card_printingsCreateWithoutCard_setsInput, Prisma.card_printingsUncheckedCreateWithoutCard_setsInput> | Prisma.card_printingsCreateWithoutCard_setsInput[] | Prisma.card_printingsUncheckedCreateWithoutCard_setsInput[];
    connectOrCreate?: Prisma.card_printingsCreateOrConnectWithoutCard_setsInput | Prisma.card_printingsCreateOrConnectWithoutCard_setsInput[];
    upsert?: Prisma.card_printingsUpsertWithWhereUniqueWithoutCard_setsInput | Prisma.card_printingsUpsertWithWhereUniqueWithoutCard_setsInput[];
    createMany?: Prisma.card_printingsCreateManyCard_setsInputEnvelope;
    set?: Prisma.card_printingsWhereUniqueInput | Prisma.card_printingsWhereUniqueInput[];
    disconnect?: Prisma.card_printingsWhereUniqueInput | Prisma.card_printingsWhereUniqueInput[];
    delete?: Prisma.card_printingsWhereUniqueInput | Prisma.card_printingsWhereUniqueInput[];
    connect?: Prisma.card_printingsWhereUniqueInput | Prisma.card_printingsWhereUniqueInput[];
    update?: Prisma.card_printingsUpdateWithWhereUniqueWithoutCard_setsInput | Prisma.card_printingsUpdateWithWhereUniqueWithoutCard_setsInput[];
    updateMany?: Prisma.card_printingsUpdateManyWithWhereWithoutCard_setsInput | Prisma.card_printingsUpdateManyWithWhereWithoutCard_setsInput[];
    deleteMany?: Prisma.card_printingsScalarWhereInput | Prisma.card_printingsScalarWhereInput[];
};
export type card_printingsCreateNestedManyWithoutGamesInput = {
    create?: Prisma.XOR<Prisma.card_printingsCreateWithoutGamesInput, Prisma.card_printingsUncheckedCreateWithoutGamesInput> | Prisma.card_printingsCreateWithoutGamesInput[] | Prisma.card_printingsUncheckedCreateWithoutGamesInput[];
    connectOrCreate?: Prisma.card_printingsCreateOrConnectWithoutGamesInput | Prisma.card_printingsCreateOrConnectWithoutGamesInput[];
    createMany?: Prisma.card_printingsCreateManyGamesInputEnvelope;
    connect?: Prisma.card_printingsWhereUniqueInput | Prisma.card_printingsWhereUniqueInput[];
};
export type card_printingsUncheckedCreateNestedManyWithoutGamesInput = {
    create?: Prisma.XOR<Prisma.card_printingsCreateWithoutGamesInput, Prisma.card_printingsUncheckedCreateWithoutGamesInput> | Prisma.card_printingsCreateWithoutGamesInput[] | Prisma.card_printingsUncheckedCreateWithoutGamesInput[];
    connectOrCreate?: Prisma.card_printingsCreateOrConnectWithoutGamesInput | Prisma.card_printingsCreateOrConnectWithoutGamesInput[];
    createMany?: Prisma.card_printingsCreateManyGamesInputEnvelope;
    connect?: Prisma.card_printingsWhereUniqueInput | Prisma.card_printingsWhereUniqueInput[];
};
export type card_printingsUpdateManyWithoutGamesNestedInput = {
    create?: Prisma.XOR<Prisma.card_printingsCreateWithoutGamesInput, Prisma.card_printingsUncheckedCreateWithoutGamesInput> | Prisma.card_printingsCreateWithoutGamesInput[] | Prisma.card_printingsUncheckedCreateWithoutGamesInput[];
    connectOrCreate?: Prisma.card_printingsCreateOrConnectWithoutGamesInput | Prisma.card_printingsCreateOrConnectWithoutGamesInput[];
    upsert?: Prisma.card_printingsUpsertWithWhereUniqueWithoutGamesInput | Prisma.card_printingsUpsertWithWhereUniqueWithoutGamesInput[];
    createMany?: Prisma.card_printingsCreateManyGamesInputEnvelope;
    set?: Prisma.card_printingsWhereUniqueInput | Prisma.card_printingsWhereUniqueInput[];
    disconnect?: Prisma.card_printingsWhereUniqueInput | Prisma.card_printingsWhereUniqueInput[];
    delete?: Prisma.card_printingsWhereUniqueInput | Prisma.card_printingsWhereUniqueInput[];
    connect?: Prisma.card_printingsWhereUniqueInput | Prisma.card_printingsWhereUniqueInput[];
    update?: Prisma.card_printingsUpdateWithWhereUniqueWithoutGamesInput | Prisma.card_printingsUpdateWithWhereUniqueWithoutGamesInput[];
    updateMany?: Prisma.card_printingsUpdateManyWithWhereWithoutGamesInput | Prisma.card_printingsUpdateManyWithWhereWithoutGamesInput[];
    deleteMany?: Prisma.card_printingsScalarWhereInput | Prisma.card_printingsScalarWhereInput[];
};
export type card_printingsUncheckedUpdateManyWithoutGamesNestedInput = {
    create?: Prisma.XOR<Prisma.card_printingsCreateWithoutGamesInput, Prisma.card_printingsUncheckedCreateWithoutGamesInput> | Prisma.card_printingsCreateWithoutGamesInput[] | Prisma.card_printingsUncheckedCreateWithoutGamesInput[];
    connectOrCreate?: Prisma.card_printingsCreateOrConnectWithoutGamesInput | Prisma.card_printingsCreateOrConnectWithoutGamesInput[];
    upsert?: Prisma.card_printingsUpsertWithWhereUniqueWithoutGamesInput | Prisma.card_printingsUpsertWithWhereUniqueWithoutGamesInput[];
    createMany?: Prisma.card_printingsCreateManyGamesInputEnvelope;
    set?: Prisma.card_printingsWhereUniqueInput | Prisma.card_printingsWhereUniqueInput[];
    disconnect?: Prisma.card_printingsWhereUniqueInput | Prisma.card_printingsWhereUniqueInput[];
    delete?: Prisma.card_printingsWhereUniqueInput | Prisma.card_printingsWhereUniqueInput[];
    connect?: Prisma.card_printingsWhereUniqueInput | Prisma.card_printingsWhereUniqueInput[];
    update?: Prisma.card_printingsUpdateWithWhereUniqueWithoutGamesInput | Prisma.card_printingsUpdateWithWhereUniqueWithoutGamesInput[];
    updateMany?: Prisma.card_printingsUpdateManyWithWhereWithoutGamesInput | Prisma.card_printingsUpdateManyWithWhereWithoutGamesInput[];
    deleteMany?: Prisma.card_printingsScalarWhereInput | Prisma.card_printingsScalarWhereInput[];
};
export type card_printingsCreateNestedOneWithoutInventory_itemsInput = {
    create?: Prisma.XOR<Prisma.card_printingsCreateWithoutInventory_itemsInput, Prisma.card_printingsUncheckedCreateWithoutInventory_itemsInput>;
    connectOrCreate?: Prisma.card_printingsCreateOrConnectWithoutInventory_itemsInput;
    connect?: Prisma.card_printingsWhereUniqueInput;
};
export type card_printingsUpdateOneRequiredWithoutInventory_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.card_printingsCreateWithoutInventory_itemsInput, Prisma.card_printingsUncheckedCreateWithoutInventory_itemsInput>;
    connectOrCreate?: Prisma.card_printingsCreateOrConnectWithoutInventory_itemsInput;
    upsert?: Prisma.card_printingsUpsertWithoutInventory_itemsInput;
    connect?: Prisma.card_printingsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.card_printingsUpdateToOneWithWhereWithoutInventory_itemsInput, Prisma.card_printingsUpdateWithoutInventory_itemsInput>, Prisma.card_printingsUncheckedUpdateWithoutInventory_itemsInput>;
};
export type card_printingsCreateNestedOneWithoutPrinting_finishesInput = {
    create?: Prisma.XOR<Prisma.card_printingsCreateWithoutPrinting_finishesInput, Prisma.card_printingsUncheckedCreateWithoutPrinting_finishesInput>;
    connectOrCreate?: Prisma.card_printingsCreateOrConnectWithoutPrinting_finishesInput;
    connect?: Prisma.card_printingsWhereUniqueInput;
};
export type card_printingsUpdateOneRequiredWithoutPrinting_finishesNestedInput = {
    create?: Prisma.XOR<Prisma.card_printingsCreateWithoutPrinting_finishesInput, Prisma.card_printingsUncheckedCreateWithoutPrinting_finishesInput>;
    connectOrCreate?: Prisma.card_printingsCreateOrConnectWithoutPrinting_finishesInput;
    upsert?: Prisma.card_printingsUpsertWithoutPrinting_finishesInput;
    connect?: Prisma.card_printingsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.card_printingsUpdateToOneWithWhereWithoutPrinting_finishesInput, Prisma.card_printingsUpdateWithoutPrinting_finishesInput>, Prisma.card_printingsUncheckedUpdateWithoutPrinting_finishesInput>;
};
export type card_printingsCreateNestedOneWithoutWishlist_itemsInput = {
    create?: Prisma.XOR<Prisma.card_printingsCreateWithoutWishlist_itemsInput, Prisma.card_printingsUncheckedCreateWithoutWishlist_itemsInput>;
    connectOrCreate?: Prisma.card_printingsCreateOrConnectWithoutWishlist_itemsInput;
    connect?: Prisma.card_printingsWhereUniqueInput;
};
export type card_printingsUpdateOneWithoutWishlist_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.card_printingsCreateWithoutWishlist_itemsInput, Prisma.card_printingsUncheckedCreateWithoutWishlist_itemsInput>;
    connectOrCreate?: Prisma.card_printingsCreateOrConnectWithoutWishlist_itemsInput;
    upsert?: Prisma.card_printingsUpsertWithoutWishlist_itemsInput;
    disconnect?: Prisma.card_printingsWhereInput | boolean;
    delete?: Prisma.card_printingsWhereInput | boolean;
    connect?: Prisma.card_printingsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.card_printingsUpdateToOneWithWhereWithoutWishlist_itemsInput, Prisma.card_printingsUpdateWithoutWishlist_itemsInput>, Prisma.card_printingsUncheckedUpdateWithoutWishlist_itemsInput>;
};
export type card_printingsCreateNestedOneWithoutWishlist_offer_requested_itemsInput = {
    create?: Prisma.XOR<Prisma.card_printingsCreateWithoutWishlist_offer_requested_itemsInput, Prisma.card_printingsUncheckedCreateWithoutWishlist_offer_requested_itemsInput>;
    connectOrCreate?: Prisma.card_printingsCreateOrConnectWithoutWishlist_offer_requested_itemsInput;
    connect?: Prisma.card_printingsWhereUniqueInput;
};
export type card_printingsUpdateOneWithoutWishlist_offer_requested_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.card_printingsCreateWithoutWishlist_offer_requested_itemsInput, Prisma.card_printingsUncheckedCreateWithoutWishlist_offer_requested_itemsInput>;
    connectOrCreate?: Prisma.card_printingsCreateOrConnectWithoutWishlist_offer_requested_itemsInput;
    upsert?: Prisma.card_printingsUpsertWithoutWishlist_offer_requested_itemsInput;
    disconnect?: Prisma.card_printingsWhereInput | boolean;
    delete?: Prisma.card_printingsWhereInput | boolean;
    connect?: Prisma.card_printingsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.card_printingsUpdateToOneWithWhereWithoutWishlist_offer_requested_itemsInput, Prisma.card_printingsUpdateWithoutWishlist_offer_requested_itemsInput>, Prisma.card_printingsUncheckedUpdateWithoutWishlist_offer_requested_itemsInput>;
};
export type card_printingsCreateWithoutCanonical_cardsInput = {
    id?: string;
    source: string;
    source_key: string;
    collector_number: string;
    language_code?: string;
    printed_name?: string | null;
    printed_type_line?: string | null;
    printed_text?: string | null;
    rarity?: string | null;
    artist_name?: string | null;
    treatment?: string | null;
    frame_version?: string | null;
    border_color?: string | null;
    is_promo?: boolean;
    is_reprint?: boolean;
    is_digital?: boolean;
    released_at?: Date | string | null;
    image_small_uri?: string | null;
    image_normal_uri?: string | null;
    image_large_uri?: string | null;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
    updated_at?: Date | string;
    games: Prisma.gamesCreateNestedOneWithoutCard_printingsInput;
    card_sets: Prisma.card_setsCreateNestedOneWithoutCard_printingsInput;
    inventory_items?: Prisma.inventory_itemsCreateNestedManyWithoutCard_printingsInput;
    printing_finishes?: Prisma.printing_finishesCreateNestedManyWithoutCard_printingsInput;
    wishlist_items?: Prisma.wishlist_itemsCreateNestedManyWithoutCard_printingsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsCreateNestedManyWithoutCard_printingsInput;
};
export type card_printingsUncheckedCreateWithoutCanonical_cardsInput = {
    id?: string;
    card_set_id: string;
    source: string;
    source_key: string;
    collector_number: string;
    language_code?: string;
    printed_name?: string | null;
    printed_type_line?: string | null;
    printed_text?: string | null;
    rarity?: string | null;
    artist_name?: string | null;
    treatment?: string | null;
    frame_version?: string | null;
    border_color?: string | null;
    is_promo?: boolean;
    is_reprint?: boolean;
    is_digital?: boolean;
    released_at?: Date | string | null;
    image_small_uri?: string | null;
    image_normal_uri?: string | null;
    image_large_uri?: string | null;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_items?: Prisma.inventory_itemsUncheckedCreateNestedManyWithoutCard_printingsInput;
    printing_finishes?: Prisma.printing_finishesUncheckedCreateNestedManyWithoutCard_printingsInput;
    wishlist_items?: Prisma.wishlist_itemsUncheckedCreateNestedManyWithoutCard_printingsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedCreateNestedManyWithoutCard_printingsInput;
};
export type card_printingsCreateOrConnectWithoutCanonical_cardsInput = {
    where: Prisma.card_printingsWhereUniqueInput;
    create: Prisma.XOR<Prisma.card_printingsCreateWithoutCanonical_cardsInput, Prisma.card_printingsUncheckedCreateWithoutCanonical_cardsInput>;
};
export type card_printingsCreateManyCanonical_cardsInputEnvelope = {
    data: Prisma.card_printingsCreateManyCanonical_cardsInput | Prisma.card_printingsCreateManyCanonical_cardsInput[];
    skipDuplicates?: boolean;
};
export type card_printingsUpsertWithWhereUniqueWithoutCanonical_cardsInput = {
    where: Prisma.card_printingsWhereUniqueInput;
    update: Prisma.XOR<Prisma.card_printingsUpdateWithoutCanonical_cardsInput, Prisma.card_printingsUncheckedUpdateWithoutCanonical_cardsInput>;
    create: Prisma.XOR<Prisma.card_printingsCreateWithoutCanonical_cardsInput, Prisma.card_printingsUncheckedCreateWithoutCanonical_cardsInput>;
};
export type card_printingsUpdateWithWhereUniqueWithoutCanonical_cardsInput = {
    where: Prisma.card_printingsWhereUniqueInput;
    data: Prisma.XOR<Prisma.card_printingsUpdateWithoutCanonical_cardsInput, Prisma.card_printingsUncheckedUpdateWithoutCanonical_cardsInput>;
};
export type card_printingsUpdateManyWithWhereWithoutCanonical_cardsInput = {
    where: Prisma.card_printingsScalarWhereInput;
    data: Prisma.XOR<Prisma.card_printingsUpdateManyMutationInput, Prisma.card_printingsUncheckedUpdateManyWithoutCanonical_cardsInput>;
};
export type card_printingsScalarWhereInput = {
    AND?: Prisma.card_printingsScalarWhereInput | Prisma.card_printingsScalarWhereInput[];
    OR?: Prisma.card_printingsScalarWhereInput[];
    NOT?: Prisma.card_printingsScalarWhereInput | Prisma.card_printingsScalarWhereInput[];
    id?: Prisma.UuidFilter<"card_printings"> | string;
    game_id?: Prisma.UuidFilter<"card_printings"> | string;
    canonical_card_id?: Prisma.UuidFilter<"card_printings"> | string;
    card_set_id?: Prisma.UuidFilter<"card_printings"> | string;
    source?: Prisma.StringFilter<"card_printings"> | string;
    source_key?: Prisma.StringFilter<"card_printings"> | string;
    collector_number?: Prisma.StringFilter<"card_printings"> | string;
    language_code?: Prisma.StringFilter<"card_printings"> | string;
    printed_name?: Prisma.StringNullableFilter<"card_printings"> | string | null;
    printed_type_line?: Prisma.StringNullableFilter<"card_printings"> | string | null;
    printed_text?: Prisma.StringNullableFilter<"card_printings"> | string | null;
    rarity?: Prisma.StringNullableFilter<"card_printings"> | string | null;
    artist_name?: Prisma.StringNullableFilter<"card_printings"> | string | null;
    treatment?: Prisma.StringNullableFilter<"card_printings"> | string | null;
    frame_version?: Prisma.StringNullableFilter<"card_printings"> | string | null;
    border_color?: Prisma.StringNullableFilter<"card_printings"> | string | null;
    is_promo?: Prisma.BoolFilter<"card_printings"> | boolean;
    is_reprint?: Prisma.BoolFilter<"card_printings"> | boolean;
    is_digital?: Prisma.BoolFilter<"card_printings"> | boolean;
    released_at?: Prisma.DateTimeNullableFilter<"card_printings"> | Date | string | null;
    image_small_uri?: Prisma.StringNullableFilter<"card_printings"> | string | null;
    image_normal_uri?: Prisma.StringNullableFilter<"card_printings"> | string | null;
    image_large_uri?: Prisma.StringNullableFilter<"card_printings"> | string | null;
    raw_data?: Prisma.JsonNullableFilter<"card_printings">;
    created_at?: Prisma.DateTimeFilter<"card_printings"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"card_printings"> | Date | string;
};
export type card_printingsCreateWithoutCard_setsInput = {
    id?: string;
    source: string;
    source_key: string;
    collector_number: string;
    language_code?: string;
    printed_name?: string | null;
    printed_type_line?: string | null;
    printed_text?: string | null;
    rarity?: string | null;
    artist_name?: string | null;
    treatment?: string | null;
    frame_version?: string | null;
    border_color?: string | null;
    is_promo?: boolean;
    is_reprint?: boolean;
    is_digital?: boolean;
    released_at?: Date | string | null;
    image_small_uri?: string | null;
    image_normal_uri?: string | null;
    image_large_uri?: string | null;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
    updated_at?: Date | string;
    canonical_cards: Prisma.canonical_cardsCreateNestedOneWithoutCard_printingsInput;
    games: Prisma.gamesCreateNestedOneWithoutCard_printingsInput;
    inventory_items?: Prisma.inventory_itemsCreateNestedManyWithoutCard_printingsInput;
    printing_finishes?: Prisma.printing_finishesCreateNestedManyWithoutCard_printingsInput;
    wishlist_items?: Prisma.wishlist_itemsCreateNestedManyWithoutCard_printingsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsCreateNestedManyWithoutCard_printingsInput;
};
export type card_printingsUncheckedCreateWithoutCard_setsInput = {
    id?: string;
    canonical_card_id: string;
    source: string;
    source_key: string;
    collector_number: string;
    language_code?: string;
    printed_name?: string | null;
    printed_type_line?: string | null;
    printed_text?: string | null;
    rarity?: string | null;
    artist_name?: string | null;
    treatment?: string | null;
    frame_version?: string | null;
    border_color?: string | null;
    is_promo?: boolean;
    is_reprint?: boolean;
    is_digital?: boolean;
    released_at?: Date | string | null;
    image_small_uri?: string | null;
    image_normal_uri?: string | null;
    image_large_uri?: string | null;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_items?: Prisma.inventory_itemsUncheckedCreateNestedManyWithoutCard_printingsInput;
    printing_finishes?: Prisma.printing_finishesUncheckedCreateNestedManyWithoutCard_printingsInput;
    wishlist_items?: Prisma.wishlist_itemsUncheckedCreateNestedManyWithoutCard_printingsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedCreateNestedManyWithoutCard_printingsInput;
};
export type card_printingsCreateOrConnectWithoutCard_setsInput = {
    where: Prisma.card_printingsWhereUniqueInput;
    create: Prisma.XOR<Prisma.card_printingsCreateWithoutCard_setsInput, Prisma.card_printingsUncheckedCreateWithoutCard_setsInput>;
};
export type card_printingsCreateManyCard_setsInputEnvelope = {
    data: Prisma.card_printingsCreateManyCard_setsInput | Prisma.card_printingsCreateManyCard_setsInput[];
    skipDuplicates?: boolean;
};
export type card_printingsUpsertWithWhereUniqueWithoutCard_setsInput = {
    where: Prisma.card_printingsWhereUniqueInput;
    update: Prisma.XOR<Prisma.card_printingsUpdateWithoutCard_setsInput, Prisma.card_printingsUncheckedUpdateWithoutCard_setsInput>;
    create: Prisma.XOR<Prisma.card_printingsCreateWithoutCard_setsInput, Prisma.card_printingsUncheckedCreateWithoutCard_setsInput>;
};
export type card_printingsUpdateWithWhereUniqueWithoutCard_setsInput = {
    where: Prisma.card_printingsWhereUniqueInput;
    data: Prisma.XOR<Prisma.card_printingsUpdateWithoutCard_setsInput, Prisma.card_printingsUncheckedUpdateWithoutCard_setsInput>;
};
export type card_printingsUpdateManyWithWhereWithoutCard_setsInput = {
    where: Prisma.card_printingsScalarWhereInput;
    data: Prisma.XOR<Prisma.card_printingsUpdateManyMutationInput, Prisma.card_printingsUncheckedUpdateManyWithoutCard_setsInput>;
};
export type card_printingsCreateWithoutGamesInput = {
    id?: string;
    source: string;
    source_key: string;
    collector_number: string;
    language_code?: string;
    printed_name?: string | null;
    printed_type_line?: string | null;
    printed_text?: string | null;
    rarity?: string | null;
    artist_name?: string | null;
    treatment?: string | null;
    frame_version?: string | null;
    border_color?: string | null;
    is_promo?: boolean;
    is_reprint?: boolean;
    is_digital?: boolean;
    released_at?: Date | string | null;
    image_small_uri?: string | null;
    image_normal_uri?: string | null;
    image_large_uri?: string | null;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
    updated_at?: Date | string;
    canonical_cards: Prisma.canonical_cardsCreateNestedOneWithoutCard_printingsInput;
    card_sets: Prisma.card_setsCreateNestedOneWithoutCard_printingsInput;
    inventory_items?: Prisma.inventory_itemsCreateNestedManyWithoutCard_printingsInput;
    printing_finishes?: Prisma.printing_finishesCreateNestedManyWithoutCard_printingsInput;
    wishlist_items?: Prisma.wishlist_itemsCreateNestedManyWithoutCard_printingsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsCreateNestedManyWithoutCard_printingsInput;
};
export type card_printingsUncheckedCreateWithoutGamesInput = {
    id?: string;
    canonical_card_id: string;
    card_set_id: string;
    source: string;
    source_key: string;
    collector_number: string;
    language_code?: string;
    printed_name?: string | null;
    printed_type_line?: string | null;
    printed_text?: string | null;
    rarity?: string | null;
    artist_name?: string | null;
    treatment?: string | null;
    frame_version?: string | null;
    border_color?: string | null;
    is_promo?: boolean;
    is_reprint?: boolean;
    is_digital?: boolean;
    released_at?: Date | string | null;
    image_small_uri?: string | null;
    image_normal_uri?: string | null;
    image_large_uri?: string | null;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_items?: Prisma.inventory_itemsUncheckedCreateNestedManyWithoutCard_printingsInput;
    printing_finishes?: Prisma.printing_finishesUncheckedCreateNestedManyWithoutCard_printingsInput;
    wishlist_items?: Prisma.wishlist_itemsUncheckedCreateNestedManyWithoutCard_printingsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedCreateNestedManyWithoutCard_printingsInput;
};
export type card_printingsCreateOrConnectWithoutGamesInput = {
    where: Prisma.card_printingsWhereUniqueInput;
    create: Prisma.XOR<Prisma.card_printingsCreateWithoutGamesInput, Prisma.card_printingsUncheckedCreateWithoutGamesInput>;
};
export type card_printingsCreateManyGamesInputEnvelope = {
    data: Prisma.card_printingsCreateManyGamesInput | Prisma.card_printingsCreateManyGamesInput[];
    skipDuplicates?: boolean;
};
export type card_printingsUpsertWithWhereUniqueWithoutGamesInput = {
    where: Prisma.card_printingsWhereUniqueInput;
    update: Prisma.XOR<Prisma.card_printingsUpdateWithoutGamesInput, Prisma.card_printingsUncheckedUpdateWithoutGamesInput>;
    create: Prisma.XOR<Prisma.card_printingsCreateWithoutGamesInput, Prisma.card_printingsUncheckedCreateWithoutGamesInput>;
};
export type card_printingsUpdateWithWhereUniqueWithoutGamesInput = {
    where: Prisma.card_printingsWhereUniqueInput;
    data: Prisma.XOR<Prisma.card_printingsUpdateWithoutGamesInput, Prisma.card_printingsUncheckedUpdateWithoutGamesInput>;
};
export type card_printingsUpdateManyWithWhereWithoutGamesInput = {
    where: Prisma.card_printingsScalarWhereInput;
    data: Prisma.XOR<Prisma.card_printingsUpdateManyMutationInput, Prisma.card_printingsUncheckedUpdateManyWithoutGamesInput>;
};
export type card_printingsCreateWithoutInventory_itemsInput = {
    id?: string;
    source: string;
    source_key: string;
    collector_number: string;
    language_code?: string;
    printed_name?: string | null;
    printed_type_line?: string | null;
    printed_text?: string | null;
    rarity?: string | null;
    artist_name?: string | null;
    treatment?: string | null;
    frame_version?: string | null;
    border_color?: string | null;
    is_promo?: boolean;
    is_reprint?: boolean;
    is_digital?: boolean;
    released_at?: Date | string | null;
    image_small_uri?: string | null;
    image_normal_uri?: string | null;
    image_large_uri?: string | null;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
    updated_at?: Date | string;
    canonical_cards: Prisma.canonical_cardsCreateNestedOneWithoutCard_printingsInput;
    games: Prisma.gamesCreateNestedOneWithoutCard_printingsInput;
    card_sets: Prisma.card_setsCreateNestedOneWithoutCard_printingsInput;
    printing_finishes?: Prisma.printing_finishesCreateNestedManyWithoutCard_printingsInput;
    wishlist_items?: Prisma.wishlist_itemsCreateNestedManyWithoutCard_printingsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsCreateNestedManyWithoutCard_printingsInput;
};
export type card_printingsUncheckedCreateWithoutInventory_itemsInput = {
    id?: string;
    game_id: string;
    canonical_card_id: string;
    card_set_id: string;
    source: string;
    source_key: string;
    collector_number: string;
    language_code?: string;
    printed_name?: string | null;
    printed_type_line?: string | null;
    printed_text?: string | null;
    rarity?: string | null;
    artist_name?: string | null;
    treatment?: string | null;
    frame_version?: string | null;
    border_color?: string | null;
    is_promo?: boolean;
    is_reprint?: boolean;
    is_digital?: boolean;
    released_at?: Date | string | null;
    image_small_uri?: string | null;
    image_normal_uri?: string | null;
    image_large_uri?: string | null;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
    updated_at?: Date | string;
    printing_finishes?: Prisma.printing_finishesUncheckedCreateNestedManyWithoutCard_printingsInput;
    wishlist_items?: Prisma.wishlist_itemsUncheckedCreateNestedManyWithoutCard_printingsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedCreateNestedManyWithoutCard_printingsInput;
};
export type card_printingsCreateOrConnectWithoutInventory_itemsInput = {
    where: Prisma.card_printingsWhereUniqueInput;
    create: Prisma.XOR<Prisma.card_printingsCreateWithoutInventory_itemsInput, Prisma.card_printingsUncheckedCreateWithoutInventory_itemsInput>;
};
export type card_printingsUpsertWithoutInventory_itemsInput = {
    update: Prisma.XOR<Prisma.card_printingsUpdateWithoutInventory_itemsInput, Prisma.card_printingsUncheckedUpdateWithoutInventory_itemsInput>;
    create: Prisma.XOR<Prisma.card_printingsCreateWithoutInventory_itemsInput, Prisma.card_printingsUncheckedCreateWithoutInventory_itemsInput>;
    where?: Prisma.card_printingsWhereInput;
};
export type card_printingsUpdateToOneWithWhereWithoutInventory_itemsInput = {
    where?: Prisma.card_printingsWhereInput;
    data: Prisma.XOR<Prisma.card_printingsUpdateWithoutInventory_itemsInput, Prisma.card_printingsUncheckedUpdateWithoutInventory_itemsInput>;
};
export type card_printingsUpdateWithoutInventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    source_key?: Prisma.StringFieldUpdateOperationsInput | string;
    collector_number?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    printed_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    printed_type_line?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    printed_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rarity?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artist_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    treatment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    frame_version?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    border_color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_promo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_reprint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_digital?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    released_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    image_small_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_normal_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_large_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    canonical_cards?: Prisma.canonical_cardsUpdateOneRequiredWithoutCard_printingsNestedInput;
    games?: Prisma.gamesUpdateOneRequiredWithoutCard_printingsNestedInput;
    card_sets?: Prisma.card_setsUpdateOneRequiredWithoutCard_printingsNestedInput;
    printing_finishes?: Prisma.printing_finishesUpdateManyWithoutCard_printingsNestedInput;
    wishlist_items?: Prisma.wishlist_itemsUpdateManyWithoutCard_printingsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUpdateManyWithoutCard_printingsNestedInput;
};
export type card_printingsUncheckedUpdateWithoutInventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    canonical_card_id?: Prisma.StringFieldUpdateOperationsInput | string;
    card_set_id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    source_key?: Prisma.StringFieldUpdateOperationsInput | string;
    collector_number?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    printed_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    printed_type_line?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    printed_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rarity?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artist_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    treatment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    frame_version?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    border_color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_promo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_reprint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_digital?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    released_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    image_small_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_normal_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_large_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    printing_finishes?: Prisma.printing_finishesUncheckedUpdateManyWithoutCard_printingsNestedInput;
    wishlist_items?: Prisma.wishlist_itemsUncheckedUpdateManyWithoutCard_printingsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedUpdateManyWithoutCard_printingsNestedInput;
};
export type card_printingsCreateWithoutPrinting_finishesInput = {
    id?: string;
    source: string;
    source_key: string;
    collector_number: string;
    language_code?: string;
    printed_name?: string | null;
    printed_type_line?: string | null;
    printed_text?: string | null;
    rarity?: string | null;
    artist_name?: string | null;
    treatment?: string | null;
    frame_version?: string | null;
    border_color?: string | null;
    is_promo?: boolean;
    is_reprint?: boolean;
    is_digital?: boolean;
    released_at?: Date | string | null;
    image_small_uri?: string | null;
    image_normal_uri?: string | null;
    image_large_uri?: string | null;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
    updated_at?: Date | string;
    canonical_cards: Prisma.canonical_cardsCreateNestedOneWithoutCard_printingsInput;
    games: Prisma.gamesCreateNestedOneWithoutCard_printingsInput;
    card_sets: Prisma.card_setsCreateNestedOneWithoutCard_printingsInput;
    inventory_items?: Prisma.inventory_itemsCreateNestedManyWithoutCard_printingsInput;
    wishlist_items?: Prisma.wishlist_itemsCreateNestedManyWithoutCard_printingsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsCreateNestedManyWithoutCard_printingsInput;
};
export type card_printingsUncheckedCreateWithoutPrinting_finishesInput = {
    id?: string;
    game_id: string;
    canonical_card_id: string;
    card_set_id: string;
    source: string;
    source_key: string;
    collector_number: string;
    language_code?: string;
    printed_name?: string | null;
    printed_type_line?: string | null;
    printed_text?: string | null;
    rarity?: string | null;
    artist_name?: string | null;
    treatment?: string | null;
    frame_version?: string | null;
    border_color?: string | null;
    is_promo?: boolean;
    is_reprint?: boolean;
    is_digital?: boolean;
    released_at?: Date | string | null;
    image_small_uri?: string | null;
    image_normal_uri?: string | null;
    image_large_uri?: string | null;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_items?: Prisma.inventory_itemsUncheckedCreateNestedManyWithoutCard_printingsInput;
    wishlist_items?: Prisma.wishlist_itemsUncheckedCreateNestedManyWithoutCard_printingsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedCreateNestedManyWithoutCard_printingsInput;
};
export type card_printingsCreateOrConnectWithoutPrinting_finishesInput = {
    where: Prisma.card_printingsWhereUniqueInput;
    create: Prisma.XOR<Prisma.card_printingsCreateWithoutPrinting_finishesInput, Prisma.card_printingsUncheckedCreateWithoutPrinting_finishesInput>;
};
export type card_printingsUpsertWithoutPrinting_finishesInput = {
    update: Prisma.XOR<Prisma.card_printingsUpdateWithoutPrinting_finishesInput, Prisma.card_printingsUncheckedUpdateWithoutPrinting_finishesInput>;
    create: Prisma.XOR<Prisma.card_printingsCreateWithoutPrinting_finishesInput, Prisma.card_printingsUncheckedCreateWithoutPrinting_finishesInput>;
    where?: Prisma.card_printingsWhereInput;
};
export type card_printingsUpdateToOneWithWhereWithoutPrinting_finishesInput = {
    where?: Prisma.card_printingsWhereInput;
    data: Prisma.XOR<Prisma.card_printingsUpdateWithoutPrinting_finishesInput, Prisma.card_printingsUncheckedUpdateWithoutPrinting_finishesInput>;
};
export type card_printingsUpdateWithoutPrinting_finishesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    source_key?: Prisma.StringFieldUpdateOperationsInput | string;
    collector_number?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    printed_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    printed_type_line?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    printed_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rarity?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artist_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    treatment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    frame_version?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    border_color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_promo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_reprint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_digital?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    released_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    image_small_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_normal_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_large_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    canonical_cards?: Prisma.canonical_cardsUpdateOneRequiredWithoutCard_printingsNestedInput;
    games?: Prisma.gamesUpdateOneRequiredWithoutCard_printingsNestedInput;
    card_sets?: Prisma.card_setsUpdateOneRequiredWithoutCard_printingsNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateManyWithoutCard_printingsNestedInput;
    wishlist_items?: Prisma.wishlist_itemsUpdateManyWithoutCard_printingsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUpdateManyWithoutCard_printingsNestedInput;
};
export type card_printingsUncheckedUpdateWithoutPrinting_finishesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    canonical_card_id?: Prisma.StringFieldUpdateOperationsInput | string;
    card_set_id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    source_key?: Prisma.StringFieldUpdateOperationsInput | string;
    collector_number?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    printed_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    printed_type_line?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    printed_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rarity?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artist_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    treatment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    frame_version?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    border_color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_promo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_reprint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_digital?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    released_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    image_small_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_normal_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_large_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_items?: Prisma.inventory_itemsUncheckedUpdateManyWithoutCard_printingsNestedInput;
    wishlist_items?: Prisma.wishlist_itemsUncheckedUpdateManyWithoutCard_printingsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedUpdateManyWithoutCard_printingsNestedInput;
};
export type card_printingsCreateWithoutWishlist_itemsInput = {
    id?: string;
    source: string;
    source_key: string;
    collector_number: string;
    language_code?: string;
    printed_name?: string | null;
    printed_type_line?: string | null;
    printed_text?: string | null;
    rarity?: string | null;
    artist_name?: string | null;
    treatment?: string | null;
    frame_version?: string | null;
    border_color?: string | null;
    is_promo?: boolean;
    is_reprint?: boolean;
    is_digital?: boolean;
    released_at?: Date | string | null;
    image_small_uri?: string | null;
    image_normal_uri?: string | null;
    image_large_uri?: string | null;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
    updated_at?: Date | string;
    canonical_cards: Prisma.canonical_cardsCreateNestedOneWithoutCard_printingsInput;
    games: Prisma.gamesCreateNestedOneWithoutCard_printingsInput;
    card_sets: Prisma.card_setsCreateNestedOneWithoutCard_printingsInput;
    inventory_items?: Prisma.inventory_itemsCreateNestedManyWithoutCard_printingsInput;
    printing_finishes?: Prisma.printing_finishesCreateNestedManyWithoutCard_printingsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsCreateNestedManyWithoutCard_printingsInput;
};
export type card_printingsUncheckedCreateWithoutWishlist_itemsInput = {
    id?: string;
    game_id: string;
    canonical_card_id: string;
    card_set_id: string;
    source: string;
    source_key: string;
    collector_number: string;
    language_code?: string;
    printed_name?: string | null;
    printed_type_line?: string | null;
    printed_text?: string | null;
    rarity?: string | null;
    artist_name?: string | null;
    treatment?: string | null;
    frame_version?: string | null;
    border_color?: string | null;
    is_promo?: boolean;
    is_reprint?: boolean;
    is_digital?: boolean;
    released_at?: Date | string | null;
    image_small_uri?: string | null;
    image_normal_uri?: string | null;
    image_large_uri?: string | null;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_items?: Prisma.inventory_itemsUncheckedCreateNestedManyWithoutCard_printingsInput;
    printing_finishes?: Prisma.printing_finishesUncheckedCreateNestedManyWithoutCard_printingsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedCreateNestedManyWithoutCard_printingsInput;
};
export type card_printingsCreateOrConnectWithoutWishlist_itemsInput = {
    where: Prisma.card_printingsWhereUniqueInput;
    create: Prisma.XOR<Prisma.card_printingsCreateWithoutWishlist_itemsInput, Prisma.card_printingsUncheckedCreateWithoutWishlist_itemsInput>;
};
export type card_printingsUpsertWithoutWishlist_itemsInput = {
    update: Prisma.XOR<Prisma.card_printingsUpdateWithoutWishlist_itemsInput, Prisma.card_printingsUncheckedUpdateWithoutWishlist_itemsInput>;
    create: Prisma.XOR<Prisma.card_printingsCreateWithoutWishlist_itemsInput, Prisma.card_printingsUncheckedCreateWithoutWishlist_itemsInput>;
    where?: Prisma.card_printingsWhereInput;
};
export type card_printingsUpdateToOneWithWhereWithoutWishlist_itemsInput = {
    where?: Prisma.card_printingsWhereInput;
    data: Prisma.XOR<Prisma.card_printingsUpdateWithoutWishlist_itemsInput, Prisma.card_printingsUncheckedUpdateWithoutWishlist_itemsInput>;
};
export type card_printingsUpdateWithoutWishlist_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    source_key?: Prisma.StringFieldUpdateOperationsInput | string;
    collector_number?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    printed_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    printed_type_line?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    printed_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rarity?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artist_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    treatment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    frame_version?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    border_color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_promo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_reprint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_digital?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    released_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    image_small_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_normal_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_large_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    canonical_cards?: Prisma.canonical_cardsUpdateOneRequiredWithoutCard_printingsNestedInput;
    games?: Prisma.gamesUpdateOneRequiredWithoutCard_printingsNestedInput;
    card_sets?: Prisma.card_setsUpdateOneRequiredWithoutCard_printingsNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateManyWithoutCard_printingsNestedInput;
    printing_finishes?: Prisma.printing_finishesUpdateManyWithoutCard_printingsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUpdateManyWithoutCard_printingsNestedInput;
};
export type card_printingsUncheckedUpdateWithoutWishlist_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    canonical_card_id?: Prisma.StringFieldUpdateOperationsInput | string;
    card_set_id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    source_key?: Prisma.StringFieldUpdateOperationsInput | string;
    collector_number?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    printed_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    printed_type_line?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    printed_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rarity?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artist_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    treatment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    frame_version?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    border_color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_promo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_reprint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_digital?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    released_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    image_small_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_normal_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_large_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_items?: Prisma.inventory_itemsUncheckedUpdateManyWithoutCard_printingsNestedInput;
    printing_finishes?: Prisma.printing_finishesUncheckedUpdateManyWithoutCard_printingsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedUpdateManyWithoutCard_printingsNestedInput;
};
export type card_printingsCreateWithoutWishlist_offer_requested_itemsInput = {
    id?: string;
    source: string;
    source_key: string;
    collector_number: string;
    language_code?: string;
    printed_name?: string | null;
    printed_type_line?: string | null;
    printed_text?: string | null;
    rarity?: string | null;
    artist_name?: string | null;
    treatment?: string | null;
    frame_version?: string | null;
    border_color?: string | null;
    is_promo?: boolean;
    is_reprint?: boolean;
    is_digital?: boolean;
    released_at?: Date | string | null;
    image_small_uri?: string | null;
    image_normal_uri?: string | null;
    image_large_uri?: string | null;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
    updated_at?: Date | string;
    canonical_cards: Prisma.canonical_cardsCreateNestedOneWithoutCard_printingsInput;
    games: Prisma.gamesCreateNestedOneWithoutCard_printingsInput;
    card_sets: Prisma.card_setsCreateNestedOneWithoutCard_printingsInput;
    inventory_items?: Prisma.inventory_itemsCreateNestedManyWithoutCard_printingsInput;
    printing_finishes?: Prisma.printing_finishesCreateNestedManyWithoutCard_printingsInput;
    wishlist_items?: Prisma.wishlist_itemsCreateNestedManyWithoutCard_printingsInput;
};
export type card_printingsUncheckedCreateWithoutWishlist_offer_requested_itemsInput = {
    id?: string;
    game_id: string;
    canonical_card_id: string;
    card_set_id: string;
    source: string;
    source_key: string;
    collector_number: string;
    language_code?: string;
    printed_name?: string | null;
    printed_type_line?: string | null;
    printed_text?: string | null;
    rarity?: string | null;
    artist_name?: string | null;
    treatment?: string | null;
    frame_version?: string | null;
    border_color?: string | null;
    is_promo?: boolean;
    is_reprint?: boolean;
    is_digital?: boolean;
    released_at?: Date | string | null;
    image_small_uri?: string | null;
    image_normal_uri?: string | null;
    image_large_uri?: string | null;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_items?: Prisma.inventory_itemsUncheckedCreateNestedManyWithoutCard_printingsInput;
    printing_finishes?: Prisma.printing_finishesUncheckedCreateNestedManyWithoutCard_printingsInput;
    wishlist_items?: Prisma.wishlist_itemsUncheckedCreateNestedManyWithoutCard_printingsInput;
};
export type card_printingsCreateOrConnectWithoutWishlist_offer_requested_itemsInput = {
    where: Prisma.card_printingsWhereUniqueInput;
    create: Prisma.XOR<Prisma.card_printingsCreateWithoutWishlist_offer_requested_itemsInput, Prisma.card_printingsUncheckedCreateWithoutWishlist_offer_requested_itemsInput>;
};
export type card_printingsUpsertWithoutWishlist_offer_requested_itemsInput = {
    update: Prisma.XOR<Prisma.card_printingsUpdateWithoutWishlist_offer_requested_itemsInput, Prisma.card_printingsUncheckedUpdateWithoutWishlist_offer_requested_itemsInput>;
    create: Prisma.XOR<Prisma.card_printingsCreateWithoutWishlist_offer_requested_itemsInput, Prisma.card_printingsUncheckedCreateWithoutWishlist_offer_requested_itemsInput>;
    where?: Prisma.card_printingsWhereInput;
};
export type card_printingsUpdateToOneWithWhereWithoutWishlist_offer_requested_itemsInput = {
    where?: Prisma.card_printingsWhereInput;
    data: Prisma.XOR<Prisma.card_printingsUpdateWithoutWishlist_offer_requested_itemsInput, Prisma.card_printingsUncheckedUpdateWithoutWishlist_offer_requested_itemsInput>;
};
export type card_printingsUpdateWithoutWishlist_offer_requested_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    source_key?: Prisma.StringFieldUpdateOperationsInput | string;
    collector_number?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    printed_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    printed_type_line?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    printed_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rarity?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artist_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    treatment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    frame_version?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    border_color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_promo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_reprint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_digital?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    released_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    image_small_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_normal_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_large_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    canonical_cards?: Prisma.canonical_cardsUpdateOneRequiredWithoutCard_printingsNestedInput;
    games?: Prisma.gamesUpdateOneRequiredWithoutCard_printingsNestedInput;
    card_sets?: Prisma.card_setsUpdateOneRequiredWithoutCard_printingsNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateManyWithoutCard_printingsNestedInput;
    printing_finishes?: Prisma.printing_finishesUpdateManyWithoutCard_printingsNestedInput;
    wishlist_items?: Prisma.wishlist_itemsUpdateManyWithoutCard_printingsNestedInput;
};
export type card_printingsUncheckedUpdateWithoutWishlist_offer_requested_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    canonical_card_id?: Prisma.StringFieldUpdateOperationsInput | string;
    card_set_id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    source_key?: Prisma.StringFieldUpdateOperationsInput | string;
    collector_number?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    printed_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    printed_type_line?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    printed_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rarity?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artist_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    treatment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    frame_version?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    border_color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_promo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_reprint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_digital?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    released_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    image_small_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_normal_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_large_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_items?: Prisma.inventory_itemsUncheckedUpdateManyWithoutCard_printingsNestedInput;
    printing_finishes?: Prisma.printing_finishesUncheckedUpdateManyWithoutCard_printingsNestedInput;
    wishlist_items?: Prisma.wishlist_itemsUncheckedUpdateManyWithoutCard_printingsNestedInput;
};
export type card_printingsCreateManyCanonical_cardsInput = {
    id?: string;
    card_set_id: string;
    source: string;
    source_key: string;
    collector_number: string;
    language_code?: string;
    printed_name?: string | null;
    printed_type_line?: string | null;
    printed_text?: string | null;
    rarity?: string | null;
    artist_name?: string | null;
    treatment?: string | null;
    frame_version?: string | null;
    border_color?: string | null;
    is_promo?: boolean;
    is_reprint?: boolean;
    is_digital?: boolean;
    released_at?: Date | string | null;
    image_small_uri?: string | null;
    image_normal_uri?: string | null;
    image_large_uri?: string | null;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type card_printingsUpdateWithoutCanonical_cardsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    source_key?: Prisma.StringFieldUpdateOperationsInput | string;
    collector_number?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    printed_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    printed_type_line?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    printed_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rarity?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artist_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    treatment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    frame_version?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    border_color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_promo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_reprint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_digital?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    released_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    image_small_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_normal_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_large_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    games?: Prisma.gamesUpdateOneRequiredWithoutCard_printingsNestedInput;
    card_sets?: Prisma.card_setsUpdateOneRequiredWithoutCard_printingsNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateManyWithoutCard_printingsNestedInput;
    printing_finishes?: Prisma.printing_finishesUpdateManyWithoutCard_printingsNestedInput;
    wishlist_items?: Prisma.wishlist_itemsUpdateManyWithoutCard_printingsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUpdateManyWithoutCard_printingsNestedInput;
};
export type card_printingsUncheckedUpdateWithoutCanonical_cardsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    card_set_id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    source_key?: Prisma.StringFieldUpdateOperationsInput | string;
    collector_number?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    printed_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    printed_type_line?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    printed_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rarity?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artist_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    treatment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    frame_version?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    border_color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_promo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_reprint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_digital?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    released_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    image_small_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_normal_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_large_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_items?: Prisma.inventory_itemsUncheckedUpdateManyWithoutCard_printingsNestedInput;
    printing_finishes?: Prisma.printing_finishesUncheckedUpdateManyWithoutCard_printingsNestedInput;
    wishlist_items?: Prisma.wishlist_itemsUncheckedUpdateManyWithoutCard_printingsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedUpdateManyWithoutCard_printingsNestedInput;
};
export type card_printingsUncheckedUpdateManyWithoutCanonical_cardsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    card_set_id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    source_key?: Prisma.StringFieldUpdateOperationsInput | string;
    collector_number?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    printed_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    printed_type_line?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    printed_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rarity?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artist_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    treatment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    frame_version?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    border_color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_promo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_reprint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_digital?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    released_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    image_small_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_normal_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_large_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type card_printingsCreateManyCard_setsInput = {
    id?: string;
    canonical_card_id: string;
    source: string;
    source_key: string;
    collector_number: string;
    language_code?: string;
    printed_name?: string | null;
    printed_type_line?: string | null;
    printed_text?: string | null;
    rarity?: string | null;
    artist_name?: string | null;
    treatment?: string | null;
    frame_version?: string | null;
    border_color?: string | null;
    is_promo?: boolean;
    is_reprint?: boolean;
    is_digital?: boolean;
    released_at?: Date | string | null;
    image_small_uri?: string | null;
    image_normal_uri?: string | null;
    image_large_uri?: string | null;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type card_printingsUpdateWithoutCard_setsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    source_key?: Prisma.StringFieldUpdateOperationsInput | string;
    collector_number?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    printed_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    printed_type_line?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    printed_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rarity?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artist_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    treatment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    frame_version?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    border_color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_promo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_reprint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_digital?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    released_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    image_small_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_normal_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_large_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    canonical_cards?: Prisma.canonical_cardsUpdateOneRequiredWithoutCard_printingsNestedInput;
    games?: Prisma.gamesUpdateOneRequiredWithoutCard_printingsNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateManyWithoutCard_printingsNestedInput;
    printing_finishes?: Prisma.printing_finishesUpdateManyWithoutCard_printingsNestedInput;
    wishlist_items?: Prisma.wishlist_itemsUpdateManyWithoutCard_printingsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUpdateManyWithoutCard_printingsNestedInput;
};
export type card_printingsUncheckedUpdateWithoutCard_setsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    canonical_card_id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    source_key?: Prisma.StringFieldUpdateOperationsInput | string;
    collector_number?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    printed_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    printed_type_line?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    printed_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rarity?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artist_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    treatment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    frame_version?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    border_color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_promo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_reprint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_digital?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    released_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    image_small_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_normal_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_large_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_items?: Prisma.inventory_itemsUncheckedUpdateManyWithoutCard_printingsNestedInput;
    printing_finishes?: Prisma.printing_finishesUncheckedUpdateManyWithoutCard_printingsNestedInput;
    wishlist_items?: Prisma.wishlist_itemsUncheckedUpdateManyWithoutCard_printingsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedUpdateManyWithoutCard_printingsNestedInput;
};
export type card_printingsUncheckedUpdateManyWithoutCard_setsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    canonical_card_id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    source_key?: Prisma.StringFieldUpdateOperationsInput | string;
    collector_number?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    printed_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    printed_type_line?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    printed_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rarity?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artist_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    treatment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    frame_version?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    border_color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_promo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_reprint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_digital?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    released_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    image_small_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_normal_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_large_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type card_printingsCreateManyGamesInput = {
    id?: string;
    canonical_card_id: string;
    card_set_id: string;
    source: string;
    source_key: string;
    collector_number: string;
    language_code?: string;
    printed_name?: string | null;
    printed_type_line?: string | null;
    printed_text?: string | null;
    rarity?: string | null;
    artist_name?: string | null;
    treatment?: string | null;
    frame_version?: string | null;
    border_color?: string | null;
    is_promo?: boolean;
    is_reprint?: boolean;
    is_digital?: boolean;
    released_at?: Date | string | null;
    image_small_uri?: string | null;
    image_normal_uri?: string | null;
    image_large_uri?: string | null;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type card_printingsUpdateWithoutGamesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    source_key?: Prisma.StringFieldUpdateOperationsInput | string;
    collector_number?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    printed_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    printed_type_line?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    printed_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rarity?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artist_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    treatment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    frame_version?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    border_color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_promo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_reprint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_digital?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    released_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    image_small_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_normal_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_large_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    canonical_cards?: Prisma.canonical_cardsUpdateOneRequiredWithoutCard_printingsNestedInput;
    card_sets?: Prisma.card_setsUpdateOneRequiredWithoutCard_printingsNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateManyWithoutCard_printingsNestedInput;
    printing_finishes?: Prisma.printing_finishesUpdateManyWithoutCard_printingsNestedInput;
    wishlist_items?: Prisma.wishlist_itemsUpdateManyWithoutCard_printingsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUpdateManyWithoutCard_printingsNestedInput;
};
export type card_printingsUncheckedUpdateWithoutGamesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    canonical_card_id?: Prisma.StringFieldUpdateOperationsInput | string;
    card_set_id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    source_key?: Prisma.StringFieldUpdateOperationsInput | string;
    collector_number?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    printed_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    printed_type_line?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    printed_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rarity?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artist_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    treatment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    frame_version?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    border_color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_promo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_reprint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_digital?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    released_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    image_small_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_normal_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_large_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_items?: Prisma.inventory_itemsUncheckedUpdateManyWithoutCard_printingsNestedInput;
    printing_finishes?: Prisma.printing_finishesUncheckedUpdateManyWithoutCard_printingsNestedInput;
    wishlist_items?: Prisma.wishlist_itemsUncheckedUpdateManyWithoutCard_printingsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedUpdateManyWithoutCard_printingsNestedInput;
};
export type card_printingsUncheckedUpdateManyWithoutGamesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    canonical_card_id?: Prisma.StringFieldUpdateOperationsInput | string;
    card_set_id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    source_key?: Prisma.StringFieldUpdateOperationsInput | string;
    collector_number?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    printed_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    printed_type_line?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    printed_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rarity?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artist_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    treatment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    frame_version?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    border_color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_promo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_reprint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_digital?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    released_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    image_small_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_normal_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_large_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type Card_printingsCountOutputType
 */
export type Card_printingsCountOutputType = {
    inventory_items: number;
    printing_finishes: number;
    wishlist_items: number;
    wishlist_offer_requested_items: number;
};
export type Card_printingsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    inventory_items?: boolean | Card_printingsCountOutputTypeCountInventory_itemsArgs;
    printing_finishes?: boolean | Card_printingsCountOutputTypeCountPrinting_finishesArgs;
    wishlist_items?: boolean | Card_printingsCountOutputTypeCountWishlist_itemsArgs;
    wishlist_offer_requested_items?: boolean | Card_printingsCountOutputTypeCountWishlist_offer_requested_itemsArgs;
};
/**
 * Card_printingsCountOutputType without action
 */
export type Card_printingsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card_printingsCountOutputType
     */
    select?: Prisma.Card_printingsCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * Card_printingsCountOutputType without action
 */
export type Card_printingsCountOutputTypeCountInventory_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.inventory_itemsWhereInput;
};
/**
 * Card_printingsCountOutputType without action
 */
export type Card_printingsCountOutputTypeCountPrinting_finishesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.printing_finishesWhereInput;
};
/**
 * Card_printingsCountOutputType without action
 */
export type Card_printingsCountOutputTypeCountWishlist_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.wishlist_itemsWhereInput;
};
/**
 * Card_printingsCountOutputType without action
 */
export type Card_printingsCountOutputTypeCountWishlist_offer_requested_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.wishlist_offer_requested_itemsWhereInput;
};
export type card_printingsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    game_id?: boolean;
    canonical_card_id?: boolean;
    card_set_id?: boolean;
    source?: boolean;
    source_key?: boolean;
    collector_number?: boolean;
    language_code?: boolean;
    printed_name?: boolean;
    printed_type_line?: boolean;
    printed_text?: boolean;
    rarity?: boolean;
    artist_name?: boolean;
    treatment?: boolean;
    frame_version?: boolean;
    border_color?: boolean;
    is_promo?: boolean;
    is_reprint?: boolean;
    is_digital?: boolean;
    released_at?: boolean;
    image_small_uri?: boolean;
    image_normal_uri?: boolean;
    image_large_uri?: boolean;
    raw_data?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    canonical_cards?: boolean | Prisma.canonical_cardsDefaultArgs<ExtArgs>;
    games?: boolean | Prisma.gamesDefaultArgs<ExtArgs>;
    card_sets?: boolean | Prisma.card_setsDefaultArgs<ExtArgs>;
    inventory_items?: boolean | Prisma.card_printings$inventory_itemsArgs<ExtArgs>;
    printing_finishes?: boolean | Prisma.card_printings$printing_finishesArgs<ExtArgs>;
    wishlist_items?: boolean | Prisma.card_printings$wishlist_itemsArgs<ExtArgs>;
    wishlist_offer_requested_items?: boolean | Prisma.card_printings$wishlist_offer_requested_itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.Card_printingsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["card_printings"]>;
export type card_printingsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    game_id?: boolean;
    canonical_card_id?: boolean;
    card_set_id?: boolean;
    source?: boolean;
    source_key?: boolean;
    collector_number?: boolean;
    language_code?: boolean;
    printed_name?: boolean;
    printed_type_line?: boolean;
    printed_text?: boolean;
    rarity?: boolean;
    artist_name?: boolean;
    treatment?: boolean;
    frame_version?: boolean;
    border_color?: boolean;
    is_promo?: boolean;
    is_reprint?: boolean;
    is_digital?: boolean;
    released_at?: boolean;
    image_small_uri?: boolean;
    image_normal_uri?: boolean;
    image_large_uri?: boolean;
    raw_data?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    canonical_cards?: boolean | Prisma.canonical_cardsDefaultArgs<ExtArgs>;
    games?: boolean | Prisma.gamesDefaultArgs<ExtArgs>;
    card_sets?: boolean | Prisma.card_setsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["card_printings"]>;
export type card_printingsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    game_id?: boolean;
    canonical_card_id?: boolean;
    card_set_id?: boolean;
    source?: boolean;
    source_key?: boolean;
    collector_number?: boolean;
    language_code?: boolean;
    printed_name?: boolean;
    printed_type_line?: boolean;
    printed_text?: boolean;
    rarity?: boolean;
    artist_name?: boolean;
    treatment?: boolean;
    frame_version?: boolean;
    border_color?: boolean;
    is_promo?: boolean;
    is_reprint?: boolean;
    is_digital?: boolean;
    released_at?: boolean;
    image_small_uri?: boolean;
    image_normal_uri?: boolean;
    image_large_uri?: boolean;
    raw_data?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    canonical_cards?: boolean | Prisma.canonical_cardsDefaultArgs<ExtArgs>;
    games?: boolean | Prisma.gamesDefaultArgs<ExtArgs>;
    card_sets?: boolean | Prisma.card_setsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["card_printings"]>;
export type card_printingsSelectScalar = {
    id?: boolean;
    game_id?: boolean;
    canonical_card_id?: boolean;
    card_set_id?: boolean;
    source?: boolean;
    source_key?: boolean;
    collector_number?: boolean;
    language_code?: boolean;
    printed_name?: boolean;
    printed_type_line?: boolean;
    printed_text?: boolean;
    rarity?: boolean;
    artist_name?: boolean;
    treatment?: boolean;
    frame_version?: boolean;
    border_color?: boolean;
    is_promo?: boolean;
    is_reprint?: boolean;
    is_digital?: boolean;
    released_at?: boolean;
    image_small_uri?: boolean;
    image_normal_uri?: boolean;
    image_large_uri?: boolean;
    raw_data?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type card_printingsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "game_id" | "canonical_card_id" | "card_set_id" | "source" | "source_key" | "collector_number" | "language_code" | "printed_name" | "printed_type_line" | "printed_text" | "rarity" | "artist_name" | "treatment" | "frame_version" | "border_color" | "is_promo" | "is_reprint" | "is_digital" | "released_at" | "image_small_uri" | "image_normal_uri" | "image_large_uri" | "raw_data" | "created_at" | "updated_at", ExtArgs["result"]["card_printings"]>;
export type card_printingsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    canonical_cards?: boolean | Prisma.canonical_cardsDefaultArgs<ExtArgs>;
    games?: boolean | Prisma.gamesDefaultArgs<ExtArgs>;
    card_sets?: boolean | Prisma.card_setsDefaultArgs<ExtArgs>;
    inventory_items?: boolean | Prisma.card_printings$inventory_itemsArgs<ExtArgs>;
    printing_finishes?: boolean | Prisma.card_printings$printing_finishesArgs<ExtArgs>;
    wishlist_items?: boolean | Prisma.card_printings$wishlist_itemsArgs<ExtArgs>;
    wishlist_offer_requested_items?: boolean | Prisma.card_printings$wishlist_offer_requested_itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.Card_printingsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type card_printingsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    canonical_cards?: boolean | Prisma.canonical_cardsDefaultArgs<ExtArgs>;
    games?: boolean | Prisma.gamesDefaultArgs<ExtArgs>;
    card_sets?: boolean | Prisma.card_setsDefaultArgs<ExtArgs>;
};
export type card_printingsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    canonical_cards?: boolean | Prisma.canonical_cardsDefaultArgs<ExtArgs>;
    games?: boolean | Prisma.gamesDefaultArgs<ExtArgs>;
    card_sets?: boolean | Prisma.card_setsDefaultArgs<ExtArgs>;
};
export type $card_printingsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "card_printings";
    objects: {
        canonical_cards: Prisma.$canonical_cardsPayload<ExtArgs>;
        games: Prisma.$gamesPayload<ExtArgs>;
        card_sets: Prisma.$card_setsPayload<ExtArgs>;
        inventory_items: Prisma.$inventory_itemsPayload<ExtArgs>[];
        printing_finishes: Prisma.$printing_finishesPayload<ExtArgs>[];
        wishlist_items: Prisma.$wishlist_itemsPayload<ExtArgs>[];
        wishlist_offer_requested_items: Prisma.$wishlist_offer_requested_itemsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        game_id: string;
        canonical_card_id: string;
        card_set_id: string;
        source: string;
        source_key: string;
        collector_number: string;
        language_code: string;
        printed_name: string | null;
        printed_type_line: string | null;
        printed_text: string | null;
        rarity: string | null;
        artist_name: string | null;
        treatment: string | null;
        frame_version: string | null;
        border_color: string | null;
        is_promo: boolean;
        is_reprint: boolean;
        is_digital: boolean;
        released_at: Date | null;
        image_small_uri: string | null;
        image_normal_uri: string | null;
        image_large_uri: string | null;
        raw_data: runtime.JsonValue | null;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["card_printings"]>;
    composites: {};
};
export type card_printingsGetPayload<S extends boolean | null | undefined | card_printingsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$card_printingsPayload, S>;
export type card_printingsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<card_printingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Card_printingsCountAggregateInputType | true;
};
export interface card_printingsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['card_printings'];
        meta: {
            name: 'card_printings';
        };
    };
    /**
     * Find zero or one Card_printings that matches the filter.
     * @param {card_printingsFindUniqueArgs} args - Arguments to find a Card_printings
     * @example
     * // Get one Card_printings
     * const card_printings = await prisma.card_printings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends card_printingsFindUniqueArgs>(args: Prisma.SelectSubset<T, card_printingsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__card_printingsClient<runtime.Types.Result.GetResult<Prisma.$card_printingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Card_printings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {card_printingsFindUniqueOrThrowArgs} args - Arguments to find a Card_printings
     * @example
     * // Get one Card_printings
     * const card_printings = await prisma.card_printings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends card_printingsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, card_printingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__card_printingsClient<runtime.Types.Result.GetResult<Prisma.$card_printingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Card_printings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {card_printingsFindFirstArgs} args - Arguments to find a Card_printings
     * @example
     * // Get one Card_printings
     * const card_printings = await prisma.card_printings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends card_printingsFindFirstArgs>(args?: Prisma.SelectSubset<T, card_printingsFindFirstArgs<ExtArgs>>): Prisma.Prisma__card_printingsClient<runtime.Types.Result.GetResult<Prisma.$card_printingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Card_printings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {card_printingsFindFirstOrThrowArgs} args - Arguments to find a Card_printings
     * @example
     * // Get one Card_printings
     * const card_printings = await prisma.card_printings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends card_printingsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, card_printingsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__card_printingsClient<runtime.Types.Result.GetResult<Prisma.$card_printingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Card_printings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {card_printingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Card_printings
     * const card_printings = await prisma.card_printings.findMany()
     *
     * // Get first 10 Card_printings
     * const card_printings = await prisma.card_printings.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const card_printingsWithIdOnly = await prisma.card_printings.findMany({ select: { id: true } })
     *
     */
    findMany<T extends card_printingsFindManyArgs>(args?: Prisma.SelectSubset<T, card_printingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$card_printingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Card_printings.
     * @param {card_printingsCreateArgs} args - Arguments to create a Card_printings.
     * @example
     * // Create one Card_printings
     * const Card_printings = await prisma.card_printings.create({
     *   data: {
     *     // ... data to create a Card_printings
     *   }
     * })
     *
     */
    create<T extends card_printingsCreateArgs>(args: Prisma.SelectSubset<T, card_printingsCreateArgs<ExtArgs>>): Prisma.Prisma__card_printingsClient<runtime.Types.Result.GetResult<Prisma.$card_printingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Card_printings.
     * @param {card_printingsCreateManyArgs} args - Arguments to create many Card_printings.
     * @example
     * // Create many Card_printings
     * const card_printings = await prisma.card_printings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends card_printingsCreateManyArgs>(args?: Prisma.SelectSubset<T, card_printingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Card_printings and returns the data saved in the database.
     * @param {card_printingsCreateManyAndReturnArgs} args - Arguments to create many Card_printings.
     * @example
     * // Create many Card_printings
     * const card_printings = await prisma.card_printings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Card_printings and only return the `id`
     * const card_printingsWithIdOnly = await prisma.card_printings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends card_printingsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, card_printingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$card_printingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Card_printings.
     * @param {card_printingsDeleteArgs} args - Arguments to delete one Card_printings.
     * @example
     * // Delete one Card_printings
     * const Card_printings = await prisma.card_printings.delete({
     *   where: {
     *     // ... filter to delete one Card_printings
     *   }
     * })
     *
     */
    delete<T extends card_printingsDeleteArgs>(args: Prisma.SelectSubset<T, card_printingsDeleteArgs<ExtArgs>>): Prisma.Prisma__card_printingsClient<runtime.Types.Result.GetResult<Prisma.$card_printingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Card_printings.
     * @param {card_printingsUpdateArgs} args - Arguments to update one Card_printings.
     * @example
     * // Update one Card_printings
     * const card_printings = await prisma.card_printings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends card_printingsUpdateArgs>(args: Prisma.SelectSubset<T, card_printingsUpdateArgs<ExtArgs>>): Prisma.Prisma__card_printingsClient<runtime.Types.Result.GetResult<Prisma.$card_printingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Card_printings.
     * @param {card_printingsDeleteManyArgs} args - Arguments to filter Card_printings to delete.
     * @example
     * // Delete a few Card_printings
     * const { count } = await prisma.card_printings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends card_printingsDeleteManyArgs>(args?: Prisma.SelectSubset<T, card_printingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Card_printings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {card_printingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Card_printings
     * const card_printings = await prisma.card_printings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends card_printingsUpdateManyArgs>(args: Prisma.SelectSubset<T, card_printingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Card_printings and returns the data updated in the database.
     * @param {card_printingsUpdateManyAndReturnArgs} args - Arguments to update many Card_printings.
     * @example
     * // Update many Card_printings
     * const card_printings = await prisma.card_printings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Card_printings and only return the `id`
     * const card_printingsWithIdOnly = await prisma.card_printings.updateManyAndReturn({
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
    updateManyAndReturn<T extends card_printingsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, card_printingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$card_printingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Card_printings.
     * @param {card_printingsUpsertArgs} args - Arguments to update or create a Card_printings.
     * @example
     * // Update or create a Card_printings
     * const card_printings = await prisma.card_printings.upsert({
     *   create: {
     *     // ... data to create a Card_printings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Card_printings we want to update
     *   }
     * })
     */
    upsert<T extends card_printingsUpsertArgs>(args: Prisma.SelectSubset<T, card_printingsUpsertArgs<ExtArgs>>): Prisma.Prisma__card_printingsClient<runtime.Types.Result.GetResult<Prisma.$card_printingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Card_printings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {card_printingsCountArgs} args - Arguments to filter Card_printings to count.
     * @example
     * // Count the number of Card_printings
     * const count = await prisma.card_printings.count({
     *   where: {
     *     // ... the filter for the Card_printings we want to count
     *   }
     * })
    **/
    count<T extends card_printingsCountArgs>(args?: Prisma.Subset<T, card_printingsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Card_printingsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Card_printings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Card_printingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Card_printingsAggregateArgs>(args: Prisma.Subset<T, Card_printingsAggregateArgs>): Prisma.PrismaPromise<GetCard_printingsAggregateType<T>>;
    /**
     * Group by Card_printings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {card_printingsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends card_printingsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: card_printingsGroupByArgs['orderBy'];
    } : {
        orderBy?: card_printingsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, card_printingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCard_printingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the card_printings model
     */
    readonly fields: card_printingsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for card_printings.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__card_printingsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    canonical_cards<T extends Prisma.canonical_cardsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.canonical_cardsDefaultArgs<ExtArgs>>): Prisma.Prisma__canonical_cardsClient<runtime.Types.Result.GetResult<Prisma.$canonical_cardsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    games<T extends Prisma.gamesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.gamesDefaultArgs<ExtArgs>>): Prisma.Prisma__gamesClient<runtime.Types.Result.GetResult<Prisma.$gamesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    card_sets<T extends Prisma.card_setsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.card_setsDefaultArgs<ExtArgs>>): Prisma.Prisma__card_setsClient<runtime.Types.Result.GetResult<Prisma.$card_setsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    inventory_items<T extends Prisma.card_printings$inventory_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.card_printings$inventory_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$inventory_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    printing_finishes<T extends Prisma.card_printings$printing_finishesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.card_printings$printing_finishesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$printing_finishesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    wishlist_items<T extends Prisma.card_printings$wishlist_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.card_printings$wishlist_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$wishlist_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    wishlist_offer_requested_items<T extends Prisma.card_printings$wishlist_offer_requested_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.card_printings$wishlist_offer_requested_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$wishlist_offer_requested_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the card_printings model
 */
export interface card_printingsFieldRefs {
    readonly id: Prisma.FieldRef<"card_printings", 'String'>;
    readonly game_id: Prisma.FieldRef<"card_printings", 'String'>;
    readonly canonical_card_id: Prisma.FieldRef<"card_printings", 'String'>;
    readonly card_set_id: Prisma.FieldRef<"card_printings", 'String'>;
    readonly source: Prisma.FieldRef<"card_printings", 'String'>;
    readonly source_key: Prisma.FieldRef<"card_printings", 'String'>;
    readonly collector_number: Prisma.FieldRef<"card_printings", 'String'>;
    readonly language_code: Prisma.FieldRef<"card_printings", 'String'>;
    readonly printed_name: Prisma.FieldRef<"card_printings", 'String'>;
    readonly printed_type_line: Prisma.FieldRef<"card_printings", 'String'>;
    readonly printed_text: Prisma.FieldRef<"card_printings", 'String'>;
    readonly rarity: Prisma.FieldRef<"card_printings", 'String'>;
    readonly artist_name: Prisma.FieldRef<"card_printings", 'String'>;
    readonly treatment: Prisma.FieldRef<"card_printings", 'String'>;
    readonly frame_version: Prisma.FieldRef<"card_printings", 'String'>;
    readonly border_color: Prisma.FieldRef<"card_printings", 'String'>;
    readonly is_promo: Prisma.FieldRef<"card_printings", 'Boolean'>;
    readonly is_reprint: Prisma.FieldRef<"card_printings", 'Boolean'>;
    readonly is_digital: Prisma.FieldRef<"card_printings", 'Boolean'>;
    readonly released_at: Prisma.FieldRef<"card_printings", 'DateTime'>;
    readonly image_small_uri: Prisma.FieldRef<"card_printings", 'String'>;
    readonly image_normal_uri: Prisma.FieldRef<"card_printings", 'String'>;
    readonly image_large_uri: Prisma.FieldRef<"card_printings", 'String'>;
    readonly raw_data: Prisma.FieldRef<"card_printings", 'Json'>;
    readonly created_at: Prisma.FieldRef<"card_printings", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"card_printings", 'DateTime'>;
}
/**
 * card_printings findUnique
 */
export type card_printingsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which card_printings to fetch.
     */
    where: Prisma.card_printingsWhereUniqueInput;
};
/**
 * card_printings findUniqueOrThrow
 */
export type card_printingsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which card_printings to fetch.
     */
    where: Prisma.card_printingsWhereUniqueInput;
};
/**
 * card_printings findFirst
 */
export type card_printingsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which card_printings to fetch.
     */
    where?: Prisma.card_printingsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of card_printings to fetch.
     */
    orderBy?: Prisma.card_printingsOrderByWithRelationInput | Prisma.card_printingsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for card_printings.
     */
    cursor?: Prisma.card_printingsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` card_printings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` card_printings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of card_printings.
     */
    distinct?: Prisma.Card_printingsScalarFieldEnum | Prisma.Card_printingsScalarFieldEnum[];
};
/**
 * card_printings findFirstOrThrow
 */
export type card_printingsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which card_printings to fetch.
     */
    where?: Prisma.card_printingsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of card_printings to fetch.
     */
    orderBy?: Prisma.card_printingsOrderByWithRelationInput | Prisma.card_printingsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for card_printings.
     */
    cursor?: Prisma.card_printingsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` card_printings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` card_printings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of card_printings.
     */
    distinct?: Prisma.Card_printingsScalarFieldEnum | Prisma.Card_printingsScalarFieldEnum[];
};
/**
 * card_printings findMany
 */
export type card_printingsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which card_printings to fetch.
     */
    where?: Prisma.card_printingsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of card_printings to fetch.
     */
    orderBy?: Prisma.card_printingsOrderByWithRelationInput | Prisma.card_printingsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing card_printings.
     */
    cursor?: Prisma.card_printingsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` card_printings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` card_printings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of card_printings.
     */
    distinct?: Prisma.Card_printingsScalarFieldEnum | Prisma.Card_printingsScalarFieldEnum[];
};
/**
 * card_printings create
 */
export type card_printingsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a card_printings.
     */
    data: Prisma.XOR<Prisma.card_printingsCreateInput, Prisma.card_printingsUncheckedCreateInput>;
};
/**
 * card_printings createMany
 */
export type card_printingsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many card_printings.
     */
    data: Prisma.card_printingsCreateManyInput | Prisma.card_printingsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * card_printings createManyAndReturn
 */
export type card_printingsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the card_printings
     */
    select?: Prisma.card_printingsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the card_printings
     */
    omit?: Prisma.card_printingsOmit<ExtArgs> | null;
    /**
     * The data used to create many card_printings.
     */
    data: Prisma.card_printingsCreateManyInput | Prisma.card_printingsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.card_printingsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * card_printings update
 */
export type card_printingsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a card_printings.
     */
    data: Prisma.XOR<Prisma.card_printingsUpdateInput, Prisma.card_printingsUncheckedUpdateInput>;
    /**
     * Choose, which card_printings to update.
     */
    where: Prisma.card_printingsWhereUniqueInput;
};
/**
 * card_printings updateMany
 */
export type card_printingsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update card_printings.
     */
    data: Prisma.XOR<Prisma.card_printingsUpdateManyMutationInput, Prisma.card_printingsUncheckedUpdateManyInput>;
    /**
     * Filter which card_printings to update
     */
    where?: Prisma.card_printingsWhereInput;
    /**
     * Limit how many card_printings to update.
     */
    limit?: number;
};
/**
 * card_printings updateManyAndReturn
 */
export type card_printingsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the card_printings
     */
    select?: Prisma.card_printingsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the card_printings
     */
    omit?: Prisma.card_printingsOmit<ExtArgs> | null;
    /**
     * The data used to update card_printings.
     */
    data: Prisma.XOR<Prisma.card_printingsUpdateManyMutationInput, Prisma.card_printingsUncheckedUpdateManyInput>;
    /**
     * Filter which card_printings to update
     */
    where?: Prisma.card_printingsWhereInput;
    /**
     * Limit how many card_printings to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.card_printingsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * card_printings upsert
 */
export type card_printingsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the card_printings to update in case it exists.
     */
    where: Prisma.card_printingsWhereUniqueInput;
    /**
     * In case the card_printings found by the `where` argument doesn't exist, create a new card_printings with this data.
     */
    create: Prisma.XOR<Prisma.card_printingsCreateInput, Prisma.card_printingsUncheckedCreateInput>;
    /**
     * In case the card_printings was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.card_printingsUpdateInput, Prisma.card_printingsUncheckedUpdateInput>;
};
/**
 * card_printings delete
 */
export type card_printingsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which card_printings to delete.
     */
    where: Prisma.card_printingsWhereUniqueInput;
};
/**
 * card_printings deleteMany
 */
export type card_printingsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which card_printings to delete
     */
    where?: Prisma.card_printingsWhereInput;
    /**
     * Limit how many card_printings to delete.
     */
    limit?: number;
};
/**
 * card_printings.inventory_items
 */
export type card_printings$inventory_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * card_printings.printing_finishes
 */
export type card_printings$printing_finishesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the printing_finishes
     */
    select?: Prisma.printing_finishesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the printing_finishes
     */
    omit?: Prisma.printing_finishesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.printing_finishesInclude<ExtArgs> | null;
    where?: Prisma.printing_finishesWhereInput;
    orderBy?: Prisma.printing_finishesOrderByWithRelationInput | Prisma.printing_finishesOrderByWithRelationInput[];
    cursor?: Prisma.printing_finishesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Printing_finishesScalarFieldEnum | Prisma.Printing_finishesScalarFieldEnum[];
};
/**
 * card_printings.wishlist_items
 */
export type card_printings$wishlist_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * card_printings.wishlist_offer_requested_items
 */
export type card_printings$wishlist_offer_requested_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * card_printings without action
 */
export type card_printingsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
