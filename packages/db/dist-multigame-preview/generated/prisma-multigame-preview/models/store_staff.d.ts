import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model store_staff
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type store_staffModel = runtime.Types.Result.DefaultSelection<Prisma.$store_staffPayload>;
export type AggregateStore_staff = {
    _count: Store_staffCountAggregateOutputType | null;
    _min: Store_staffMinAggregateOutputType | null;
    _max: Store_staffMaxAggregateOutputType | null;
};
export type Store_staffMinAggregateOutputType = {
    id: string | null;
    store_id: string | null;
    user_id: string | null;
    role: string | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Store_staffMaxAggregateOutputType = {
    id: string | null;
    store_id: string | null;
    user_id: string | null;
    role: string | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Store_staffCountAggregateOutputType = {
    id: number;
    store_id: number;
    user_id: number;
    role: number;
    status: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Store_staffMinAggregateInputType = {
    id?: true;
    store_id?: true;
    user_id?: true;
    role?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
};
export type Store_staffMaxAggregateInputType = {
    id?: true;
    store_id?: true;
    user_id?: true;
    role?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
};
export type Store_staffCountAggregateInputType = {
    id?: true;
    store_id?: true;
    user_id?: true;
    role?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Store_staffAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which store_staff to aggregate.
     */
    where?: Prisma.store_staffWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of store_staffs to fetch.
     */
    orderBy?: Prisma.store_staffOrderByWithRelationInput | Prisma.store_staffOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.store_staffWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` store_staffs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` store_staffs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned store_staffs
    **/
    _count?: true | Store_staffCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Store_staffMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Store_staffMaxAggregateInputType;
};
export type GetStore_staffAggregateType<T extends Store_staffAggregateArgs> = {
    [P in keyof T & keyof AggregateStore_staff]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStore_staff[P]> : Prisma.GetScalarType<T[P], AggregateStore_staff[P]>;
};
export type store_staffGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.store_staffWhereInput;
    orderBy?: Prisma.store_staffOrderByWithAggregationInput | Prisma.store_staffOrderByWithAggregationInput[];
    by: Prisma.Store_staffScalarFieldEnum[] | Prisma.Store_staffScalarFieldEnum;
    having?: Prisma.store_staffScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Store_staffCountAggregateInputType | true;
    _min?: Store_staffMinAggregateInputType;
    _max?: Store_staffMaxAggregateInputType;
};
export type Store_staffGroupByOutputType = {
    id: string;
    store_id: string;
    user_id: string;
    role: string;
    status: string;
    created_at: Date;
    updated_at: Date;
    _count: Store_staffCountAggregateOutputType | null;
    _min: Store_staffMinAggregateOutputType | null;
    _max: Store_staffMaxAggregateOutputType | null;
};
export type GetStore_staffGroupByPayload<T extends store_staffGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Store_staffGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Store_staffGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Store_staffGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Store_staffGroupByOutputType[P]>;
}>>;
export type store_staffWhereInput = {
    AND?: Prisma.store_staffWhereInput | Prisma.store_staffWhereInput[];
    OR?: Prisma.store_staffWhereInput[];
    NOT?: Prisma.store_staffWhereInput | Prisma.store_staffWhereInput[];
    id?: Prisma.UuidFilter<"store_staff"> | string;
    store_id?: Prisma.UuidFilter<"store_staff"> | string;
    user_id?: Prisma.UuidFilter<"store_staff"> | string;
    role?: Prisma.StringFilter<"store_staff"> | string;
    status?: Prisma.StringFilter<"store_staff"> | string;
    created_at?: Prisma.DateTimeFilter<"store_staff"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"store_staff"> | Date | string;
    stores?: Prisma.XOR<Prisma.StoresScalarRelationFilter, Prisma.storesWhereInput>;
    user_profiles?: Prisma.XOR<Prisma.User_profilesScalarRelationFilter, Prisma.user_profilesWhereInput>;
    transaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staff?: Prisma.Transaction_item_custodyListRelationFilter;
    transaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staff?: Prisma.Transaction_item_custodyListRelationFilter;
    transaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staff?: Prisma.Transaction_item_custodyListRelationFilter;
};
export type store_staffOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    stores?: Prisma.storesOrderByWithRelationInput;
    user_profiles?: Prisma.user_profilesOrderByWithRelationInput;
    transaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyOrderByRelationAggregateInput;
    transaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyOrderByRelationAggregateInput;
    transaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyOrderByRelationAggregateInput;
};
export type store_staffWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    id_store_id?: Prisma.store_staffIdStore_idCompoundUniqueInput;
    store_id_user_id?: Prisma.store_staffStore_idUser_idCompoundUniqueInput;
    AND?: Prisma.store_staffWhereInput | Prisma.store_staffWhereInput[];
    OR?: Prisma.store_staffWhereInput[];
    NOT?: Prisma.store_staffWhereInput | Prisma.store_staffWhereInput[];
    store_id?: Prisma.UuidFilter<"store_staff"> | string;
    user_id?: Prisma.UuidFilter<"store_staff"> | string;
    role?: Prisma.StringFilter<"store_staff"> | string;
    status?: Prisma.StringFilter<"store_staff"> | string;
    created_at?: Prisma.DateTimeFilter<"store_staff"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"store_staff"> | Date | string;
    stores?: Prisma.XOR<Prisma.StoresScalarRelationFilter, Prisma.storesWhereInput>;
    user_profiles?: Prisma.XOR<Prisma.User_profilesScalarRelationFilter, Prisma.user_profilesWhereInput>;
    transaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staff?: Prisma.Transaction_item_custodyListRelationFilter;
    transaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staff?: Prisma.Transaction_item_custodyListRelationFilter;
    transaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staff?: Prisma.Transaction_item_custodyListRelationFilter;
}, "id" | "id_store_id" | "store_id_user_id">;
export type store_staffOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.store_staffCountOrderByAggregateInput;
    _max?: Prisma.store_staffMaxOrderByAggregateInput;
    _min?: Prisma.store_staffMinOrderByAggregateInput;
};
export type store_staffScalarWhereWithAggregatesInput = {
    AND?: Prisma.store_staffScalarWhereWithAggregatesInput | Prisma.store_staffScalarWhereWithAggregatesInput[];
    OR?: Prisma.store_staffScalarWhereWithAggregatesInput[];
    NOT?: Prisma.store_staffScalarWhereWithAggregatesInput | Prisma.store_staffScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"store_staff"> | string;
    store_id?: Prisma.UuidWithAggregatesFilter<"store_staff"> | string;
    user_id?: Prisma.UuidWithAggregatesFilter<"store_staff"> | string;
    role?: Prisma.StringWithAggregatesFilter<"store_staff"> | string;
    status?: Prisma.StringWithAggregatesFilter<"store_staff"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"store_staff"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"store_staff"> | Date | string;
};
export type store_staffCreateInput = {
    id?: string;
    role?: string;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    stores: Prisma.storesCreateNestedOneWithoutStore_staffInput;
    user_profiles: Prisma.user_profilesCreateNestedOneWithoutStore_staffInput;
    transaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyCreateNestedManyWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput;
    transaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyCreateNestedManyWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput;
    transaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyCreateNestedManyWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput;
};
export type store_staffUncheckedCreateInput = {
    id?: string;
    store_id: string;
    user_id: string;
    role?: string;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    transaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyUncheckedCreateNestedManyWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput;
    transaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyUncheckedCreateNestedManyWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput;
    transaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyUncheckedCreateNestedManyWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput;
};
export type store_staffUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    stores?: Prisma.storesUpdateOneRequiredWithoutStore_staffNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneRequiredWithoutStore_staffNestedInput;
    transaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyUpdateManyWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffNestedInput;
    transaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyUpdateManyWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffNestedInput;
    transaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyUpdateManyWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffNestedInput;
};
export type store_staffUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyUncheckedUpdateManyWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffNestedInput;
    transaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyUncheckedUpdateManyWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffNestedInput;
    transaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyUncheckedUpdateManyWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffNestedInput;
};
export type store_staffCreateManyInput = {
    id?: string;
    store_id: string;
    user_id: string;
    role?: string;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type store_staffUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type store_staffUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type store_staffIdStore_idCompoundUniqueInput = {
    id: string;
    store_id: string;
};
export type store_staffStore_idUser_idCompoundUniqueInput = {
    store_id: string;
    user_id: string;
};
export type store_staffCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type store_staffMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type store_staffMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type Store_staffListRelationFilter = {
    every?: Prisma.store_staffWhereInput;
    some?: Prisma.store_staffWhereInput;
    none?: Prisma.store_staffWhereInput;
};
export type store_staffOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Store_staffNullableScalarRelationFilter = {
    is?: Prisma.store_staffWhereInput | null;
    isNot?: Prisma.store_staffWhereInput | null;
};
export type store_staffCreateNestedManyWithoutStoresInput = {
    create?: Prisma.XOR<Prisma.store_staffCreateWithoutStoresInput, Prisma.store_staffUncheckedCreateWithoutStoresInput> | Prisma.store_staffCreateWithoutStoresInput[] | Prisma.store_staffUncheckedCreateWithoutStoresInput[];
    connectOrCreate?: Prisma.store_staffCreateOrConnectWithoutStoresInput | Prisma.store_staffCreateOrConnectWithoutStoresInput[];
    createMany?: Prisma.store_staffCreateManyStoresInputEnvelope;
    connect?: Prisma.store_staffWhereUniqueInput | Prisma.store_staffWhereUniqueInput[];
};
export type store_staffUncheckedCreateNestedManyWithoutStoresInput = {
    create?: Prisma.XOR<Prisma.store_staffCreateWithoutStoresInput, Prisma.store_staffUncheckedCreateWithoutStoresInput> | Prisma.store_staffCreateWithoutStoresInput[] | Prisma.store_staffUncheckedCreateWithoutStoresInput[];
    connectOrCreate?: Prisma.store_staffCreateOrConnectWithoutStoresInput | Prisma.store_staffCreateOrConnectWithoutStoresInput[];
    createMany?: Prisma.store_staffCreateManyStoresInputEnvelope;
    connect?: Prisma.store_staffWhereUniqueInput | Prisma.store_staffWhereUniqueInput[];
};
export type store_staffUpdateManyWithoutStoresNestedInput = {
    create?: Prisma.XOR<Prisma.store_staffCreateWithoutStoresInput, Prisma.store_staffUncheckedCreateWithoutStoresInput> | Prisma.store_staffCreateWithoutStoresInput[] | Prisma.store_staffUncheckedCreateWithoutStoresInput[];
    connectOrCreate?: Prisma.store_staffCreateOrConnectWithoutStoresInput | Prisma.store_staffCreateOrConnectWithoutStoresInput[];
    upsert?: Prisma.store_staffUpsertWithWhereUniqueWithoutStoresInput | Prisma.store_staffUpsertWithWhereUniqueWithoutStoresInput[];
    createMany?: Prisma.store_staffCreateManyStoresInputEnvelope;
    set?: Prisma.store_staffWhereUniqueInput | Prisma.store_staffWhereUniqueInput[];
    disconnect?: Prisma.store_staffWhereUniqueInput | Prisma.store_staffWhereUniqueInput[];
    delete?: Prisma.store_staffWhereUniqueInput | Prisma.store_staffWhereUniqueInput[];
    connect?: Prisma.store_staffWhereUniqueInput | Prisma.store_staffWhereUniqueInput[];
    update?: Prisma.store_staffUpdateWithWhereUniqueWithoutStoresInput | Prisma.store_staffUpdateWithWhereUniqueWithoutStoresInput[];
    updateMany?: Prisma.store_staffUpdateManyWithWhereWithoutStoresInput | Prisma.store_staffUpdateManyWithWhereWithoutStoresInput[];
    deleteMany?: Prisma.store_staffScalarWhereInput | Prisma.store_staffScalarWhereInput[];
};
export type store_staffUncheckedUpdateManyWithoutStoresNestedInput = {
    create?: Prisma.XOR<Prisma.store_staffCreateWithoutStoresInput, Prisma.store_staffUncheckedCreateWithoutStoresInput> | Prisma.store_staffCreateWithoutStoresInput[] | Prisma.store_staffUncheckedCreateWithoutStoresInput[];
    connectOrCreate?: Prisma.store_staffCreateOrConnectWithoutStoresInput | Prisma.store_staffCreateOrConnectWithoutStoresInput[];
    upsert?: Prisma.store_staffUpsertWithWhereUniqueWithoutStoresInput | Prisma.store_staffUpsertWithWhereUniqueWithoutStoresInput[];
    createMany?: Prisma.store_staffCreateManyStoresInputEnvelope;
    set?: Prisma.store_staffWhereUniqueInput | Prisma.store_staffWhereUniqueInput[];
    disconnect?: Prisma.store_staffWhereUniqueInput | Prisma.store_staffWhereUniqueInput[];
    delete?: Prisma.store_staffWhereUniqueInput | Prisma.store_staffWhereUniqueInput[];
    connect?: Prisma.store_staffWhereUniqueInput | Prisma.store_staffWhereUniqueInput[];
    update?: Prisma.store_staffUpdateWithWhereUniqueWithoutStoresInput | Prisma.store_staffUpdateWithWhereUniqueWithoutStoresInput[];
    updateMany?: Prisma.store_staffUpdateManyWithWhereWithoutStoresInput | Prisma.store_staffUpdateManyWithWhereWithoutStoresInput[];
    deleteMany?: Prisma.store_staffScalarWhereInput | Prisma.store_staffScalarWhereInput[];
};
export type store_staffCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput = {
    create?: Prisma.XOR<Prisma.store_staffCreateWithoutTransaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput, Prisma.store_staffUncheckedCreateWithoutTransaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput>;
    connectOrCreate?: Prisma.store_staffCreateOrConnectWithoutTransaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput;
    connect?: Prisma.store_staffWhereUniqueInput;
};
export type store_staffCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput = {
    create?: Prisma.XOR<Prisma.store_staffCreateWithoutTransaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput, Prisma.store_staffUncheckedCreateWithoutTransaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput>;
    connectOrCreate?: Prisma.store_staffCreateOrConnectWithoutTransaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput;
    connect?: Prisma.store_staffWhereUniqueInput;
};
export type store_staffCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput = {
    create?: Prisma.XOR<Prisma.store_staffCreateWithoutTransaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput, Prisma.store_staffUncheckedCreateWithoutTransaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput>;
    connectOrCreate?: Prisma.store_staffCreateOrConnectWithoutTransaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput;
    connect?: Prisma.store_staffWhereUniqueInput;
};
export type store_staffUpdateOneWithoutTransaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staffNestedInput = {
    create?: Prisma.XOR<Prisma.store_staffCreateWithoutTransaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput, Prisma.store_staffUncheckedCreateWithoutTransaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput>;
    connectOrCreate?: Prisma.store_staffCreateOrConnectWithoutTransaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput;
    upsert?: Prisma.store_staffUpsertWithoutTransaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput;
    disconnect?: Prisma.store_staffWhereInput | boolean;
    delete?: Prisma.store_staffWhereInput | boolean;
    connect?: Prisma.store_staffWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.store_staffUpdateToOneWithWhereWithoutTransaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput, Prisma.store_staffUpdateWithoutTransaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput>, Prisma.store_staffUncheckedUpdateWithoutTransaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput>;
};
export type store_staffUpdateOneWithoutTransaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staffNestedInput = {
    create?: Prisma.XOR<Prisma.store_staffCreateWithoutTransaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput, Prisma.store_staffUncheckedCreateWithoutTransaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput>;
    connectOrCreate?: Prisma.store_staffCreateOrConnectWithoutTransaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput;
    upsert?: Prisma.store_staffUpsertWithoutTransaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput;
    disconnect?: Prisma.store_staffWhereInput | boolean;
    delete?: Prisma.store_staffWhereInput | boolean;
    connect?: Prisma.store_staffWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.store_staffUpdateToOneWithWhereWithoutTransaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput, Prisma.store_staffUpdateWithoutTransaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput>, Prisma.store_staffUncheckedUpdateWithoutTransaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput>;
};
export type store_staffUpdateOneWithoutTransaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staffNestedInput = {
    create?: Prisma.XOR<Prisma.store_staffCreateWithoutTransaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput, Prisma.store_staffUncheckedCreateWithoutTransaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput>;
    connectOrCreate?: Prisma.store_staffCreateOrConnectWithoutTransaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput;
    upsert?: Prisma.store_staffUpsertWithoutTransaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput;
    disconnect?: Prisma.store_staffWhereInput | boolean;
    delete?: Prisma.store_staffWhereInput | boolean;
    connect?: Prisma.store_staffWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.store_staffUpdateToOneWithWhereWithoutTransaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput, Prisma.store_staffUpdateWithoutTransaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput>, Prisma.store_staffUncheckedUpdateWithoutTransaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput>;
};
export type store_staffCreateNestedManyWithoutUser_profilesInput = {
    create?: Prisma.XOR<Prisma.store_staffCreateWithoutUser_profilesInput, Prisma.store_staffUncheckedCreateWithoutUser_profilesInput> | Prisma.store_staffCreateWithoutUser_profilesInput[] | Prisma.store_staffUncheckedCreateWithoutUser_profilesInput[];
    connectOrCreate?: Prisma.store_staffCreateOrConnectWithoutUser_profilesInput | Prisma.store_staffCreateOrConnectWithoutUser_profilesInput[];
    createMany?: Prisma.store_staffCreateManyUser_profilesInputEnvelope;
    connect?: Prisma.store_staffWhereUniqueInput | Prisma.store_staffWhereUniqueInput[];
};
export type store_staffUncheckedCreateNestedManyWithoutUser_profilesInput = {
    create?: Prisma.XOR<Prisma.store_staffCreateWithoutUser_profilesInput, Prisma.store_staffUncheckedCreateWithoutUser_profilesInput> | Prisma.store_staffCreateWithoutUser_profilesInput[] | Prisma.store_staffUncheckedCreateWithoutUser_profilesInput[];
    connectOrCreate?: Prisma.store_staffCreateOrConnectWithoutUser_profilesInput | Prisma.store_staffCreateOrConnectWithoutUser_profilesInput[];
    createMany?: Prisma.store_staffCreateManyUser_profilesInputEnvelope;
    connect?: Prisma.store_staffWhereUniqueInput | Prisma.store_staffWhereUniqueInput[];
};
export type store_staffUpdateManyWithoutUser_profilesNestedInput = {
    create?: Prisma.XOR<Prisma.store_staffCreateWithoutUser_profilesInput, Prisma.store_staffUncheckedCreateWithoutUser_profilesInput> | Prisma.store_staffCreateWithoutUser_profilesInput[] | Prisma.store_staffUncheckedCreateWithoutUser_profilesInput[];
    connectOrCreate?: Prisma.store_staffCreateOrConnectWithoutUser_profilesInput | Prisma.store_staffCreateOrConnectWithoutUser_profilesInput[];
    upsert?: Prisma.store_staffUpsertWithWhereUniqueWithoutUser_profilesInput | Prisma.store_staffUpsertWithWhereUniqueWithoutUser_profilesInput[];
    createMany?: Prisma.store_staffCreateManyUser_profilesInputEnvelope;
    set?: Prisma.store_staffWhereUniqueInput | Prisma.store_staffWhereUniqueInput[];
    disconnect?: Prisma.store_staffWhereUniqueInput | Prisma.store_staffWhereUniqueInput[];
    delete?: Prisma.store_staffWhereUniqueInput | Prisma.store_staffWhereUniqueInput[];
    connect?: Prisma.store_staffWhereUniqueInput | Prisma.store_staffWhereUniqueInput[];
    update?: Prisma.store_staffUpdateWithWhereUniqueWithoutUser_profilesInput | Prisma.store_staffUpdateWithWhereUniqueWithoutUser_profilesInput[];
    updateMany?: Prisma.store_staffUpdateManyWithWhereWithoutUser_profilesInput | Prisma.store_staffUpdateManyWithWhereWithoutUser_profilesInput[];
    deleteMany?: Prisma.store_staffScalarWhereInput | Prisma.store_staffScalarWhereInput[];
};
export type store_staffUncheckedUpdateManyWithoutUser_profilesNestedInput = {
    create?: Prisma.XOR<Prisma.store_staffCreateWithoutUser_profilesInput, Prisma.store_staffUncheckedCreateWithoutUser_profilesInput> | Prisma.store_staffCreateWithoutUser_profilesInput[] | Prisma.store_staffUncheckedCreateWithoutUser_profilesInput[];
    connectOrCreate?: Prisma.store_staffCreateOrConnectWithoutUser_profilesInput | Prisma.store_staffCreateOrConnectWithoutUser_profilesInput[];
    upsert?: Prisma.store_staffUpsertWithWhereUniqueWithoutUser_profilesInput | Prisma.store_staffUpsertWithWhereUniqueWithoutUser_profilesInput[];
    createMany?: Prisma.store_staffCreateManyUser_profilesInputEnvelope;
    set?: Prisma.store_staffWhereUniqueInput | Prisma.store_staffWhereUniqueInput[];
    disconnect?: Prisma.store_staffWhereUniqueInput | Prisma.store_staffWhereUniqueInput[];
    delete?: Prisma.store_staffWhereUniqueInput | Prisma.store_staffWhereUniqueInput[];
    connect?: Prisma.store_staffWhereUniqueInput | Prisma.store_staffWhereUniqueInput[];
    update?: Prisma.store_staffUpdateWithWhereUniqueWithoutUser_profilesInput | Prisma.store_staffUpdateWithWhereUniqueWithoutUser_profilesInput[];
    updateMany?: Prisma.store_staffUpdateManyWithWhereWithoutUser_profilesInput | Prisma.store_staffUpdateManyWithWhereWithoutUser_profilesInput[];
    deleteMany?: Prisma.store_staffScalarWhereInput | Prisma.store_staffScalarWhereInput[];
};
export type store_staffCreateWithoutStoresInput = {
    id?: string;
    role?: string;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_profiles: Prisma.user_profilesCreateNestedOneWithoutStore_staffInput;
    transaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyCreateNestedManyWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput;
    transaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyCreateNestedManyWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput;
    transaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyCreateNestedManyWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput;
};
export type store_staffUncheckedCreateWithoutStoresInput = {
    id?: string;
    user_id: string;
    role?: string;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    transaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyUncheckedCreateNestedManyWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput;
    transaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyUncheckedCreateNestedManyWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput;
    transaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyUncheckedCreateNestedManyWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput;
};
export type store_staffCreateOrConnectWithoutStoresInput = {
    where: Prisma.store_staffWhereUniqueInput;
    create: Prisma.XOR<Prisma.store_staffCreateWithoutStoresInput, Prisma.store_staffUncheckedCreateWithoutStoresInput>;
};
export type store_staffCreateManyStoresInputEnvelope = {
    data: Prisma.store_staffCreateManyStoresInput | Prisma.store_staffCreateManyStoresInput[];
    skipDuplicates?: boolean;
};
export type store_staffUpsertWithWhereUniqueWithoutStoresInput = {
    where: Prisma.store_staffWhereUniqueInput;
    update: Prisma.XOR<Prisma.store_staffUpdateWithoutStoresInput, Prisma.store_staffUncheckedUpdateWithoutStoresInput>;
    create: Prisma.XOR<Prisma.store_staffCreateWithoutStoresInput, Prisma.store_staffUncheckedCreateWithoutStoresInput>;
};
export type store_staffUpdateWithWhereUniqueWithoutStoresInput = {
    where: Prisma.store_staffWhereUniqueInput;
    data: Prisma.XOR<Prisma.store_staffUpdateWithoutStoresInput, Prisma.store_staffUncheckedUpdateWithoutStoresInput>;
};
export type store_staffUpdateManyWithWhereWithoutStoresInput = {
    where: Prisma.store_staffScalarWhereInput;
    data: Prisma.XOR<Prisma.store_staffUpdateManyMutationInput, Prisma.store_staffUncheckedUpdateManyWithoutStoresInput>;
};
export type store_staffScalarWhereInput = {
    AND?: Prisma.store_staffScalarWhereInput | Prisma.store_staffScalarWhereInput[];
    OR?: Prisma.store_staffScalarWhereInput[];
    NOT?: Prisma.store_staffScalarWhereInput | Prisma.store_staffScalarWhereInput[];
    id?: Prisma.UuidFilter<"store_staff"> | string;
    store_id?: Prisma.UuidFilter<"store_staff"> | string;
    user_id?: Prisma.UuidFilter<"store_staff"> | string;
    role?: Prisma.StringFilter<"store_staff"> | string;
    status?: Prisma.StringFilter<"store_staff"> | string;
    created_at?: Prisma.DateTimeFilter<"store_staff"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"store_staff"> | Date | string;
};
export type store_staffCreateWithoutTransaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput = {
    id?: string;
    role?: string;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    stores: Prisma.storesCreateNestedOneWithoutStore_staffInput;
    user_profiles: Prisma.user_profilesCreateNestedOneWithoutStore_staffInput;
    transaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyCreateNestedManyWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput;
    transaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyCreateNestedManyWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput;
};
export type store_staffUncheckedCreateWithoutTransaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput = {
    id?: string;
    store_id: string;
    user_id: string;
    role?: string;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    transaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyUncheckedCreateNestedManyWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput;
    transaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyUncheckedCreateNestedManyWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput;
};
export type store_staffCreateOrConnectWithoutTransaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput = {
    where: Prisma.store_staffWhereUniqueInput;
    create: Prisma.XOR<Prisma.store_staffCreateWithoutTransaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput, Prisma.store_staffUncheckedCreateWithoutTransaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput>;
};
export type store_staffCreateWithoutTransaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput = {
    id?: string;
    role?: string;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    stores: Prisma.storesCreateNestedOneWithoutStore_staffInput;
    user_profiles: Prisma.user_profilesCreateNestedOneWithoutStore_staffInput;
    transaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyCreateNestedManyWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput;
    transaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyCreateNestedManyWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput;
};
export type store_staffUncheckedCreateWithoutTransaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput = {
    id?: string;
    store_id: string;
    user_id: string;
    role?: string;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    transaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyUncheckedCreateNestedManyWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput;
    transaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyUncheckedCreateNestedManyWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput;
};
export type store_staffCreateOrConnectWithoutTransaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput = {
    where: Prisma.store_staffWhereUniqueInput;
    create: Prisma.XOR<Prisma.store_staffCreateWithoutTransaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput, Prisma.store_staffUncheckedCreateWithoutTransaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput>;
};
export type store_staffCreateWithoutTransaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput = {
    id?: string;
    role?: string;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    stores: Prisma.storesCreateNestedOneWithoutStore_staffInput;
    user_profiles: Prisma.user_profilesCreateNestedOneWithoutStore_staffInput;
    transaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyCreateNestedManyWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput;
    transaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyCreateNestedManyWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput;
};
export type store_staffUncheckedCreateWithoutTransaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput = {
    id?: string;
    store_id: string;
    user_id: string;
    role?: string;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    transaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyUncheckedCreateNestedManyWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput;
    transaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyUncheckedCreateNestedManyWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput;
};
export type store_staffCreateOrConnectWithoutTransaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput = {
    where: Prisma.store_staffWhereUniqueInput;
    create: Prisma.XOR<Prisma.store_staffCreateWithoutTransaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput, Prisma.store_staffUncheckedCreateWithoutTransaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput>;
};
export type store_staffUpsertWithoutTransaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput = {
    update: Prisma.XOR<Prisma.store_staffUpdateWithoutTransaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput, Prisma.store_staffUncheckedUpdateWithoutTransaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput>;
    create: Prisma.XOR<Prisma.store_staffCreateWithoutTransaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput, Prisma.store_staffUncheckedCreateWithoutTransaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput>;
    where?: Prisma.store_staffWhereInput;
};
export type store_staffUpdateToOneWithWhereWithoutTransaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput = {
    where?: Prisma.store_staffWhereInput;
    data: Prisma.XOR<Prisma.store_staffUpdateWithoutTransaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput, Prisma.store_staffUncheckedUpdateWithoutTransaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput>;
};
export type store_staffUpdateWithoutTransaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    stores?: Prisma.storesUpdateOneRequiredWithoutStore_staffNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneRequiredWithoutStore_staffNestedInput;
    transaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyUpdateManyWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffNestedInput;
    transaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyUpdateManyWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffNestedInput;
};
export type store_staffUncheckedUpdateWithoutTransaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyUncheckedUpdateManyWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffNestedInput;
    transaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyUncheckedUpdateManyWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffNestedInput;
};
export type store_staffUpsertWithoutTransaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput = {
    update: Prisma.XOR<Prisma.store_staffUpdateWithoutTransaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput, Prisma.store_staffUncheckedUpdateWithoutTransaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput>;
    create: Prisma.XOR<Prisma.store_staffCreateWithoutTransaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput, Prisma.store_staffUncheckedCreateWithoutTransaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput>;
    where?: Prisma.store_staffWhereInput;
};
export type store_staffUpdateToOneWithWhereWithoutTransaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput = {
    where?: Prisma.store_staffWhereInput;
    data: Prisma.XOR<Prisma.store_staffUpdateWithoutTransaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput, Prisma.store_staffUncheckedUpdateWithoutTransaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput>;
};
export type store_staffUpdateWithoutTransaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    stores?: Prisma.storesUpdateOneRequiredWithoutStore_staffNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneRequiredWithoutStore_staffNestedInput;
    transaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyUpdateManyWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffNestedInput;
    transaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyUpdateManyWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffNestedInput;
};
export type store_staffUncheckedUpdateWithoutTransaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyUncheckedUpdateManyWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffNestedInput;
    transaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyUncheckedUpdateManyWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffNestedInput;
};
export type store_staffUpsertWithoutTransaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput = {
    update: Prisma.XOR<Prisma.store_staffUpdateWithoutTransaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput, Prisma.store_staffUncheckedUpdateWithoutTransaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput>;
    create: Prisma.XOR<Prisma.store_staffCreateWithoutTransaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput, Prisma.store_staffUncheckedCreateWithoutTransaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput>;
    where?: Prisma.store_staffWhereInput;
};
export type store_staffUpdateToOneWithWhereWithoutTransaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput = {
    where?: Prisma.store_staffWhereInput;
    data: Prisma.XOR<Prisma.store_staffUpdateWithoutTransaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput, Prisma.store_staffUncheckedUpdateWithoutTransaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput>;
};
export type store_staffUpdateWithoutTransaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    stores?: Prisma.storesUpdateOneRequiredWithoutStore_staffNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneRequiredWithoutStore_staffNestedInput;
    transaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyUpdateManyWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffNestedInput;
    transaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyUpdateManyWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffNestedInput;
};
export type store_staffUncheckedUpdateWithoutTransaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyUncheckedUpdateManyWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffNestedInput;
    transaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyUncheckedUpdateManyWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffNestedInput;
};
export type store_staffCreateWithoutUser_profilesInput = {
    id?: string;
    role?: string;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    stores: Prisma.storesCreateNestedOneWithoutStore_staffInput;
    transaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyCreateNestedManyWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput;
    transaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyCreateNestedManyWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput;
    transaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyCreateNestedManyWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput;
};
export type store_staffUncheckedCreateWithoutUser_profilesInput = {
    id?: string;
    store_id: string;
    role?: string;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    transaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyUncheckedCreateNestedManyWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput;
    transaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyUncheckedCreateNestedManyWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput;
    transaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyUncheckedCreateNestedManyWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput;
};
export type store_staffCreateOrConnectWithoutUser_profilesInput = {
    where: Prisma.store_staffWhereUniqueInput;
    create: Prisma.XOR<Prisma.store_staffCreateWithoutUser_profilesInput, Prisma.store_staffUncheckedCreateWithoutUser_profilesInput>;
};
export type store_staffCreateManyUser_profilesInputEnvelope = {
    data: Prisma.store_staffCreateManyUser_profilesInput | Prisma.store_staffCreateManyUser_profilesInput[];
    skipDuplicates?: boolean;
};
export type store_staffUpsertWithWhereUniqueWithoutUser_profilesInput = {
    where: Prisma.store_staffWhereUniqueInput;
    update: Prisma.XOR<Prisma.store_staffUpdateWithoutUser_profilesInput, Prisma.store_staffUncheckedUpdateWithoutUser_profilesInput>;
    create: Prisma.XOR<Prisma.store_staffCreateWithoutUser_profilesInput, Prisma.store_staffUncheckedCreateWithoutUser_profilesInput>;
};
export type store_staffUpdateWithWhereUniqueWithoutUser_profilesInput = {
    where: Prisma.store_staffWhereUniqueInput;
    data: Prisma.XOR<Prisma.store_staffUpdateWithoutUser_profilesInput, Prisma.store_staffUncheckedUpdateWithoutUser_profilesInput>;
};
export type store_staffUpdateManyWithWhereWithoutUser_profilesInput = {
    where: Prisma.store_staffScalarWhereInput;
    data: Prisma.XOR<Prisma.store_staffUpdateManyMutationInput, Prisma.store_staffUncheckedUpdateManyWithoutUser_profilesInput>;
};
export type store_staffCreateManyStoresInput = {
    id?: string;
    user_id: string;
    role?: string;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type store_staffUpdateWithoutStoresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user_profiles?: Prisma.user_profilesUpdateOneRequiredWithoutStore_staffNestedInput;
    transaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyUpdateManyWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffNestedInput;
    transaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyUpdateManyWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffNestedInput;
    transaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyUpdateManyWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffNestedInput;
};
export type store_staffUncheckedUpdateWithoutStoresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyUncheckedUpdateManyWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffNestedInput;
    transaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyUncheckedUpdateManyWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffNestedInput;
    transaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyUncheckedUpdateManyWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffNestedInput;
};
export type store_staffUncheckedUpdateManyWithoutStoresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type store_staffCreateManyUser_profilesInput = {
    id?: string;
    store_id: string;
    role?: string;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type store_staffUpdateWithoutUser_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    stores?: Prisma.storesUpdateOneRequiredWithoutStore_staffNestedInput;
    transaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyUpdateManyWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffNestedInput;
    transaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyUpdateManyWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffNestedInput;
    transaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyUpdateManyWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffNestedInput;
};
export type store_staffUncheckedUpdateWithoutUser_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyUncheckedUpdateManyWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffNestedInput;
    transaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyUncheckedUpdateManyWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffNestedInput;
    transaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staff?: Prisma.transaction_item_custodyUncheckedUpdateManyWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffNestedInput;
};
export type store_staffUncheckedUpdateManyWithoutUser_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type Store_staffCountOutputType
 */
