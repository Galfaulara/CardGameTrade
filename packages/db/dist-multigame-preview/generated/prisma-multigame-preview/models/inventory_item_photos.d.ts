import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model inventory_item_photos
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type inventory_item_photosModel = runtime.Types.Result.DefaultSelection<Prisma.$inventory_item_photosPayload>;
export type AggregateInventory_item_photos = {
    _count: Inventory_item_photosCountAggregateOutputType | null;
    _avg: Inventory_item_photosAvgAggregateOutputType | null;
    _sum: Inventory_item_photosSumAggregateOutputType | null;
    _min: Inventory_item_photosMinAggregateOutputType | null;
    _max: Inventory_item_photosMaxAggregateOutputType | null;
};
export type Inventory_item_photosAvgAggregateOutputType = {
    sort_order: number | null;
};
export type Inventory_item_photosSumAggregateOutputType = {
    sort_order: number | null;
};
export type Inventory_item_photosMinAggregateOutputType = {
    id: string | null;
    inventory_item_id: string | null;
    storage_provider: string | null;
    storage_key: string | null;
    public_url: string | null;
    sort_order: number | null;
    is_primary: boolean | null;
    created_at: Date | null;
};
export type Inventory_item_photosMaxAggregateOutputType = {
    id: string | null;
    inventory_item_id: string | null;
    storage_provider: string | null;
    storage_key: string | null;
    public_url: string | null;
    sort_order: number | null;
    is_primary: boolean | null;
    created_at: Date | null;
};
export type Inventory_item_photosCountAggregateOutputType = {
    id: number;
    inventory_item_id: number;
    storage_provider: number;
    storage_key: number;
    public_url: number;
    sort_order: number;
    is_primary: number;
    created_at: number;
    _all: number;
};
export type Inventory_item_photosAvgAggregateInputType = {
    sort_order?: true;
};
export type Inventory_item_photosSumAggregateInputType = {
    sort_order?: true;
};
export type Inventory_item_photosMinAggregateInputType = {
    id?: true;
    inventory_item_id?: true;
    storage_provider?: true;
    storage_key?: true;
    public_url?: true;
    sort_order?: true;
    is_primary?: true;
    created_at?: true;
};
export type Inventory_item_photosMaxAggregateInputType = {
    id?: true;
    inventory_item_id?: true;
    storage_provider?: true;
    storage_key?: true;
    public_url?: true;
    sort_order?: true;
    is_primary?: true;
    created_at?: true;
};
export type Inventory_item_photosCountAggregateInputType = {
    id?: true;
    inventory_item_id?: true;
    storage_provider?: true;
    storage_key?: true;
    public_url?: true;
    sort_order?: true;
    is_primary?: true;
    created_at?: true;
    _all?: true;
};
export type Inventory_item_photosAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which inventory_item_photos to aggregate.
     */
    where?: Prisma.inventory_item_photosWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of inventory_item_photos to fetch.
     */
    orderBy?: Prisma.inventory_item_photosOrderByWithRelationInput | Prisma.inventory_item_photosOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.inventory_item_photosWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` inventory_item_photos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` inventory_item_photos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned inventory_item_photos
    **/
    _count?: true | Inventory_item_photosCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Inventory_item_photosAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Inventory_item_photosSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Inventory_item_photosMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Inventory_item_photosMaxAggregateInputType;
};
export type GetInventory_item_photosAggregateType<T extends Inventory_item_photosAggregateArgs> = {
    [P in keyof T & keyof AggregateInventory_item_photos]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInventory_item_photos[P]> : Prisma.GetScalarType<T[P], AggregateInventory_item_photos[P]>;
};
export type inventory_item_photosGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.inventory_item_photosWhereInput;
    orderBy?: Prisma.inventory_item_photosOrderByWithAggregationInput | Prisma.inventory_item_photosOrderByWithAggregationInput[];
    by: Prisma.Inventory_item_photosScalarFieldEnum[] | Prisma.Inventory_item_photosScalarFieldEnum;
    having?: Prisma.inventory_item_photosScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Inventory_item_photosCountAggregateInputType | true;
    _avg?: Inventory_item_photosAvgAggregateInputType;
    _sum?: Inventory_item_photosSumAggregateInputType;
    _min?: Inventory_item_photosMinAggregateInputType;
    _max?: Inventory_item_photosMaxAggregateInputType;
};
export type Inventory_item_photosGroupByOutputType = {
    id: string;
    inventory_item_id: string;
    storage_provider: string;
    storage_key: string;
    public_url: string | null;
    sort_order: number;
    is_primary: boolean;
    created_at: Date;
    _count: Inventory_item_photosCountAggregateOutputType | null;
    _avg: Inventory_item_photosAvgAggregateOutputType | null;
    _sum: Inventory_item_photosSumAggregateOutputType | null;
    _min: Inventory_item_photosMinAggregateOutputType | null;
    _max: Inventory_item_photosMaxAggregateOutputType | null;
};
export type GetInventory_item_photosGroupByPayload<T extends inventory_item_photosGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Inventory_item_photosGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Inventory_item_photosGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Inventory_item_photosGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Inventory_item_photosGroupByOutputType[P]>;
}>>;
export type inventory_item_photosWhereInput = {
    AND?: Prisma.inventory_item_photosWhereInput | Prisma.inventory_item_photosWhereInput[];
    OR?: Prisma.inventory_item_photosWhereInput[];
    NOT?: Prisma.inventory_item_photosWhereInput | Prisma.inventory_item_photosWhereInput[];
    id?: Prisma.UuidFilter<"inventory_item_photos"> | string;
    inventory_item_id?: Prisma.UuidFilter<"inventory_item_photos"> | string;
    storage_provider?: Prisma.StringFilter<"inventory_item_photos"> | string;
    storage_key?: Prisma.StringFilter<"inventory_item_photos"> | string;
    public_url?: Prisma.StringNullableFilter<"inventory_item_photos"> | string | null;
    sort_order?: Prisma.IntFilter<"inventory_item_photos"> | number;
    is_primary?: Prisma.BoolFilter<"inventory_item_photos"> | boolean;
    created_at?: Prisma.DateTimeFilter<"inventory_item_photos"> | Date | string;
    inventory_items?: Prisma.XOR<Prisma.Inventory_itemsScalarRelationFilter, Prisma.inventory_itemsWhereInput>;
};
export type inventory_item_photosOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    inventory_item_id?: Prisma.SortOrder;
    storage_provider?: Prisma.SortOrder;
    storage_key?: Prisma.SortOrder;
    public_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
    is_primary?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    inventory_items?: Prisma.inventory_itemsOrderByWithRelationInput;
};
export type inventory_item_photosWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    inventory_item_id?: string;
    inventory_item_id_storage_key?: Prisma.inventory_item_photosInventory_item_idStorage_keyCompoundUniqueInput;
    AND?: Prisma.inventory_item_photosWhereInput | Prisma.inventory_item_photosWhereInput[];
    OR?: Prisma.inventory_item_photosWhereInput[];
    NOT?: Prisma.inventory_item_photosWhereInput | Prisma.inventory_item_photosWhereInput[];
    storage_provider?: Prisma.StringFilter<"inventory_item_photos"> | string;
    storage_key?: Prisma.StringFilter<"inventory_item_photos"> | string;
    public_url?: Prisma.StringNullableFilter<"inventory_item_photos"> | string | null;
    sort_order?: Prisma.IntFilter<"inventory_item_photos"> | number;
    is_primary?: Prisma.BoolFilter<"inventory_item_photos"> | boolean;
    created_at?: Prisma.DateTimeFilter<"inventory_item_photos"> | Date | string;
    inventory_items?: Prisma.XOR<Prisma.Inventory_itemsScalarRelationFilter, Prisma.inventory_itemsWhereInput>;
}, "id" | "inventory_item_id" | "inventory_item_id_storage_key">;
export type inventory_item_photosOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    inventory_item_id?: Prisma.SortOrder;
    storage_provider?: Prisma.SortOrder;
    storage_key?: Prisma.SortOrder;
    public_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
    is_primary?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.inventory_item_photosCountOrderByAggregateInput;
    _avg?: Prisma.inventory_item_photosAvgOrderByAggregateInput;
    _max?: Prisma.inventory_item_photosMaxOrderByAggregateInput;
    _min?: Prisma.inventory_item_photosMinOrderByAggregateInput;
    _sum?: Prisma.inventory_item_photosSumOrderByAggregateInput;
};
export type inventory_item_photosScalarWhereWithAggregatesInput = {
    AND?: Prisma.inventory_item_photosScalarWhereWithAggregatesInput | Prisma.inventory_item_photosScalarWhereWithAggregatesInput[];
    OR?: Prisma.inventory_item_photosScalarWhereWithAggregatesInput[];
    NOT?: Prisma.inventory_item_photosScalarWhereWithAggregatesInput | Prisma.inventory_item_photosScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"inventory_item_photos"> | string;
    inventory_item_id?: Prisma.UuidWithAggregatesFilter<"inventory_item_photos"> | string;
    storage_provider?: Prisma.StringWithAggregatesFilter<"inventory_item_photos"> | string;
    storage_key?: Prisma.StringWithAggregatesFilter<"inventory_item_photos"> | string;
    public_url?: Prisma.StringNullableWithAggregatesFilter<"inventory_item_photos"> | string | null;
    sort_order?: Prisma.IntWithAggregatesFilter<"inventory_item_photos"> | number;
    is_primary?: Prisma.BoolWithAggregatesFilter<"inventory_item_photos"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"inventory_item_photos"> | Date | string;
};
export type inventory_item_photosCreateInput = {
    id?: string;
    storage_provider?: string;
    storage_key: string;
    public_url?: string | null;
    sort_order?: number;
    is_primary?: boolean;
    created_at?: Date | string;
    inventory_items: Prisma.inventory_itemsCreateNestedOneWithoutInventory_item_photosInput;
};
export type inventory_item_photosUncheckedCreateInput = {
    id?: string;
    inventory_item_id: string;
    storage_provider?: string;
    storage_key: string;
    public_url?: string | null;
    sort_order?: number;
    is_primary?: boolean;
    created_at?: Date | string;
};
export type inventory_item_photosUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storage_provider?: Prisma.StringFieldUpdateOperationsInput | string;
    storage_key?: Prisma.StringFieldUpdateOperationsInput | string;
    public_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_primary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_items?: Prisma.inventory_itemsUpdateOneRequiredWithoutInventory_item_photosNestedInput;
};
export type inventory_item_photosUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    storage_provider?: Prisma.StringFieldUpdateOperationsInput | string;
    storage_key?: Prisma.StringFieldUpdateOperationsInput | string;
    public_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_primary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type inventory_item_photosCreateManyInput = {
    id?: string;
    inventory_item_id: string;
    storage_provider?: string;
    storage_key: string;
    public_url?: string | null;
    sort_order?: number;
    is_primary?: boolean;
    created_at?: Date | string;
};
export type inventory_item_photosUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storage_provider?: Prisma.StringFieldUpdateOperationsInput | string;
    storage_key?: Prisma.StringFieldUpdateOperationsInput | string;
    public_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_primary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type inventory_item_photosUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    storage_provider?: Prisma.StringFieldUpdateOperationsInput | string;
    storage_key?: Prisma.StringFieldUpdateOperationsInput | string;
    public_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_primary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type inventory_item_photosInventory_item_idStorage_keyCompoundUniqueInput = {
    inventory_item_id: string;
    storage_key: string;
};
export type inventory_item_photosCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    inventory_item_id?: Prisma.SortOrder;
    storage_provider?: Prisma.SortOrder;
    storage_key?: Prisma.SortOrder;
    public_url?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
    is_primary?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type inventory_item_photosAvgOrderByAggregateInput = {
    sort_order?: Prisma.SortOrder;
};
export type inventory_item_photosMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    inventory_item_id?: Prisma.SortOrder;
    storage_provider?: Prisma.SortOrder;
    storage_key?: Prisma.SortOrder;
    public_url?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
    is_primary?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type inventory_item_photosMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    inventory_item_id?: Prisma.SortOrder;
    storage_provider?: Prisma.SortOrder;
    storage_key?: Prisma.SortOrder;
    public_url?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
    is_primary?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type inventory_item_photosSumOrderByAggregateInput = {
    sort_order?: Prisma.SortOrder;
};
export type Inventory_item_photosListRelationFilter = {
    every?: Prisma.inventory_item_photosWhereInput;
    some?: Prisma.inventory_item_photosWhereInput;
    none?: Prisma.inventory_item_photosWhereInput;
};
export type inventory_item_photosOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type inventory_item_photosCreateNestedManyWithoutInventory_itemsInput = {
    create?: Prisma.XOR<Prisma.inventory_item_photosCreateWithoutInventory_itemsInput, Prisma.inventory_item_photosUncheckedCreateWithoutInventory_itemsInput> | Prisma.inventory_item_photosCreateWithoutInventory_itemsInput[] | Prisma.inventory_item_photosUncheckedCreateWithoutInventory_itemsInput[];
    connectOrCreate?: Prisma.inventory_item_photosCreateOrConnectWithoutInventory_itemsInput | Prisma.inventory_item_photosCreateOrConnectWithoutInventory_itemsInput[];
    createMany?: Prisma.inventory_item_photosCreateManyInventory_itemsInputEnvelope;
    connect?: Prisma.inventory_item_photosWhereUniqueInput | Prisma.inventory_item_photosWhereUniqueInput[];
};
export type inventory_item_photosUncheckedCreateNestedManyWithoutInventory_itemsInput = {
    create?: Prisma.XOR<Prisma.inventory_item_photosCreateWithoutInventory_itemsInput, Prisma.inventory_item_photosUncheckedCreateWithoutInventory_itemsInput> | Prisma.inventory_item_photosCreateWithoutInventory_itemsInput[] | Prisma.inventory_item_photosUncheckedCreateWithoutInventory_itemsInput[];
    connectOrCreate?: Prisma.inventory_item_photosCreateOrConnectWithoutInventory_itemsInput | Prisma.inventory_item_photosCreateOrConnectWithoutInventory_itemsInput[];
    createMany?: Prisma.inventory_item_photosCreateManyInventory_itemsInputEnvelope;
    connect?: Prisma.inventory_item_photosWhereUniqueInput | Prisma.inventory_item_photosWhereUniqueInput[];
};
export type inventory_item_photosUpdateManyWithoutInventory_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.inventory_item_photosCreateWithoutInventory_itemsInput, Prisma.inventory_item_photosUncheckedCreateWithoutInventory_itemsInput> | Prisma.inventory_item_photosCreateWithoutInventory_itemsInput[] | Prisma.inventory_item_photosUncheckedCreateWithoutInventory_itemsInput[];
    connectOrCreate?: Prisma.inventory_item_photosCreateOrConnectWithoutInventory_itemsInput | Prisma.inventory_item_photosCreateOrConnectWithoutInventory_itemsInput[];
    upsert?: Prisma.inventory_item_photosUpsertWithWhereUniqueWithoutInventory_itemsInput | Prisma.inventory_item_photosUpsertWithWhereUniqueWithoutInventory_itemsInput[];
    createMany?: Prisma.inventory_item_photosCreateManyInventory_itemsInputEnvelope;
    set?: Prisma.inventory_item_photosWhereUniqueInput | Prisma.inventory_item_photosWhereUniqueInput[];
    disconnect?: Prisma.inventory_item_photosWhereUniqueInput | Prisma.inventory_item_photosWhereUniqueInput[];
    delete?: Prisma.inventory_item_photosWhereUniqueInput | Prisma.inventory_item_photosWhereUniqueInput[];
    connect?: Prisma.inventory_item_photosWhereUniqueInput | Prisma.inventory_item_photosWhereUniqueInput[];
    update?: Prisma.inventory_item_photosUpdateWithWhereUniqueWithoutInventory_itemsInput | Prisma.inventory_item_photosUpdateWithWhereUniqueWithoutInventory_itemsInput[];
    updateMany?: Prisma.inventory_item_photosUpdateManyWithWhereWithoutInventory_itemsInput | Prisma.inventory_item_photosUpdateManyWithWhereWithoutInventory_itemsInput[];
    deleteMany?: Prisma.inventory_item_photosScalarWhereInput | Prisma.inventory_item_photosScalarWhereInput[];
};
export type inventory_item_photosUncheckedUpdateManyWithoutInventory_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.inventory_item_photosCreateWithoutInventory_itemsInput, Prisma.inventory_item_photosUncheckedCreateWithoutInventory_itemsInput> | Prisma.inventory_item_photosCreateWithoutInventory_itemsInput[] | Prisma.inventory_item_photosUncheckedCreateWithoutInventory_itemsInput[];
    connectOrCreate?: Prisma.inventory_item_photosCreateOrConnectWithoutInventory_itemsInput | Prisma.inventory_item_photosCreateOrConnectWithoutInventory_itemsInput[];
    upsert?: Prisma.inventory_item_photosUpsertWithWhereUniqueWithoutInventory_itemsInput | Prisma.inventory_item_photosUpsertWithWhereUniqueWithoutInventory_itemsInput[];
    createMany?: Prisma.inventory_item_photosCreateManyInventory_itemsInputEnvelope;
    set?: Prisma.inventory_item_photosWhereUniqueInput | Prisma.inventory_item_photosWhereUniqueInput[];
    disconnect?: Prisma.inventory_item_photosWhereUniqueInput | Prisma.inventory_item_photosWhereUniqueInput[];
    delete?: Prisma.inventory_item_photosWhereUniqueInput | Prisma.inventory_item_photosWhereUniqueInput[];
    connect?: Prisma.inventory_item_photosWhereUniqueInput | Prisma.inventory_item_photosWhereUniqueInput[];
    update?: Prisma.inventory_item_photosUpdateWithWhereUniqueWithoutInventory_itemsInput | Prisma.inventory_item_photosUpdateWithWhereUniqueWithoutInventory_itemsInput[];
    updateMany?: Prisma.inventory_item_photosUpdateManyWithWhereWithoutInventory_itemsInput | Prisma.inventory_item_photosUpdateManyWithWhereWithoutInventory_itemsInput[];
    deleteMany?: Prisma.inventory_item_photosScalarWhereInput | Prisma.inventory_item_photosScalarWhereInput[];
};
export type inventory_item_photosCreateWithoutInventory_itemsInput = {
    id?: string;
    storage_provider?: string;
    storage_key: string;
    public_url?: string | null;
    sort_order?: number;
    is_primary?: boolean;
    created_at?: Date | string;
};
export type inventory_item_photosUncheckedCreateWithoutInventory_itemsInput = {
    id?: string;
    storage_provider?: string;
    storage_key: string;
    public_url?: string | null;
    sort_order?: number;
    is_primary?: boolean;
    created_at?: Date | string;
};
export type inventory_item_photosCreateOrConnectWithoutInventory_itemsInput = {
    where: Prisma.inventory_item_photosWhereUniqueInput;
    create: Prisma.XOR<Prisma.inventory_item_photosCreateWithoutInventory_itemsInput, Prisma.inventory_item_photosUncheckedCreateWithoutInventory_itemsInput>;
};
export type inventory_item_photosCreateManyInventory_itemsInputEnvelope = {
    data: Prisma.inventory_item_photosCreateManyInventory_itemsInput | Prisma.inventory_item_photosCreateManyInventory_itemsInput[];
    skipDuplicates?: boolean;
};
export type inventory_item_photosUpsertWithWhereUniqueWithoutInventory_itemsInput = {
    where: Prisma.inventory_item_photosWhereUniqueInput;
    update: Prisma.XOR<Prisma.inventory_item_photosUpdateWithoutInventory_itemsInput, Prisma.inventory_item_photosUncheckedUpdateWithoutInventory_itemsInput>;
    create: Prisma.XOR<Prisma.inventory_item_photosCreateWithoutInventory_itemsInput, Prisma.inventory_item_photosUncheckedCreateWithoutInventory_itemsInput>;
};
export type inventory_item_photosUpdateWithWhereUniqueWithoutInventory_itemsInput = {
    where: Prisma.inventory_item_photosWhereUniqueInput;
    data: Prisma.XOR<Prisma.inventory_item_photosUpdateWithoutInventory_itemsInput, Prisma.inventory_item_photosUncheckedUpdateWithoutInventory_itemsInput>;
};
export type inventory_item_photosUpdateManyWithWhereWithoutInventory_itemsInput = {
    where: Prisma.inventory_item_photosScalarWhereInput;
    data: Prisma.XOR<Prisma.inventory_item_photosUpdateManyMutationInput, Prisma.inventory_item_photosUncheckedUpdateManyWithoutInventory_itemsInput>;
};
export type inventory_item_photosScalarWhereInput = {
    AND?: Prisma.inventory_item_photosScalarWhereInput | Prisma.inventory_item_photosScalarWhereInput[];
    OR?: Prisma.inventory_item_photosScalarWhereInput[];
    NOT?: Prisma.inventory_item_photosScalarWhereInput | Prisma.inventory_item_photosScalarWhereInput[];
    id?: Prisma.UuidFilter<"inventory_item_photos"> | string;
    inventory_item_id?: Prisma.UuidFilter<"inventory_item_photos"> | string;
    storage_provider?: Prisma.StringFilter<"inventory_item_photos"> | string;
    storage_key?: Prisma.StringFilter<"inventory_item_photos"> | string;
    public_url?: Prisma.StringNullableFilter<"inventory_item_photos"> | string | null;
    sort_order?: Prisma.IntFilter<"inventory_item_photos"> | number;
    is_primary?: Prisma.BoolFilter<"inventory_item_photos"> | boolean;
    created_at?: Prisma.DateTimeFilter<"inventory_item_photos"> | Date | string;
};
export type inventory_item_photosCreateManyInventory_itemsInput = {
    id?: string;
    storage_provider?: string;
    storage_key: string;
    public_url?: string | null;
    sort_order?: number;
    is_primary?: boolean;
    created_at?: Date | string;
};
export type inventory_item_photosUpdateWithoutInventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storage_provider?: Prisma.StringFieldUpdateOperationsInput | string;
    storage_key?: Prisma.StringFieldUpdateOperationsInput | string;
    public_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_primary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type inventory_item_photosUncheckedUpdateWithoutInventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storage_provider?: Prisma.StringFieldUpdateOperationsInput | string;
    storage_key?: Prisma.StringFieldUpdateOperationsInput | string;
    public_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_primary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type inventory_item_photosUncheckedUpdateManyWithoutInventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storage_provider?: Prisma.StringFieldUpdateOperationsInput | string;
    storage_key?: Prisma.StringFieldUpdateOperationsInput | string;
    public_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_primary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type inventory_item_photosSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    inventory_item_id?: boolean;
    storage_provider?: boolean;
    storage_key?: boolean;
    public_url?: boolean;
    sort_order?: boolean;
    is_primary?: boolean;
    created_at?: boolean;
    inventory_items?: boolean | Prisma.inventory_itemsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["inventory_item_photos"]>;
