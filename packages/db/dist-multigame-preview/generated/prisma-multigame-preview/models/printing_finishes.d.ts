import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model printing_finishes
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type printing_finishesModel = runtime.Types.Result.DefaultSelection<Prisma.$printing_finishesPayload>;
export type AggregatePrinting_finishes = {
    _count: Printing_finishesCountAggregateOutputType | null;
    _min: Printing_finishesMinAggregateOutputType | null;
    _max: Printing_finishesMaxAggregateOutputType | null;
};
export type Printing_finishesMinAggregateOutputType = {
    printing_id: string | null;
    finish: string | null;
    created_at: Date | null;
};
export type Printing_finishesMaxAggregateOutputType = {
    printing_id: string | null;
    finish: string | null;
    created_at: Date | null;
};
export type Printing_finishesCountAggregateOutputType = {
    printing_id: number;
    finish: number;
    created_at: number;
    _all: number;
};
export type Printing_finishesMinAggregateInputType = {
    printing_id?: true;
    finish?: true;
    created_at?: true;
};
export type Printing_finishesMaxAggregateInputType = {
    printing_id?: true;
    finish?: true;
    created_at?: true;
};
export type Printing_finishesCountAggregateInputType = {
    printing_id?: true;
    finish?: true;
    created_at?: true;
    _all?: true;
};
export type Printing_finishesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which printing_finishes to aggregate.
     */
    where?: Prisma.printing_finishesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of printing_finishes to fetch.
     */
    orderBy?: Prisma.printing_finishesOrderByWithRelationInput | Prisma.printing_finishesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.printing_finishesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` printing_finishes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` printing_finishes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned printing_finishes
    **/
    _count?: true | Printing_finishesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Printing_finishesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Printing_finishesMaxAggregateInputType;
};
export type GetPrinting_finishesAggregateType<T extends Printing_finishesAggregateArgs> = {
    [P in keyof T & keyof AggregatePrinting_finishes]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePrinting_finishes[P]> : Prisma.GetScalarType<T[P], AggregatePrinting_finishes[P]>;
};
export type printing_finishesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.printing_finishesWhereInput;
    orderBy?: Prisma.printing_finishesOrderByWithAggregationInput | Prisma.printing_finishesOrderByWithAggregationInput[];
    by: Prisma.Printing_finishesScalarFieldEnum[] | Prisma.Printing_finishesScalarFieldEnum;
    having?: Prisma.printing_finishesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Printing_finishesCountAggregateInputType | true;
    _min?: Printing_finishesMinAggregateInputType;
    _max?: Printing_finishesMaxAggregateInputType;
};
export type Printing_finishesGroupByOutputType = {
    printing_id: string;
    finish: string;
    created_at: Date;
    _count: Printing_finishesCountAggregateOutputType | null;
    _min: Printing_finishesMinAggregateOutputType | null;
    _max: Printing_finishesMaxAggregateOutputType | null;
};
export type GetPrinting_finishesGroupByPayload<T extends printing_finishesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Printing_finishesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Printing_finishesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Printing_finishesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Printing_finishesGroupByOutputType[P]>;
}>>;
export type printing_finishesWhereInput = {
    AND?: Prisma.printing_finishesWhereInput | Prisma.printing_finishesWhereInput[];
    OR?: Prisma.printing_finishesWhereInput[];
    NOT?: Prisma.printing_finishesWhereInput | Prisma.printing_finishesWhereInput[];
    printing_id?: Prisma.UuidFilter<"printing_finishes"> | string;
    finish?: Prisma.StringFilter<"printing_finishes"> | string;
    created_at?: Prisma.DateTimeFilter<"printing_finishes"> | Date | string;
    inventory_items?: Prisma.Inventory_itemsListRelationFilter;
    price_snapshots?: Prisma.Price_snapshotsListRelationFilter;
    card_printings?: Prisma.XOR<Prisma.Card_printingsScalarRelationFilter, Prisma.card_printingsWhereInput>;
};
export type printing_finishesOrderByWithRelationInput = {
    printing_id?: Prisma.SortOrder;
    finish?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    inventory_items?: Prisma.inventory_itemsOrderByRelationAggregateInput;
    price_snapshots?: Prisma.price_snapshotsOrderByRelationAggregateInput;
    card_printings?: Prisma.card_printingsOrderByWithRelationInput;
};
export type printing_finishesWhereUniqueInput = Prisma.AtLeast<{
    printing_id_finish?: Prisma.printing_finishesPrinting_idFinishCompoundUniqueInput;
    AND?: Prisma.printing_finishesWhereInput | Prisma.printing_finishesWhereInput[];
    OR?: Prisma.printing_finishesWhereInput[];
    NOT?: Prisma.printing_finishesWhereInput | Prisma.printing_finishesWhereInput[];
    printing_id?: Prisma.UuidFilter<"printing_finishes"> | string;
    finish?: Prisma.StringFilter<"printing_finishes"> | string;
    created_at?: Prisma.DateTimeFilter<"printing_finishes"> | Date | string;
    inventory_items?: Prisma.Inventory_itemsListRelationFilter;
    price_snapshots?: Prisma.Price_snapshotsListRelationFilter;
    card_printings?: Prisma.XOR<Prisma.Card_printingsScalarRelationFilter, Prisma.card_printingsWhereInput>;
}, "printing_id_finish">;
export type printing_finishesOrderByWithAggregationInput = {
    printing_id?: Prisma.SortOrder;
    finish?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.printing_finishesCountOrderByAggregateInput;
    _max?: Prisma.printing_finishesMaxOrderByAggregateInput;
    _min?: Prisma.printing_finishesMinOrderByAggregateInput;
};
export type printing_finishesScalarWhereWithAggregatesInput = {
    AND?: Prisma.printing_finishesScalarWhereWithAggregatesInput | Prisma.printing_finishesScalarWhereWithAggregatesInput[];
    OR?: Prisma.printing_finishesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.printing_finishesScalarWhereWithAggregatesInput | Prisma.printing_finishesScalarWhereWithAggregatesInput[];
    printing_id?: Prisma.UuidWithAggregatesFilter<"printing_finishes"> | string;
    finish?: Prisma.StringWithAggregatesFilter<"printing_finishes"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"printing_finishes"> | Date | string;
};
export type printing_finishesCreateInput = {
    finish: string;
    created_at?: Date | string;
    inventory_items?: Prisma.inventory_itemsCreateNestedManyWithoutPrinting_finishesInput;
    price_snapshots?: Prisma.price_snapshotsCreateNestedManyWithoutPrinting_finishesInput;
    card_printings: Prisma.card_printingsCreateNestedOneWithoutPrinting_finishesInput;
};
export type printing_finishesUncheckedCreateInput = {
    printing_id: string;
    finish: string;
    created_at?: Date | string;
    inventory_items?: Prisma.inventory_itemsUncheckedCreateNestedManyWithoutPrinting_finishesInput;
    price_snapshots?: Prisma.price_snapshotsUncheckedCreateNestedManyWithoutPrinting_finishesInput;
};
export type printing_finishesUpdateInput = {
    finish?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_items?: Prisma.inventory_itemsUpdateManyWithoutPrinting_finishesNestedInput;
    price_snapshots?: Prisma.price_snapshotsUpdateManyWithoutPrinting_finishesNestedInput;
    card_printings?: Prisma.card_printingsUpdateOneRequiredWithoutPrinting_finishesNestedInput;
};
export type printing_finishesUncheckedUpdateInput = {
    printing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    finish?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_items?: Prisma.inventory_itemsUncheckedUpdateManyWithoutPrinting_finishesNestedInput;
    price_snapshots?: Prisma.price_snapshotsUncheckedUpdateManyWithoutPrinting_finishesNestedInput;
};
export type printing_finishesCreateManyInput = {
    printing_id: string;
    finish: string;
    created_at?: Date | string;
};
export type printing_finishesUpdateManyMutationInput = {
    finish?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type printing_finishesUncheckedUpdateManyInput = {
    printing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    finish?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Printing_finishesListRelationFilter = {
    every?: Prisma.printing_finishesWhereInput;
    some?: Prisma.printing_finishesWhereInput;
    none?: Prisma.printing_finishesWhereInput;
};
export type printing_finishesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Printing_finishesScalarRelationFilter = {
    is?: Prisma.printing_finishesWhereInput;
    isNot?: Prisma.printing_finishesWhereInput;
};
export type printing_finishesPrinting_idFinishCompoundUniqueInput = {
    printing_id: string;
    finish: string;
};
export type printing_finishesCountOrderByAggregateInput = {
    printing_id?: Prisma.SortOrder;
    finish?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type printing_finishesMaxOrderByAggregateInput = {
    printing_id?: Prisma.SortOrder;
    finish?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type printing_finishesMinOrderByAggregateInput = {
    printing_id?: Prisma.SortOrder;
    finish?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type printing_finishesCreateNestedManyWithoutCard_printingsInput = {
    create?: Prisma.XOR<Prisma.printing_finishesCreateWithoutCard_printingsInput, Prisma.printing_finishesUncheckedCreateWithoutCard_printingsInput> | Prisma.printing_finishesCreateWithoutCard_printingsInput[] | Prisma.printing_finishesUncheckedCreateWithoutCard_printingsInput[];
    connectOrCreate?: Prisma.printing_finishesCreateOrConnectWithoutCard_printingsInput | Prisma.printing_finishesCreateOrConnectWithoutCard_printingsInput[];
    createMany?: Prisma.printing_finishesCreateManyCard_printingsInputEnvelope;
    connect?: Prisma.printing_finishesWhereUniqueInput | Prisma.printing_finishesWhereUniqueInput[];
};
export type printing_finishesUncheckedCreateNestedManyWithoutCard_printingsInput = {
    create?: Prisma.XOR<Prisma.printing_finishesCreateWithoutCard_printingsInput, Prisma.printing_finishesUncheckedCreateWithoutCard_printingsInput> | Prisma.printing_finishesCreateWithoutCard_printingsInput[] | Prisma.printing_finishesUncheckedCreateWithoutCard_printingsInput[];
    connectOrCreate?: Prisma.printing_finishesCreateOrConnectWithoutCard_printingsInput | Prisma.printing_finishesCreateOrConnectWithoutCard_printingsInput[];
    createMany?: Prisma.printing_finishesCreateManyCard_printingsInputEnvelope;
    connect?: Prisma.printing_finishesWhereUniqueInput | Prisma.printing_finishesWhereUniqueInput[];
};
export type printing_finishesUpdateManyWithoutCard_printingsNestedInput = {
    create?: Prisma.XOR<Prisma.printing_finishesCreateWithoutCard_printingsInput, Prisma.printing_finishesUncheckedCreateWithoutCard_printingsInput> | Prisma.printing_finishesCreateWithoutCard_printingsInput[] | Prisma.printing_finishesUncheckedCreateWithoutCard_printingsInput[];
    connectOrCreate?: Prisma.printing_finishesCreateOrConnectWithoutCard_printingsInput | Prisma.printing_finishesCreateOrConnectWithoutCard_printingsInput[];
    upsert?: Prisma.printing_finishesUpsertWithWhereUniqueWithoutCard_printingsInput | Prisma.printing_finishesUpsertWithWhereUniqueWithoutCard_printingsInput[];
    createMany?: Prisma.printing_finishesCreateManyCard_printingsInputEnvelope;
    set?: Prisma.printing_finishesWhereUniqueInput | Prisma.printing_finishesWhereUniqueInput[];
    disconnect?: Prisma.printing_finishesWhereUniqueInput | Prisma.printing_finishesWhereUniqueInput[];
    delete?: Prisma.printing_finishesWhereUniqueInput | Prisma.printing_finishesWhereUniqueInput[];
    connect?: Prisma.printing_finishesWhereUniqueInput | Prisma.printing_finishesWhereUniqueInput[];
    update?: Prisma.printing_finishesUpdateWithWhereUniqueWithoutCard_printingsInput | Prisma.printing_finishesUpdateWithWhereUniqueWithoutCard_printingsInput[];
    updateMany?: Prisma.printing_finishesUpdateManyWithWhereWithoutCard_printingsInput | Prisma.printing_finishesUpdateManyWithWhereWithoutCard_printingsInput[];
    deleteMany?: Prisma.printing_finishesScalarWhereInput | Prisma.printing_finishesScalarWhereInput[];
};
export type printing_finishesUncheckedUpdateManyWithoutCard_printingsNestedInput = {
    create?: Prisma.XOR<Prisma.printing_finishesCreateWithoutCard_printingsInput, Prisma.printing_finishesUncheckedCreateWithoutCard_printingsInput> | Prisma.printing_finishesCreateWithoutCard_printingsInput[] | Prisma.printing_finishesUncheckedCreateWithoutCard_printingsInput[];
    connectOrCreate?: Prisma.printing_finishesCreateOrConnectWithoutCard_printingsInput | Prisma.printing_finishesCreateOrConnectWithoutCard_printingsInput[];
    upsert?: Prisma.printing_finishesUpsertWithWhereUniqueWithoutCard_printingsInput | Prisma.printing_finishesUpsertWithWhereUniqueWithoutCard_printingsInput[];
    createMany?: Prisma.printing_finishesCreateManyCard_printingsInputEnvelope;
    set?: Prisma.printing_finishesWhereUniqueInput | Prisma.printing_finishesWhereUniqueInput[];
    disconnect?: Prisma.printing_finishesWhereUniqueInput | Prisma.printing_finishesWhereUniqueInput[];
    delete?: Prisma.printing_finishesWhereUniqueInput | Prisma.printing_finishesWhereUniqueInput[];
    connect?: Prisma.printing_finishesWhereUniqueInput | Prisma.printing_finishesWhereUniqueInput[];
    update?: Prisma.printing_finishesUpdateWithWhereUniqueWithoutCard_printingsInput | Prisma.printing_finishesUpdateWithWhereUniqueWithoutCard_printingsInput[];
    updateMany?: Prisma.printing_finishesUpdateManyWithWhereWithoutCard_printingsInput | Prisma.printing_finishesUpdateManyWithWhereWithoutCard_printingsInput[];
    deleteMany?: Prisma.printing_finishesScalarWhereInput | Prisma.printing_finishesScalarWhereInput[];
};
export type printing_finishesCreateNestedOneWithoutInventory_itemsInput = {
    create?: Prisma.XOR<Prisma.printing_finishesCreateWithoutInventory_itemsInput, Prisma.printing_finishesUncheckedCreateWithoutInventory_itemsInput>;
    connectOrCreate?: Prisma.printing_finishesCreateOrConnectWithoutInventory_itemsInput;
    connect?: Prisma.printing_finishesWhereUniqueInput;
};
export type printing_finishesUpdateOneRequiredWithoutInventory_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.printing_finishesCreateWithoutInventory_itemsInput, Prisma.printing_finishesUncheckedCreateWithoutInventory_itemsInput>;
    connectOrCreate?: Prisma.printing_finishesCreateOrConnectWithoutInventory_itemsInput;
    upsert?: Prisma.printing_finishesUpsertWithoutInventory_itemsInput;
    connect?: Prisma.printing_finishesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.printing_finishesUpdateToOneWithWhereWithoutInventory_itemsInput, Prisma.printing_finishesUpdateWithoutInventory_itemsInput>, Prisma.printing_finishesUncheckedUpdateWithoutInventory_itemsInput>;
};
export type printing_finishesCreateNestedOneWithoutPrice_snapshotsInput = {
    create?: Prisma.XOR<Prisma.printing_finishesCreateWithoutPrice_snapshotsInput, Prisma.printing_finishesUncheckedCreateWithoutPrice_snapshotsInput>;
    connectOrCreate?: Prisma.printing_finishesCreateOrConnectWithoutPrice_snapshotsInput;
    connect?: Prisma.printing_finishesWhereUniqueInput;
};
export type printing_finishesUpdateOneRequiredWithoutPrice_snapshotsNestedInput = {
    create?: Prisma.XOR<Prisma.printing_finishesCreateWithoutPrice_snapshotsInput, Prisma.printing_finishesUncheckedCreateWithoutPrice_snapshotsInput>;
    connectOrCreate?: Prisma.printing_finishesCreateOrConnectWithoutPrice_snapshotsInput;
    upsert?: Prisma.printing_finishesUpsertWithoutPrice_snapshotsInput;
    connect?: Prisma.printing_finishesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.printing_finishesUpdateToOneWithWhereWithoutPrice_snapshotsInput, Prisma.printing_finishesUpdateWithoutPrice_snapshotsInput>, Prisma.printing_finishesUncheckedUpdateWithoutPrice_snapshotsInput>;
};
export type printing_finishesCreateWithoutCard_printingsInput = {
    finish: string;
    created_at?: Date | string;
    inventory_items?: Prisma.inventory_itemsCreateNestedManyWithoutPrinting_finishesInput;
    price_snapshots?: Prisma.price_snapshotsCreateNestedManyWithoutPrinting_finishesInput;
};
export type printing_finishesUncheckedCreateWithoutCard_printingsInput = {
    finish: string;
    created_at?: Date | string;
    inventory_items?: Prisma.inventory_itemsUncheckedCreateNestedManyWithoutPrinting_finishesInput;
    price_snapshots?: Prisma.price_snapshotsUncheckedCreateNestedManyWithoutPrinting_finishesInput;
};
export type printing_finishesCreateOrConnectWithoutCard_printingsInput = {
    where: Prisma.printing_finishesWhereUniqueInput;
    create: Prisma.XOR<Prisma.printing_finishesCreateWithoutCard_printingsInput, Prisma.printing_finishesUncheckedCreateWithoutCard_printingsInput>;
};
export type printing_finishesCreateManyCard_printingsInputEnvelope = {
    data: Prisma.printing_finishesCreateManyCard_printingsInput | Prisma.printing_finishesCreateManyCard_printingsInput[];
    skipDuplicates?: boolean;
};
export type printing_finishesUpsertWithWhereUniqueWithoutCard_printingsInput = {
    where: Prisma.printing_finishesWhereUniqueInput;
    update: Prisma.XOR<Prisma.printing_finishesUpdateWithoutCard_printingsInput, Prisma.printing_finishesUncheckedUpdateWithoutCard_printingsInput>;
    create: Prisma.XOR<Prisma.printing_finishesCreateWithoutCard_printingsInput, Prisma.printing_finishesUncheckedCreateWithoutCard_printingsInput>;
};
export type printing_finishesUpdateWithWhereUniqueWithoutCard_printingsInput = {
    where: Prisma.printing_finishesWhereUniqueInput;
    data: Prisma.XOR<Prisma.printing_finishesUpdateWithoutCard_printingsInput, Prisma.printing_finishesUncheckedUpdateWithoutCard_printingsInput>;
};
export type printing_finishesUpdateManyWithWhereWithoutCard_printingsInput = {
    where: Prisma.printing_finishesScalarWhereInput;
    data: Prisma.XOR<Prisma.printing_finishesUpdateManyMutationInput, Prisma.printing_finishesUncheckedUpdateManyWithoutCard_printingsInput>;
};
export type printing_finishesScalarWhereInput = {
    AND?: Prisma.printing_finishesScalarWhereInput | Prisma.printing_finishesScalarWhereInput[];
    OR?: Prisma.printing_finishesScalarWhereInput[];
    NOT?: Prisma.printing_finishesScalarWhereInput | Prisma.printing_finishesScalarWhereInput[];
    printing_id?: Prisma.UuidFilter<"printing_finishes"> | string;
    finish?: Prisma.StringFilter<"printing_finishes"> | string;
    created_at?: Prisma.DateTimeFilter<"printing_finishes"> | Date | string;
};
export type printing_finishesCreateWithoutInventory_itemsInput = {
    finish: string;
    created_at?: Date | string;
    price_snapshots?: Prisma.price_snapshotsCreateNestedManyWithoutPrinting_finishesInput;
    card_printings: Prisma.card_printingsCreateNestedOneWithoutPrinting_finishesInput;
};
export type printing_finishesUncheckedCreateWithoutInventory_itemsInput = {
    printing_id: string;
    finish: string;
    created_at?: Date | string;
    price_snapshots?: Prisma.price_snapshotsUncheckedCreateNestedManyWithoutPrinting_finishesInput;
};
export type printing_finishesCreateOrConnectWithoutInventory_itemsInput = {
    where: Prisma.printing_finishesWhereUniqueInput;
    create: Prisma.XOR<Prisma.printing_finishesCreateWithoutInventory_itemsInput, Prisma.printing_finishesUncheckedCreateWithoutInventory_itemsInput>;
};
export type printing_finishesUpsertWithoutInventory_itemsInput = {
    update: Prisma.XOR<Prisma.printing_finishesUpdateWithoutInventory_itemsInput, Prisma.printing_finishesUncheckedUpdateWithoutInventory_itemsInput>;
    create: Prisma.XOR<Prisma.printing_finishesCreateWithoutInventory_itemsInput, Prisma.printing_finishesUncheckedCreateWithoutInventory_itemsInput>;
    where?: Prisma.printing_finishesWhereInput;
};
export type printing_finishesUpdateToOneWithWhereWithoutInventory_itemsInput = {
    where?: Prisma.printing_finishesWhereInput;
    data: Prisma.XOR<Prisma.printing_finishesUpdateWithoutInventory_itemsInput, Prisma.printing_finishesUncheckedUpdateWithoutInventory_itemsInput>;
};
export type printing_finishesUpdateWithoutInventory_itemsInput = {
    finish?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    price_snapshots?: Prisma.price_snapshotsUpdateManyWithoutPrinting_finishesNestedInput;
    card_printings?: Prisma.card_printingsUpdateOneRequiredWithoutPrinting_finishesNestedInput;
};
export type printing_finishesUncheckedUpdateWithoutInventory_itemsInput = {
    printing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    finish?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    price_snapshots?: Prisma.price_snapshotsUncheckedUpdateManyWithoutPrinting_finishesNestedInput;
};
export type printing_finishesCreateWithoutPrice_snapshotsInput = {
    finish: string;
    created_at?: Date | string;
    inventory_items?: Prisma.inventory_itemsCreateNestedManyWithoutPrinting_finishesInput;
    card_printings: Prisma.card_printingsCreateNestedOneWithoutPrinting_finishesInput;
};
export type printing_finishesUncheckedCreateWithoutPrice_snapshotsInput = {
    printing_id: string;
    finish: string;
    created_at?: Date | string;
    inventory_items?: Prisma.inventory_itemsUncheckedCreateNestedManyWithoutPrinting_finishesInput;
};
export type printing_finishesCreateOrConnectWithoutPrice_snapshotsInput = {
    where: Prisma.printing_finishesWhereUniqueInput;
    create: Prisma.XOR<Prisma.printing_finishesCreateWithoutPrice_snapshotsInput, Prisma.printing_finishesUncheckedCreateWithoutPrice_snapshotsInput>;
};
export type printing_finishesUpsertWithoutPrice_snapshotsInput = {
    update: Prisma.XOR<Prisma.printing_finishesUpdateWithoutPrice_snapshotsInput, Prisma.printing_finishesUncheckedUpdateWithoutPrice_snapshotsInput>;
    create: Prisma.XOR<Prisma.printing_finishesCreateWithoutPrice_snapshotsInput, Prisma.printing_finishesUncheckedCreateWithoutPrice_snapshotsInput>;
    where?: Prisma.printing_finishesWhereInput;
};
export type printing_finishesUpdateToOneWithWhereWithoutPrice_snapshotsInput = {
    where?: Prisma.printing_finishesWhereInput;
    data: Prisma.XOR<Prisma.printing_finishesUpdateWithoutPrice_snapshotsInput, Prisma.printing_finishesUncheckedUpdateWithoutPrice_snapshotsInput>;
};
export type printing_finishesUpdateWithoutPrice_snapshotsInput = {
    finish?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_items?: Prisma.inventory_itemsUpdateManyWithoutPrinting_finishesNestedInput;
    card_printings?: Prisma.card_printingsUpdateOneRequiredWithoutPrinting_finishesNestedInput;
};
export type printing_finishesUncheckedUpdateWithoutPrice_snapshotsInput = {
    printing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    finish?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_items?: Prisma.inventory_itemsUncheckedUpdateManyWithoutPrinting_finishesNestedInput;
};
export type printing_finishesCreateManyCard_printingsInput = {
    finish: string;
    created_at?: Date | string;
};
export type printing_finishesUpdateWithoutCard_printingsInput = {
    finish?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_items?: Prisma.inventory_itemsUpdateManyWithoutPrinting_finishesNestedInput;
    price_snapshots?: Prisma.price_snapshotsUpdateManyWithoutPrinting_finishesNestedInput;
};
export type printing_finishesUncheckedUpdateWithoutCard_printingsInput = {
    finish?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_items?: Prisma.inventory_itemsUncheckedUpdateManyWithoutPrinting_finishesNestedInput;
    price_snapshots?: Prisma.price_snapshotsUncheckedUpdateManyWithoutPrinting_finishesNestedInput;
};
export type printing_finishesUncheckedUpdateManyWithoutCard_printingsInput = {
    finish?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type Printing_finishesCountOutputType
 */
export type Printing_finishesCountOutputType = {
    inventory_items: number;
    price_snapshots: number;
};
export type Printing_finishesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    inventory_items?: boolean | Printing_finishesCountOutputTypeCountInventory_itemsArgs;
    price_snapshots?: boolean | Printing_finishesCountOutputTypeCountPrice_snapshotsArgs;
};
/**
 * Printing_finishesCountOutputType without action
 */
export type Printing_finishesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Printing_finishesCountOutputType
     */
    select?: Prisma.Printing_finishesCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * Printing_finishesCountOutputType without action
 */
export type Printing_finishesCountOutputTypeCountInventory_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.inventory_itemsWhereInput;
};
/**
 * Printing_finishesCountOutputType without action
 */
export type Printing_finishesCountOutputTypeCountPrice_snapshotsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.price_snapshotsWhereInput;
};
export type printing_finishesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    printing_id?: boolean;
    finish?: boolean;
    created_at?: boolean;
    inventory_items?: boolean | Prisma.printing_finishes$inventory_itemsArgs<ExtArgs>;
    price_snapshots?: boolean | Prisma.printing_finishes$price_snapshotsArgs<ExtArgs>;
    card_printings?: boolean | Prisma.card_printingsDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.Printing_finishesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["printing_finishes"]>;
export type printing_finishesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    printing_id?: boolean;
    finish?: boolean;
    created_at?: boolean;
    card_printings?: boolean | Prisma.card_printingsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["printing_finishes"]>;
export type printing_finishesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    printing_id?: boolean;
    finish?: boolean;
    created_at?: boolean;
    card_printings?: boolean | Prisma.card_printingsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["printing_finishes"]>;
export type printing_finishesSelectScalar = {
    printing_id?: boolean;
    finish?: boolean;
    created_at?: boolean;
};
export type printing_finishesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"printing_id" | "finish" | "created_at", ExtArgs["result"]["printing_finishes"]>;
export type printing_finishesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    inventory_items?: boolean | Prisma.printing_finishes$inventory_itemsArgs<ExtArgs>;
    price_snapshots?: boolean | Prisma.printing_finishes$price_snapshotsArgs<ExtArgs>;
    card_printings?: boolean | Prisma.card_printingsDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.Printing_finishesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type printing_finishesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    card_printings?: boolean | Prisma.card_printingsDefaultArgs<ExtArgs>;
};
export type printing_finishesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    card_printings?: boolean | Prisma.card_printingsDefaultArgs<ExtArgs>;
};
export type $printing_finishesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "printing_finishes";
    objects: {
        inventory_items: Prisma.$inventory_itemsPayload<ExtArgs>[];
        price_snapshots: Prisma.$price_snapshotsPayload<ExtArgs>[];
        card_printings: Prisma.$card_printingsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        printing_id: string;
        finish: string;
        created_at: Date;
    }, ExtArgs["result"]["printing_finishes"]>;
    composites: {};
};
export type printing_finishesGetPayload<S extends boolean | null | undefined | printing_finishesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$printing_finishesPayload, S>;
export type printing_finishesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<printing_finishesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Printing_finishesCountAggregateInputType | true;
};
export interface printing_finishesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['printing_finishes'];
        meta: {
            name: 'printing_finishes';
        };
    };
    /**
     * Find zero or one Printing_finishes that matches the filter.
     * @param {printing_finishesFindUniqueArgs} args - Arguments to find a Printing_finishes
     * @example
     * // Get one Printing_finishes
     * const printing_finishes = await prisma.printing_finishes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends printing_finishesFindUniqueArgs>(args: Prisma.SelectSubset<T, printing_finishesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__printing_finishesClient<runtime.Types.Result.GetResult<Prisma.$printing_finishesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Printing_finishes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {printing_finishesFindUniqueOrThrowArgs} args - Arguments to find a Printing_finishes
     * @example
     * // Get one Printing_finishes
     * const printing_finishes = await prisma.printing_finishes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends printing_finishesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, printing_finishesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__printing_finishesClient<runtime.Types.Result.GetResult<Prisma.$printing_finishesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Printing_finishes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {printing_finishesFindFirstArgs} args - Arguments to find a Printing_finishes
     * @example
     * // Get one Printing_finishes
     * const printing_finishes = await prisma.printing_finishes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends printing_finishesFindFirstArgs>(args?: Prisma.SelectSubset<T, printing_finishesFindFirstArgs<ExtArgs>>): Prisma.Prisma__printing_finishesClient<runtime.Types.Result.GetResult<Prisma.$printing_finishesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Printing_finishes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {printing_finishesFindFirstOrThrowArgs} args - Arguments to find a Printing_finishes
     * @example
     * // Get one Printing_finishes
     * const printing_finishes = await prisma.printing_finishes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends printing_finishesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, printing_finishesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__printing_finishesClient<runtime.Types.Result.GetResult<Prisma.$printing_finishesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Printing_finishes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {printing_finishesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Printing_finishes
     * const printing_finishes = await prisma.printing_finishes.findMany()
     *
     * // Get first 10 Printing_finishes
     * const printing_finishes = await prisma.printing_finishes.findMany({ take: 10 })
     *
     * // Only select the `printing_id`
     * const printing_finishesWithPrinting_idOnly = await prisma.printing_finishes.findMany({ select: { printing_id: true } })
     *
     */
    findMany<T extends printing_finishesFindManyArgs>(args?: Prisma.SelectSubset<T, printing_finishesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$printing_finishesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Printing_finishes.
     * @param {printing_finishesCreateArgs} args - Arguments to create a Printing_finishes.
     * @example
     * // Create one Printing_finishes
     * const Printing_finishes = await prisma.printing_finishes.create({
     *   data: {
     *     // ... data to create a Printing_finishes
     *   }
     * })
     *
     */
    create<T extends printing_finishesCreateArgs>(args: Prisma.SelectSubset<T, printing_finishesCreateArgs<ExtArgs>>): Prisma.Prisma__printing_finishesClient<runtime.Types.Result.GetResult<Prisma.$printing_finishesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Printing_finishes.
     * @param {printing_finishesCreateManyArgs} args - Arguments to create many Printing_finishes.
     * @example
     * // Create many Printing_finishes
     * const printing_finishes = await prisma.printing_finishes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends printing_finishesCreateManyArgs>(args?: Prisma.SelectSubset<T, printing_finishesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Printing_finishes and returns the data saved in the database.
     * @param {printing_finishesCreateManyAndReturnArgs} args - Arguments to create many Printing_finishes.
     * @example
     * // Create many Printing_finishes
     * const printing_finishes = await prisma.printing_finishes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Printing_finishes and only return the `printing_id`
     * const printing_finishesWithPrinting_idOnly = await prisma.printing_finishes.createManyAndReturn({
     *   select: { printing_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends printing_finishesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, printing_finishesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$printing_finishesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Printing_finishes.
     * @param {printing_finishesDeleteArgs} args - Arguments to delete one Printing_finishes.
     * @example
     * // Delete one Printing_finishes
     * const Printing_finishes = await prisma.printing_finishes.delete({
     *   where: {
     *     // ... filter to delete one Printing_finishes
     *   }
     * })
     *
     */
    delete<T extends printing_finishesDeleteArgs>(args: Prisma.SelectSubset<T, printing_finishesDeleteArgs<ExtArgs>>): Prisma.Prisma__printing_finishesClient<runtime.Types.Result.GetResult<Prisma.$printing_finishesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Printing_finishes.
     * @param {printing_finishesUpdateArgs} args - Arguments to update one Printing_finishes.
     * @example
     * // Update one Printing_finishes
     * const printing_finishes = await prisma.printing_finishes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends printing_finishesUpdateArgs>(args: Prisma.SelectSubset<T, printing_finishesUpdateArgs<ExtArgs>>): Prisma.Prisma__printing_finishesClient<runtime.Types.Result.GetResult<Prisma.$printing_finishesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Printing_finishes.
     * @param {printing_finishesDeleteManyArgs} args - Arguments to filter Printing_finishes to delete.
     * @example
     * // Delete a few Printing_finishes
     * const { count } = await prisma.printing_finishes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends printing_finishesDeleteManyArgs>(args?: Prisma.SelectSubset<T, printing_finishesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Printing_finishes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {printing_finishesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Printing_finishes
     * const printing_finishes = await prisma.printing_finishes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends printing_finishesUpdateManyArgs>(args: Prisma.SelectSubset<T, printing_finishesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Printing_finishes and returns the data updated in the database.
     * @param {printing_finishesUpdateManyAndReturnArgs} args - Arguments to update many Printing_finishes.
     * @example
     * // Update many Printing_finishes
     * const printing_finishes = await prisma.printing_finishes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Printing_finishes and only return the `printing_id`
     * const printing_finishesWithPrinting_idOnly = await prisma.printing_finishes.updateManyAndReturn({
     *   select: { printing_id: true },
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
    updateManyAndReturn<T extends printing_finishesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, printing_finishesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$printing_finishesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Printing_finishes.
     * @param {printing_finishesUpsertArgs} args - Arguments to update or create a Printing_finishes.
     * @example
     * // Update or create a Printing_finishes
     * const printing_finishes = await prisma.printing_finishes.upsert({
     *   create: {
     *     // ... data to create a Printing_finishes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Printing_finishes we want to update
     *   }
     * })
     */
    upsert<T extends printing_finishesUpsertArgs>(args: Prisma.SelectSubset<T, printing_finishesUpsertArgs<ExtArgs>>): Prisma.Prisma__printing_finishesClient<runtime.Types.Result.GetResult<Prisma.$printing_finishesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Printing_finishes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {printing_finishesCountArgs} args - Arguments to filter Printing_finishes to count.
     * @example
     * // Count the number of Printing_finishes
     * const count = await prisma.printing_finishes.count({
     *   where: {
     *     // ... the filter for the Printing_finishes we want to count
     *   }
     * })
    **/
    count<T extends printing_finishesCountArgs>(args?: Prisma.Subset<T, printing_finishesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Printing_finishesCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Printing_finishes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Printing_finishesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Printing_finishesAggregateArgs>(args: Prisma.Subset<T, Printing_finishesAggregateArgs>): Prisma.PrismaPromise<GetPrinting_finishesAggregateType<T>>;
    /**
     * Group by Printing_finishes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {printing_finishesGroupByArgs} args - Group by arguments.
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
    groupBy<T extends printing_finishesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: printing_finishesGroupByArgs['orderBy'];
    } : {
        orderBy?: printing_finishesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, printing_finishesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrinting_finishesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the printing_finishes model
     */
    readonly fields: printing_finishesFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for printing_finishes.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__printing_finishesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    inventory_items<T extends Prisma.printing_finishes$inventory_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.printing_finishes$inventory_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$inventory_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    price_snapshots<T extends Prisma.printing_finishes$price_snapshotsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.printing_finishes$price_snapshotsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$price_snapshotsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    card_printings<T extends Prisma.card_printingsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.card_printingsDefaultArgs<ExtArgs>>): Prisma.Prisma__card_printingsClient<runtime.Types.Result.GetResult<Prisma.$card_printingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the printing_finishes model
 */
export interface printing_finishesFieldRefs {
    readonly printing_id: Prisma.FieldRef<"printing_finishes", 'String'>;
    readonly finish: Prisma.FieldRef<"printing_finishes", 'String'>;
    readonly created_at: Prisma.FieldRef<"printing_finishes", 'DateTime'>;
}
/**
 * printing_finishes findUnique
 */
export type printing_finishesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which printing_finishes to fetch.
     */
    where: Prisma.printing_finishesWhereUniqueInput;
};
/**
 * printing_finishes findUniqueOrThrow
 */
export type printing_finishesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which printing_finishes to fetch.
     */
    where: Prisma.printing_finishesWhereUniqueInput;
};
/**
 * printing_finishes findFirst
 */
export type printing_finishesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which printing_finishes to fetch.
     */
    where?: Prisma.printing_finishesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of printing_finishes to fetch.
     */
    orderBy?: Prisma.printing_finishesOrderByWithRelationInput | Prisma.printing_finishesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for printing_finishes.
     */
    cursor?: Prisma.printing_finishesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` printing_finishes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` printing_finishes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of printing_finishes.
     */
    distinct?: Prisma.Printing_finishesScalarFieldEnum | Prisma.Printing_finishesScalarFieldEnum[];
};
/**
 * printing_finishes findFirstOrThrow
 */
export type printing_finishesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which printing_finishes to fetch.
     */
    where?: Prisma.printing_finishesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of printing_finishes to fetch.
     */
    orderBy?: Prisma.printing_finishesOrderByWithRelationInput | Prisma.printing_finishesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for printing_finishes.
     */
    cursor?: Prisma.printing_finishesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` printing_finishes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` printing_finishes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of printing_finishes.
     */
    distinct?: Prisma.Printing_finishesScalarFieldEnum | Prisma.Printing_finishesScalarFieldEnum[];
};
/**
 * printing_finishes findMany
 */
export type printing_finishesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which printing_finishes to fetch.
     */
    where?: Prisma.printing_finishesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of printing_finishes to fetch.
     */
    orderBy?: Prisma.printing_finishesOrderByWithRelationInput | Prisma.printing_finishesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing printing_finishes.
     */
    cursor?: Prisma.printing_finishesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` printing_finishes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` printing_finishes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of printing_finishes.
     */
    distinct?: Prisma.Printing_finishesScalarFieldEnum | Prisma.Printing_finishesScalarFieldEnum[];
};
/**
 * printing_finishes create
 */
export type printing_finishesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a printing_finishes.
     */
    data: Prisma.XOR<Prisma.printing_finishesCreateInput, Prisma.printing_finishesUncheckedCreateInput>;
};
/**
 * printing_finishes createMany
 */
export type printing_finishesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many printing_finishes.
     */
    data: Prisma.printing_finishesCreateManyInput | Prisma.printing_finishesCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * printing_finishes createManyAndReturn
 */
export type printing_finishesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the printing_finishes
     */
    select?: Prisma.printing_finishesSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the printing_finishes
     */
    omit?: Prisma.printing_finishesOmit<ExtArgs> | null;
    /**
     * The data used to create many printing_finishes.
     */
    data: Prisma.printing_finishesCreateManyInput | Prisma.printing_finishesCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.printing_finishesIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * printing_finishes update
 */
export type printing_finishesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a printing_finishes.
     */
    data: Prisma.XOR<Prisma.printing_finishesUpdateInput, Prisma.printing_finishesUncheckedUpdateInput>;
    /**
     * Choose, which printing_finishes to update.
     */
    where: Prisma.printing_finishesWhereUniqueInput;
};
/**
 * printing_finishes updateMany
 */
export type printing_finishesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update printing_finishes.
     */
    data: Prisma.XOR<Prisma.printing_finishesUpdateManyMutationInput, Prisma.printing_finishesUncheckedUpdateManyInput>;
    /**
     * Filter which printing_finishes to update
     */
    where?: Prisma.printing_finishesWhereInput;
    /**
     * Limit how many printing_finishes to update.
     */
    limit?: number;
};
/**
 * printing_finishes updateManyAndReturn
 */
export type printing_finishesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the printing_finishes
     */
    select?: Prisma.printing_finishesSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the printing_finishes
     */
    omit?: Prisma.printing_finishesOmit<ExtArgs> | null;
    /**
     * The data used to update printing_finishes.
     */
    data: Prisma.XOR<Prisma.printing_finishesUpdateManyMutationInput, Prisma.printing_finishesUncheckedUpdateManyInput>;
    /**
     * Filter which printing_finishes to update
     */
    where?: Prisma.printing_finishesWhereInput;
    /**
     * Limit how many printing_finishes to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.printing_finishesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * printing_finishes upsert
 */
export type printing_finishesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the printing_finishes to update in case it exists.
     */
    where: Prisma.printing_finishesWhereUniqueInput;
    /**
     * In case the printing_finishes found by the `where` argument doesn't exist, create a new printing_finishes with this data.
     */
    create: Prisma.XOR<Prisma.printing_finishesCreateInput, Prisma.printing_finishesUncheckedCreateInput>;
    /**
     * In case the printing_finishes was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.printing_finishesUpdateInput, Prisma.printing_finishesUncheckedUpdateInput>;
};
/**
 * printing_finishes delete
 */
export type printing_finishesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which printing_finishes to delete.
     */
    where: Prisma.printing_finishesWhereUniqueInput;
};
/**
 * printing_finishes deleteMany
 */
export type printing_finishesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which printing_finishes to delete
     */
    where?: Prisma.printing_finishesWhereInput;
    /**
     * Limit how many printing_finishes to delete.
     */
    limit?: number;
};
/**
 * printing_finishes.inventory_items
 */
export type printing_finishes$inventory_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * printing_finishes.price_snapshots
 */
export type printing_finishes$price_snapshotsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the price_snapshots
     */
    select?: Prisma.price_snapshotsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the price_snapshots
     */
    omit?: Prisma.price_snapshotsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.price_snapshotsInclude<ExtArgs> | null;
    where?: Prisma.price_snapshotsWhereInput;
    orderBy?: Prisma.price_snapshotsOrderByWithRelationInput | Prisma.price_snapshotsOrderByWithRelationInput[];
    cursor?: Prisma.price_snapshotsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Price_snapshotsScalarFieldEnum | Prisma.Price_snapshotsScalarFieldEnum[];
};
/**
 * printing_finishes without action
 */
export type printing_finishesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