export type Store_staffCountOutputType = {
    transaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staff: number;
    transaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staff: number;
    transaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staff: number;
};
export type Store_staffCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    transaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staff?: boolean | Store_staffCountOutputTypeCountTransaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staffArgs;
    transaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staff?: boolean | Store_staffCountOutputTypeCountTransaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staffArgs;
    transaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staff?: boolean | Store_staffCountOutputTypeCountTransaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staffArgs;
};
/**
 * Store_staffCountOutputType without action
 */
export type Store_staffCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store_staffCountOutputType
     */
    select?: Prisma.Store_staffCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * Store_staffCountOutputType without action
 */
export type Store_staffCountOutputTypeCountTransaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staffArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.transaction_item_custodyWhereInput;
};
/**
 * Store_staffCountOutputType without action
 */
export type Store_staffCountOutputTypeCountTransaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staffArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.transaction_item_custodyWhereInput;
};
/**
 * Store_staffCountOutputType without action
 */
export type Store_staffCountOutputTypeCountTransaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staffArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.transaction_item_custodyWhereInput;
};
export type store_staffSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    store_id?: boolean;
    user_id?: boolean;
    role?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    stores?: boolean | Prisma.storesDefaultArgs<ExtArgs>;
    user_profiles?: boolean | Prisma.user_profilesDefaultArgs<ExtArgs>;
    transaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staff?: boolean | Prisma.store_staff$transaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staffArgs<ExtArgs>;
    transaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staff?: boolean | Prisma.store_staff$transaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staffArgs<ExtArgs>;
    transaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staff?: boolean | Prisma.store_staff$transaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staffArgs<ExtArgs>;
    _count?: boolean | Prisma.Store_staffCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["store_staff"]>;