export type inventory_item_photosSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    inventory_item_id?: boolean;
    storage_provider?: boolean;
    storage_key?: boolean;
    public_url?: boolean;
    sort_order?: boolean;
    is_primary?: boolean;
    created_at?: boolean;
    inventory_items?: boolean | Prisma.inventory_itemsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["inventory_item_photos"]>;
export type inventory_item_photosSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    inventory_item_id?: boolean;
    storage_provider?: boolean;
    storage_key?: boolean;
    public_url?: boolean;
    sort_order?: boolean;
    is_primary?: boolean;
    created_at?: boolean;
    inventory_items?: boolean | Prisma.inventory_itemsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["inventory_item_photos"]>;
export type inventory_item_photosSelectScalar = {
    id?: boolean;
    inventory_item_id?: boolean;
    storage_provider?: boolean;
    storage_key?: boolean;
    public_url?: boolean;
    sort_order?: boolean;
    is_primary?: boolean;
    created_at?: boolean;
};
export type inventory_item_photosOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "inventory_item_id" | "storage_provider" | "storage_key" | "public_url" | "sort_order" | "is_primary" | "created_at", ExtArgs["result"]["inventory_item_photos"]>;
export type inventory_item_photosInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    inventory_items?: boolean | Prisma.inventory_itemsDefaultArgs<ExtArgs>;
};
export type inventory_item_photosIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    inventory_items?: boolean | Prisma.inventory_itemsDefaultArgs<ExtArgs>;
};
export type inventory_item_photosIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    inventory_items?: boolean | Prisma.inventory_itemsDefaultArgs<ExtArgs>;
};
export type $inventory_item_photosPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "inventory_item_photos";
    objects: {
        inventory_items: Prisma.$inventory_itemsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        inventory_item_id: string;
        storage_provider: string;
        storage_key: string;
        public_url: string | null;
        sort_order: number;
        is_primary: boolean;
        created_at: Date;
    }, ExtArgs["result"]["inventory_item_photos"]>;
    composites: {};
};
export type inventory_item_photosGetPayload<S extends boolean | null | undefined | inventory_item_photosDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$inventory_item_photosPayload, S>;
export type inventory_item_photosCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<inventory_item_photosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Inventory_item_photosCountAggregateInputType | true;
};
export interface inventory_item_photosDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['inventory_item_photos'];
        meta: {
            name: 'inventory_item_photos';
        };
    };
    /**
     * Find zero or one Inventory_item_photos that matches the filter.
     * @param {inventory_item_photosFindUniqueArgs} args - Arguments to find a Inventory_item_photos
     * @example
     * // Get one Inventory_item_photos
     * const inventory_item_photos = await prisma.inventory_item_photos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends inventory_item_photosFindUniqueArgs>(args: Prisma.SelectSubset<T, inventory_item_photosFindUniqueArgs<ExtArgs>>): Prisma.Prisma__inventory_item_photosClient<runtime.Types.Result.GetResult<Prisma.$inventory_item_photosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Inventory_item_photos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {inventory_item_photosFindUniqueOrThrowArgs} args - Arguments to find a Inventory_item_photos
     * @example
     * // Get one Inventory_item_photos
     * const inventory_item_photos = await prisma.inventory_item_photos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends inventory_item_photosFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, inventory_item_photosFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__inventory_item_photosClient<runtime.Types.Result.GetResult<Prisma.$inventory_item_photosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Inventory_item_photos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventory_item_photosFindFirstArgs} args - Arguments to find a Inventory_item_photos
     * @example
     * // Get one Inventory_item_photos
     * const inventory_item_photos = await prisma.inventory_item_photos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends inventory_item_photosFindFirstArgs>(args?: Prisma.SelectSubset<T, inventory_item_photosFindFirstArgs<ExtArgs>>): Prisma.Prisma__inventory_item_photosClient<runtime.Types.Result.GetResult<Prisma.$inventory_item_photosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Inventory_item_photos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventory_item_photosFindFirstOrThrowArgs} args - Arguments to find a Inventory_item_photos
     * @example
     * // Get one Inventory_item_photos
     * const inventory_item_photos = await prisma.inventory_item_photos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends inventory_item_photosFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, inventory_item_photosFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__inventory_item_photosClient<runtime.Types.Result.GetResult<Prisma.$inventory_item_photosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Inventory_item_photos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventory_item_photosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventory_item_photos
     * const inventory_item_photos = await prisma.inventory_item_photos.findMany()
     *
     * // Get first 10 Inventory_item_photos
     * const inventory_item_photos = await prisma.inventory_item_photos.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const inventory_item_photosWithIdOnly = await prisma.inventory_item_photos.findMany({ select: { id: true } })
     *
     */
    findMany<T extends inventory_item_photosFindManyArgs>(args?: Prisma.SelectSubset<T, inventory_item_photosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$inventory_item_photosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Inventory_item_photos.
     * @param {inventory_item_photosCreateArgs} args - Arguments to create a Inventory_item_photos.
     * @example
     * // Create one Inventory_item_photos
     * const Inventory_item_photos = await prisma.inventory_item_photos.create({
     *   data: {
     *     // ... data to create a Inventory_item_photos
     *   }
     * })
     *
     */
    create<T extends inventory_item_photosCreateArgs>(args: Prisma.SelectSubset<T, inventory_item_photosCreateArgs<ExtArgs>>): Prisma.Prisma__inventory_item_photosClient<runtime.Types.Result.GetResult<Prisma.$inventory_item_photosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Inventory_item_photos.
     * @param {inventory_item_photosCreateManyArgs} args - Arguments to create many Inventory_item_photos.
     * @example
     * // Create many Inventory_item_photos
     * const inventory_item_photos = await prisma.inventory_item_photos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends inventory_item_photosCreateManyArgs>(args?: Prisma.SelectSubset<T, inventory_item_photosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Inventory_item_photos and returns the data saved in the database.
     * @param {inventory_item_photosCreateManyAndReturnArgs} args - Arguments to create many Inventory_item_photos.
     * @example
     * // Create many Inventory_item_photos
     * const inventory_item_photos = await prisma.inventory_item_photos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Inventory_item_photos and only return the `id`
     * const inventory_item_photosWithIdOnly = await prisma.inventory_item_photos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends inventory_item_photosCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, inventory_item_photosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$inventory_item_photosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Inventory_item_photos.
     * @param {inventory_item_photosDeleteArgs} args - Arguments to delete one Inventory_item_photos.
     * @example
     * // Delete one Inventory_item_photos
     * const Inventory_item_photos = await prisma.inventory_item_photos.delete({
     *   where: {
     *     // ... filter to delete one Inventory_item_photos
     *   }
     * })
     *
     */
    delete<T extends inventory_item_photosDeleteArgs>(args: Prisma.SelectSubset<T, inventory_item_photosDeleteArgs<ExtArgs>>): Prisma.Prisma__inventory_item_photosClient<runtime.Types.Result.GetResult<Prisma.$inventory_item_photosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Inventory_item_photos.
     * @param {inventory_item_photosUpdateArgs} args - Arguments to update one Inventory_item_photos.
     * @example
     * // Update one Inventory_item_photos
     * const inventory_item_photos = await prisma.inventory_item_photos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends inventory_item_photosUpdateArgs>(args: Prisma.SelectSubset<T, inventory_item_photosUpdateArgs<ExtArgs>>): Prisma.Prisma__inventory_item_photosClient<runtime.Types.Result.GetResult<Prisma.$inventory_item_photosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Inventory_item_photos.
     * @param {inventory_item_photosDeleteManyArgs} args - Arguments to filter Inventory_item_photos to delete.
     * @example
     * // Delete a few Inventory_item_photos
     * const { count } = await prisma.inventory_item_photos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends inventory_item_photosDeleteManyArgs>(args?: Prisma.SelectSubset<T, inventory_item_photosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Inventory_item_photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventory_item_photosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventory_item_photos
     * const inventory_item_photos = await prisma.inventory_item_photos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends inventory_item_photosUpdateManyArgs>(args: Prisma.SelectSubset<T, inventory_item_photosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Inventory_item_photos and returns the data updated in the database.
     * @param {inventory_item_photosUpdateManyAndReturnArgs} args - Arguments to update many Inventory_item_photos.
     * @example
     * // Update many Inventory_item_photos
     * const inventory_item_photos = await prisma.inventory_item_photos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Inventory_item_photos and only return the `id`
     * const inventory_item_photosWithIdOnly = await prisma.inventory_item_photos.updateManyAndReturn({
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
    updateManyAndReturn<T extends inventory_item_photosUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, inventory_item_photosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$inventory_item_photosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Inventory_item_photos.
     * @param {inventory_item_photosUpsertArgs} args - Arguments to update or create a Inventory_item_photos.
     * @example
     * // Update or create a Inventory_item_photos
     * const inventory_item_photos = await prisma.inventory_item_photos.upsert({
     *   create: {
     *     // ... data to create a Inventory_item_photos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventory_item_photos we want to update
     *   }
     * })
     */
    upsert<T extends inventory_item_photosUpsertArgs>(args: Prisma.SelectSubset<T, inventory_item_photosUpsertArgs<ExtArgs>>): Prisma.Prisma__inventory_item_photosClient<runtime.Types.Result.GetResult<Prisma.$inventory_item_photosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Inventory_item_photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventory_item_photosCountArgs} args - Arguments to filter Inventory_item_photos to count.
     * @example
     * // Count the number of Inventory_item_photos
     * const count = await prisma.inventory_item_photos.count({
     *   where: {
     *     // ... the filter for the Inventory_item_photos we want to count
     *   }
     * })
    **/
    count<T extends inventory_item_photosCountArgs>(args?: Prisma.Subset<T, inventory_item_photosCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Inventory_item_photosCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Inventory_item_photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Inventory_item_photosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Inventory_item_photosAggregateArgs>(args: Prisma.Subset<T, Inventory_item_photosAggregateArgs>): Prisma.PrismaPromise<GetInventory_item_photosAggregateType<T>>;
    /**
     * Group by Inventory_item_photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventory_item_photosGroupByArgs} args - Group by arguments.
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
    groupBy<T extends inventory_item_photosGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: inventory_item_photosGroupByArgs['orderBy'];
    } : {
        orderBy?: inventory_item_photosGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, inventory_item_photosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventory_item_photosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the inventory_item_photos model
     */
    readonly fields: inventory_item_photosFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for inventory_item_photos.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__inventory_item_photosClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    inventory_items<T extends Prisma.inventory_itemsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.inventory_itemsDefaultArgs<ExtArgs>>): Prisma.Prisma__inventory_itemsClient<runtime.Types.Result.GetResult<Prisma.$inventory_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the inventory_item_photos model
 */
export interface inventory_item_photosFieldRefs {
    readonly id: Prisma.FieldRef<"inventory_item_photos", 'String'>;
    readonly inventory_item_id: Prisma.FieldRef<"inventory_item_photos", 'String'>;
    readonly storage_provider: Prisma.FieldRef<"inventory_item_photos", 'String'>;
    readonly storage_key: Prisma.FieldRef<"inventory_item_photos", 'String'>;
    readonly public_url: Prisma.FieldRef<"inventory_item_photos", 'String'>;
    readonly sort_order: Prisma.FieldRef<"inventory_item_photos", 'Int'>;
    readonly is_primary: Prisma.FieldRef<"inventory_item_photos", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"inventory_item_photos", 'DateTime'>;
}
/**
 * inventory_item_photos findUnique
 */
export type inventory_item_photosFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which inventory_item_photos to fetch.
     */
    where: Prisma.inventory_item_photosWhereUniqueInput;
};
/**
 * inventory_item_photos findUniqueOrThrow
 */
export type inventory_item_photosFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which inventory_item_photos to fetch.
     */
    where: Prisma.inventory_item_photosWhereUniqueInput;
};
/**
 * inventory_item_photos findFirst
 */
export type inventory_item_photosFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which inventory_item_photos to fetch.
     */
    where?: Prisma.inventory_item_photosWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of inventory_item_photos to fetch.
     */
    orderBy?: Prisma.inventory_item_photosOrderByWithRelationInput | Prisma.inventory_item_photosOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for inventory_item_photos.
     */
    cursor?: Prisma.inventory_item_photosWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` inventory_item_photos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` inventory_item_photos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of inventory_item_photos.
     */
    distinct?: Prisma.Inventory_item_photosScalarFieldEnum | Prisma.Inventory_item_photosScalarFieldEnum[];
};
/**
 * inventory_item_photos findFirstOrThrow
 */
export type inventory_item_photosFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which inventory_item_photos to fetch.
     */
    where?: Prisma.inventory_item_photosWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of inventory_item_photos to fetch.
     */
    orderBy?: Prisma.inventory_item_photosOrderByWithRelationInput | Prisma.inventory_item_photosOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for inventory_item_photos.
     */
    cursor?: Prisma.inventory_item_photosWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` inventory_item_photos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` inventory_item_photos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of inventory_item_photos.
     */
    distinct?: Prisma.Inventory_item_photosScalarFieldEnum | Prisma.Inventory_item_photosScalarFieldEnum[];
};
/**
 * inventory_item_photos findMany
 */
export type inventory_item_photosFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which inventory_item_photos to fetch.
     */
    where?: Prisma.inventory_item_photosWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of inventory_item_photos to fetch.
     */
    orderBy?: Prisma.inventory_item_photosOrderByWithRelationInput | Prisma.inventory_item_photosOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing inventory_item_photos.
     */
    cursor?: Prisma.inventory_item_photosWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` inventory_item_photos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` inventory_item_photos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of inventory_item_photos.
     */
    distinct?: Prisma.Inventory_item_photosScalarFieldEnum | Prisma.Inventory_item_photosScalarFieldEnum[];
};
/**
 * inventory_item_photos create
 */