export type store_staffSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    store_id?: boolean;
    user_id?: boolean;
    role?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    stores?: boolean | Prisma.storesDefaultArgs<ExtArgs>;
    user_profiles?: boolean | Prisma.user_profilesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["store_staff"]>;
export type store_staffSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    store_id?: boolean;
    user_id?: boolean;
    role?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    stores?: boolean | Prisma.storesDefaultArgs<ExtArgs>;
    user_profiles?: boolean | Prisma.user_profilesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["store_staff"]>;
export type store_staffSelectScalar = {
    id?: boolean;
    store_id?: boolean;
    user_id?: boolean;
    role?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type store_staffOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "store_id" | "user_id" | "role" | "status" | "created_at" | "updated_at", ExtArgs["result"]["store_staff"]>;
export type store_staffInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    stores?: boolean | Prisma.storesDefaultArgs<ExtArgs>;
    user_profiles?: boolean | Prisma.user_profilesDefaultArgs<ExtArgs>;
    transaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staff?: boolean | Prisma.store_staff$transaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staffArgs<ExtArgs>;
    transaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staff?: boolean | Prisma.store_staff$transaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staffArgs<ExtArgs>;
    transaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staff?: boolean | Prisma.store_staff$transaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staffArgs<ExtArgs>;
    _count?: boolean | Prisma.Store_staffCountOutputTypeDefaultArgs<ExtArgs>;
};
export type store_staffIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    stores?: boolean | Prisma.storesDefaultArgs<ExtArgs>;
    user_profiles?: boolean | Prisma.user_profilesDefaultArgs<ExtArgs>;
};
export type store_staffIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    stores?: boolean | Prisma.storesDefaultArgs<ExtArgs>;
    user_profiles?: boolean | Prisma.user_profilesDefaultArgs<ExtArgs>;
};
export type $store_staffPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "store_staff";
    objects: {
        stores: Prisma.$storesPayload<ExtArgs>;
        user_profiles: Prisma.$user_profilesPayload<ExtArgs>;
        transaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staff: Prisma.$transaction_item_custodyPayload<ExtArgs>[];
        transaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staff: Prisma.$transaction_item_custodyPayload<ExtArgs>[];
        transaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staff: Prisma.$transaction_item_custodyPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        store_id: string;
        user_id: string;
        role: string;
        status: string;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["store_staff"]>;
    composites: {};
};
export type store_staffGetPayload<S extends boolean | null | undefined | store_staffDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$store_staffPayload, S>;
export type store_staffCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<store_staffFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Store_staffCountAggregateInputType | true;
};
export interface store_staffDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['store_staff'];
        meta: {
            name: 'store_staff';
        };
    };
    /**
     * Find zero or one Store_staff that matches the filter.
     * @param {store_staffFindUniqueArgs} args - Arguments to find a Store_staff
     * @example
     * // Get one Store_staff
     * const store_staff = await prisma.store_staff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends store_staffFindUniqueArgs>(args: Prisma.SelectSubset<T, store_staffFindUniqueArgs<ExtArgs>>): Prisma.Prisma__store_staffClient<runtime.Types.Result.GetResult<Prisma.$store_staffPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Store_staff that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {store_staffFindUniqueOrThrowArgs} args - Arguments to find a Store_staff
     * @example
     * // Get one Store_staff
     * const store_staff = await prisma.store_staff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends store_staffFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, store_staffFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__store_staffClient<runtime.Types.Result.GetResult<Prisma.$store_staffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Store_staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {store_staffFindFirstArgs} args - Arguments to find a Store_staff
     * @example
     * // Get one Store_staff
     * const store_staff = await prisma.store_staff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends store_staffFindFirstArgs>(args?: Prisma.SelectSubset<T, store_staffFindFirstArgs<ExtArgs>>): Prisma.Prisma__store_staffClient<runtime.Types.Result.GetResult<Prisma.$store_staffPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Store_staff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {store_staffFindFirstOrThrowArgs} args - Arguments to find a Store_staff
     * @example
     * // Get one Store_staff
     * const store_staff = await prisma.store_staff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends store_staffFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, store_staffFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__store_staffClient<runtime.Types.Result.GetResult<Prisma.$store_staffPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Store_staffs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {store_staffFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Store_staffs
     * const store_staffs = await prisma.store_staff.findMany()
     *
     * // Get first 10 Store_staffs
     * const store_staffs = await prisma.store_staff.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const store_staffWithIdOnly = await prisma.store_staff.findMany({ select: { id: true } })
     *
     */
    findMany<T extends store_staffFindManyArgs>(args?: Prisma.SelectSubset<T, store_staffFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$store_staffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Store_staff.
     * @param {store_staffCreateArgs} args - Arguments to create a Store_staff.
     * @example
     * // Create one Store_staff
     * const Store_staff = await prisma.store_staff.create({
     *   data: {
     *     // ... data to create a Store_staff
     *   }
     * })
     *
     */
    create<T extends store_staffCreateArgs>(args: Prisma.SelectSubset<T, store_staffCreateArgs<ExtArgs>>): Prisma.Prisma__store_staffClient<runtime.Types.Result.GetResult<Prisma.$store_staffPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Store_staffs.
     * @param {store_staffCreateManyArgs} args - Arguments to create many Store_staffs.
     * @example
     * // Create many Store_staffs
     * const store_staff = await prisma.store_staff.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends store_staffCreateManyArgs>(args?: Prisma.SelectSubset<T, store_staffCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Store_staffs and returns the data saved in the database.
     * @param {store_staffCreateManyAndReturnArgs} args - Arguments to create many Store_staffs.
     * @example
     * // Create many Store_staffs
     * const store_staff = await prisma.store_staff.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Store_staffs and only return the `id`
     * const store_staffWithIdOnly = await prisma.store_staff.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends store_staffCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, store_staffCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$store_staffPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Store_staff.
     * @param {store_staffDeleteArgs} args - Arguments to delete one Store_staff.
     * @example
     * // Delete one Store_staff
     * const Store_staff = await prisma.store_staff.delete({
     *   where: {
     *     // ... filter to delete one Store_staff
     *   }
     * })
     *
     */
    delete<T extends store_staffDeleteArgs>(args: Prisma.SelectSubset<T, store_staffDeleteArgs<ExtArgs>>): Prisma.Prisma__store_staffClient<runtime.Types.Result.GetResult<Prisma.$store_staffPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Store_staff.
     * @param {store_staffUpdateArgs} args - Arguments to update one Store_staff.
     * @example
     * // Update one Store_staff
     * const store_staff = await prisma.store_staff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends store_staffUpdateArgs>(args: Prisma.SelectSubset<T, store_staffUpdateArgs<ExtArgs>>): Prisma.Prisma__store_staffClient<runtime.Types.Result.GetResult<Prisma.$store_staffPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Store_staffs.
     * @param {store_staffDeleteManyArgs} args - Arguments to filter Store_staffs to delete.
     * @example
     * // Delete a few Store_staffs
     * const { count } = await prisma.store_staff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends store_staffDeleteManyArgs>(args?: Prisma.SelectSubset<T, store_staffDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Store_staffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {store_staffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Store_staffs
     * const store_staff = await prisma.store_staff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends store_staffUpdateManyArgs>(args: Prisma.SelectSubset<T, store_staffUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Store_staffs and returns the data updated in the database.
     * @param {store_staffUpdateManyAndReturnArgs} args - Arguments to update many Store_staffs.
     * @example
     * // Update many Store_staffs
     * const store_staff = await prisma.store_staff.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Store_staffs and only return the `id`
     * const store_staffWithIdOnly = await prisma.store_staff.updateManyAndReturn({
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
    updateManyAndReturn<T extends store_staffUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, store_staffUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$store_staffPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Store_staff.
     * @param {store_staffUpsertArgs} args - Arguments to update or create a Store_staff.
     * @example
     * // Update or create a Store_staff
     * const store_staff = await prisma.store_staff.upsert({
     *   create: {
     *     // ... data to create a Store_staff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Store_staff we want to update
     *   }
     * })
     */
    upsert<T extends store_staffUpsertArgs>(args: Prisma.SelectSubset<T, store_staffUpsertArgs<ExtArgs>>): Prisma.Prisma__store_staffClient<runtime.Types.Result.GetResult<Prisma.$store_staffPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Store_staffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {store_staffCountArgs} args - Arguments to filter Store_staffs to count.
     * @example
     * // Count the number of Store_staffs
     * const count = await prisma.store_staff.count({
     *   where: {
     *     // ... the filter for the Store_staffs we want to count
     *   }
     * })
    **/
    count<T extends store_staffCountArgs>(args?: Prisma.Subset<T, store_staffCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Store_staffCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Store_staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Store_staffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Store_staffAggregateArgs>(args: Prisma.Subset<T, Store_staffAggregateArgs>): Prisma.PrismaPromise<GetStore_staffAggregateType<T>>;
    /**
     * Group by Store_staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {store_staffGroupByArgs} args - Group by arguments.
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
    groupBy<T extends store_staffGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: store_staffGroupByArgs['orderBy'];
    } : {
        orderBy?: store_staffGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, store_staffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStore_staffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the store_staff model
     */
    readonly fields: store_staffFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for store_staff.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__store_staffClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    stores<T extends Prisma.storesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.storesDefaultArgs<ExtArgs>>): Prisma.Prisma__storesClient<runtime.Types.Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user_profiles<T extends Prisma.user_profilesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.user_profilesDefaultArgs<ExtArgs>>): Prisma.Prisma__user_profilesClient<runtime.Types.Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    transaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staff<T extends Prisma.store_staff$transaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staffArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.store_staff$transaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staffArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$transaction_item_custodyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    transaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staff<T extends Prisma.store_staff$transaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staffArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.store_staff$transaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staffArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$transaction_item_custodyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    transaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staff<T extends Prisma.store_staff$transaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staffArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.store_staff$transaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staffArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$transaction_item_custodyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the store_staff model
 */
export interface store_staffFieldRefs {
    readonly id: Prisma.FieldRef<"store_staff", 'String'>;
    readonly store_id: Prisma.FieldRef<"store_staff", 'String'>;
    readonly user_id: Prisma.FieldRef<"store_staff", 'String'>;
    readonly role: Prisma.FieldRef<"store_staff", 'String'>;
    readonly status: Prisma.FieldRef<"store_staff", 'String'>;
    readonly created_at: Prisma.FieldRef<"store_staff", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"store_staff", 'DateTime'>;
}
/**
 * store_staff findUnique
 */
export type store_staffFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which store_staff to fetch.
     */
    where: Prisma.store_staffWhereUniqueInput;
};
/**
 * store_staff findUniqueOrThrow
 */
export type store_staffFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which store_staff to fetch.
     */
    where: Prisma.store_staffWhereUniqueInput;
};
/**
 * store_staff findFirst
 */
export type store_staffFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which store_staff to fetch.
     */
    where?: Prisma.store_staffWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of store_staffs to fetch.
     */
    orderBy?: Prisma.store_staffOrderByWithRelationInput | Prisma.store_staffOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for store_staffs.
     */
    cursor?: Prisma.store_staffWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` store_staffs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` store_staffs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of store_staffs.
     */
    distinct?: Prisma.Store_staffScalarFieldEnum | Prisma.Store_staffScalarFieldEnum[];
};
/**
 * store_staff findFirstOrThrow
 */
export type store_staffFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which store_staff to fetch.
     */
    where?: Prisma.store_staffWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of store_staffs to fetch.
     */
    orderBy?: Prisma.store_staffOrderByWithRelationInput | Prisma.store_staffOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for store_staffs.
     */
    cursor?: Prisma.store_staffWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` store_staffs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` store_staffs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of store_staffs.
     */
    distinct?: Prisma.Store_staffScalarFieldEnum | Prisma.Store_staffScalarFieldEnum[];
};
/**
 * store_staff findMany
 */
export type store_staffFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which store_staffs to fetch.
     */
    where?: Prisma.store_staffWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of store_staffs to fetch.
     */
    orderBy?: Prisma.store_staffOrderByWithRelationInput | Prisma.store_staffOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing store_staffs.
     */
    cursor?: Prisma.store_staffWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` store_staffs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` store_staffs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of store_staffs.
     */
    distinct?: Prisma.Store_staffScalarFieldEnum | Prisma.Store_staffScalarFieldEnum[];
};
/**
 * store_staff create
 */
export type store_staffCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a store_staff.
     */
    data: Prisma.XOR<Prisma.store_staffCreateInput, Prisma.store_staffUncheckedCreateInput>;
};
/**
 * store_staff createMany
 */
export type store_staffCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many store_staffs.
     */
    data: Prisma.store_staffCreateManyInput | Prisma.store_staffCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * store_staff createManyAndReturn
 */
export type store_staffCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store_staff
     */
    select?: Prisma.store_staffSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the store_staff
     */
    omit?: Prisma.store_staffOmit<ExtArgs> | null;
    /**
     * The data used to create many store_staffs.
     */
    data: Prisma.store_staffCreateManyInput | Prisma.store_staffCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.store_staffIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * store_staff update
 */
export type store_staffUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a store_staff.
     */
    data: Prisma.XOR<Prisma.store_staffUpdateInput, Prisma.store_staffUncheckedUpdateInput>;
    /**
     * Choose, which store_staff to update.
     */
    where: Prisma.store_staffWhereUniqueInput;
};
/**
 * store_staff updateMany
 */
export type store_staffUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update store_staffs.
     */
    data: Prisma.XOR<Prisma.store_staffUpdateManyMutationInput, Prisma.store_staffUncheckedUpdateManyInput>;
    /**
     * Filter which store_staffs to update
     */
    where?: Prisma.store_staffWhereInput;
    /**
     * Limit how many store_staffs to update.
     */
    limit?: number;
};
/**
 * store_staff updateManyAndReturn
 */