export type inventory_item_photosCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a inventory_item_photos.
     */
    data: Prisma.XOR<Prisma.inventory_item_photosCreateInput, Prisma.inventory_item_photosUncheckedCreateInput>;
};
/**
 * inventory_item_photos createMany
 */
export type inventory_item_photosCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many inventory_item_photos.
     */
    data: Prisma.inventory_item_photosCreateManyInput | Prisma.inventory_item_photosCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * inventory_item_photos createManyAndReturn
 */
export type inventory_item_photosCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_item_photos
     */
    select?: Prisma.inventory_item_photosSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the inventory_item_photos
     */
    omit?: Prisma.inventory_item_photosOmit<ExtArgs> | null;
    /**
     * The data used to create many inventory_item_photos.
     */
    data: Prisma.inventory_item_photosCreateManyInput | Prisma.inventory_item_photosCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.inventory_item_photosIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * inventory_item_photos update
 */
export type inventory_item_photosUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a inventory_item_photos.
     */
    data: Prisma.XOR<Prisma.inventory_item_photosUpdateInput, Prisma.inventory_item_photosUncheckedUpdateInput>;
    /**
     * Choose, which inventory_item_photos to update.
     */
    where: Prisma.inventory_item_photosWhereUniqueInput;
};
/**
 * inventory_item_photos updateMany
 */
export type inventory_item_photosUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update inventory_item_photos.
     */
    data: Prisma.XOR<Prisma.inventory_item_photosUpdateManyMutationInput, Prisma.inventory_item_photosUncheckedUpdateManyInput>;
    /**
     * Filter which inventory_item_photos to update
     */
    where?: Prisma.inventory_item_photosWhereInput;
    /**
     * Limit how many inventory_item_photos to update.
     */
    limit?: number;
};
/**
 * inventory_item_photos updateManyAndReturn
 */
export type inventory_item_photosUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_item_photos
     */
    select?: Prisma.inventory_item_photosSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the inventory_item_photos
     */
    omit?: Prisma.inventory_item_photosOmit<ExtArgs> | null;
    /**
     * The data used to update inventory_item_photos.
     */
    data: Prisma.XOR<Prisma.inventory_item_photosUpdateManyMutationInput, Prisma.inventory_item_photosUncheckedUpdateManyInput>;
    /**
     * Filter which inventory_item_photos to update
     */
    where?: Prisma.inventory_item_photosWhereInput;
    /**
     * Limit how many inventory_item_photos to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.inventory_item_photosIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * inventory_item_photos upsert
 */
export type inventory_item_photosUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the inventory_item_photos to update in case it exists.
     */
    where: Prisma.inventory_item_photosWhereUniqueInput;
    /**
     * In case the inventory_item_photos found by the `where` argument doesn't exist, create a new inventory_item_photos with this data.
     */
    create: Prisma.XOR<Prisma.inventory_item_photosCreateInput, Prisma.inventory_item_photosUncheckedCreateInput>;
    /**
     * In case the inventory_item_photos was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.inventory_item_photosUpdateInput, Prisma.inventory_item_photosUncheckedUpdateInput>;
};
/**
 * inventory_item_photos delete
 */
export type inventory_item_photosDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which inventory_item_photos to delete.
     */
    where: Prisma.inventory_item_photosWhereUniqueInput;
};
/**
 * inventory_item_photos deleteMany
 */
export type inventory_item_photosDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which inventory_item_photos to delete
     */
    where?: Prisma.inventory_item_photosWhereInput;
    /**
     * Limit how many inventory_item_photos to delete.
     */
    limit?: number;
};
/**
 * inventory_item_photos without action
 */
export type inventory_item_photosDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