export type store_staffUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store_staff
     */
    select?: Prisma.store_staffSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the store_staff
     */
    omit?: Prisma.store_staffOmit<ExtArgs> | null;
    /**
     * The data used to update store_staffs.
     */
    data: Prisma.XOR<Prisma.store_staffUpdateManyMutationInput, Prisma.store_staffUncheckedUpdateManyInput>;
    /**
     * Filter which store_staffs to update
     */
    where?: Prisma.store_staffWhereInput;
    /**
     * Limit how many store_staffs to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.store_staffIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * store_staff upsert
 */
export type store_staffUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the store_staff to update in case it exists.
     */
    where: Prisma.store_staffWhereUniqueInput;
    /**
     * In case the store_staff found by the `where` argument doesn't exist, create a new store_staff with this data.
     */
    create: Prisma.XOR<Prisma.store_staffCreateInput, Prisma.store_staffUncheckedCreateInput>;
    /**
     * In case the store_staff was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.store_staffUpdateInput, Prisma.store_staffUncheckedUpdateInput>;
};
/**
 * store_staff delete
 */
export type store_staffDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which store_staff to delete.
     */
    where: Prisma.store_staffWhereUniqueInput;
};
/**
 * store_staff deleteMany
 */
export type store_staffDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which store_staffs to delete
     */
    where?: Prisma.store_staffWhereInput;
    /**
     * Limit how many store_staffs to delete.
     */
    limit?: number;
};
/**
 * store_staff.transaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staff
 */
export type store_staff$transaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staffArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_item_custody
     */
    select?: Prisma.transaction_item_custodySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the transaction_item_custody
     */
    omit?: Prisma.transaction_item_custodyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.transaction_item_custodyInclude<ExtArgs> | null;
    where?: Prisma.transaction_item_custodyWhereInput;
    orderBy?: Prisma.transaction_item_custodyOrderByWithRelationInput | Prisma.transaction_item_custodyOrderByWithRelationInput[];
    cursor?: Prisma.transaction_item_custodyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Transaction_item_custodyScalarFieldEnum | Prisma.Transaction_item_custodyScalarFieldEnum[];
};
/**
 * store_staff.transaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staff
 */
export type store_staff$transaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staffArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_item_custody
     */
    select?: Prisma.transaction_item_custodySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the transaction_item_custody
     */
    omit?: Prisma.transaction_item_custodyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.transaction_item_custodyInclude<ExtArgs> | null;
    where?: Prisma.transaction_item_custodyWhereInput;
    orderBy?: Prisma.transaction_item_custodyOrderByWithRelationInput | Prisma.transaction_item_custodyOrderByWithRelationInput[];
    cursor?: Prisma.transaction_item_custodyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Transaction_item_custodyScalarFieldEnum | Prisma.Transaction_item_custodyScalarFieldEnum[];
};
/**
 * store_staff.transaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staff
 */
export type store_staff$transaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staffArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_item_custody
     */
    select?: Prisma.transaction_item_custodySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the transaction_item_custody
     */
    omit?: Prisma.transaction_item_custodyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.transaction_item_custodyInclude<ExtArgs> | null;
    where?: Prisma.transaction_item_custodyWhereInput;
    orderBy?: Prisma.transaction_item_custodyOrderByWithRelationInput | Prisma.transaction_item_custodyOrderByWithRelationInput[];
    cursor?: Prisma.transaction_item_custodyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Transaction_item_custodyScalarFieldEnum | Prisma.Transaction_item_custodyScalarFieldEnum[];
};
/**
 * store_staff without action
 */
export type store_staffDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
