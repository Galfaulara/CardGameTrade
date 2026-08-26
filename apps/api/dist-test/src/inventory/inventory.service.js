"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var InventoryService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryService = void 0;
const node_crypto_1 = require("node:crypto");
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
const storage_service_1 = require("../storage/storage.service");
let InventoryService = InventoryService_1 = class InventoryService {
    database;
    storage;
    assertInventoryItemIsMutable(item) {
        if (item.status ===
            "sold" ||
            item.status ===
                "removed") {
            throw new common_1.BadRequestException("Historical inventory items cannot be modified.");
        }
    }
    logger = new common_1.Logger(InventoryService_1.name);
    constructor(database, storage) {
        this.database = database;
        this.storage = storage;
    }
    getValidatedImageExtension(file) {
        if (file.size <= 0 ||
            file.buffer.length === 0) {
            throw new common_1.BadRequestException("The uploaded photo is empty.");
        }
        const maximumSize = 6 * 1024 * 1024;
        if (file.size > maximumSize) {
            throw new common_1.BadRequestException("Inventory photos may not exceed 6 MB.");
        }
        const buffer = file.buffer;
        const isJpeg = buffer.length >= 3 &&
            buffer[0] === 0xff &&
            buffer[1] === 0xd8 &&
            buffer[2] === 0xff;
        const isPng = buffer.length >= 8 &&
            buffer[0] === 0x89 &&
            buffer[1] === 0x50 &&
            buffer[2] === 0x4e &&
            buffer[3] === 0x47 &&
            buffer[4] === 0x0d &&
            buffer[5] === 0x0a &&
            buffer[6] === 0x1a &&
            buffer[7] === 0x0a;
        const isWebp = buffer.length >= 12 &&
            buffer
                .subarray(0, 4)
                .toString("ascii") === "RIFF" &&
            buffer
                .subarray(8, 12)
                .toString("ascii") === "WEBP";
        if (isJpeg &&
            file.mimetype === "image/jpeg") {
            return "jpg";
        }
        if (isPng &&
            file.mimetype === "image/png") {
            return "png";
        }
        if (isWebp &&
            file.mimetype === "image/webp") {
            return "webp";
        }
        throw new common_1.BadRequestException("Only valid JPEG, PNG, or WebP image files are allowed.");
    }
    async addSignedUrlToPhoto(photo) {
        try {
            const signedUrl = await this.storage.createSignedUrl(photo.storage_key);
            return {
                ...photo,
                signed_url: signedUrl,
            };
        }
        catch {
            this.logger.warn(`Could not create signed URL for inventory photo ${photo.id}.`);
            return {
                ...photo,
                signed_url: null,
            };
        }
    }
    async getUserInventory(userId) {
        const items = await this.database.client.inventory_items.findMany({
            where: {
                owner_user_id: userId,
                status: {
                    in: [
                        "available",
                        "not_for_trade",
                        "reserved",
                        "in_trade",
                    ],
                },
            },
            select: {
                id: true,
                printing_id: true,
                finish: true,
                collection_id: true,
                condition: true,
                language_code: true,
                quantity: true,
                is_signed: true,
                is_altered: true,
                is_graded: true,
                grading_company: true,
                grade: true,
                certification_number: true,
                acquired_at: true,
                acquired_price: true,
                status: true,
                notes: true,
                created_at: true,
                updated_at: true,
                collections: {
                    select: {
                        id: true,
                        name: true,
                        visibility: true,
                    },
                },
                inventory_item_photos: {
                    select: {
                        id: true,
                        storage_provider: true,
                        storage_key: true,
                        public_url: true,
                        sort_order: true,
                        is_primary: true,
                    },
                    orderBy: {
                        sort_order: "asc",
                    },
                },
                printing_finishes: {
                    select: {
                        finish: true,
                        card_printings: {
                            select: {
                                id: true,
                                collector_number: true,
                                language_code: true,
                                printed_name: true,
                                rarity: true,
                                artist_name: true,
                                treatment: true,
                                image_small_uri: true,
                                image_normal_uri: true,
                                image_large_uri: true,
                                canonical_cards: {
                                    select: {
                                        id: true,
                                        name: true,
                                        mana_cost: true,
                                        type_line: true,
                                    },
                                },
                                card_sets: {
                                    select: {
                                        id: true,
                                        code: true,
                                        name: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
            orderBy: {
                created_at: "desc",
            },
        });
        return Promise.all(items.map(async (item) => {
            const { printing_finishes, ...inventoryItem } = item;
            const photos = await Promise.all(item.inventory_item_photos.map((photo) => this.addSignedUrlToPhoto(photo)));
            return {
                ...inventoryItem,
                inventory_item_photos: photos,
                printing: {
                    ...printing_finishes.card_printings,
                    finish: printing_finishes.finish,
                },
            };
        }));
    }
    async getUserInventoryItem(userId, inventoryItemId) {
        const item = await this.database.client.inventory_items.findFirst({
            where: {
                id: inventoryItemId,
                owner_user_id: userId,
            },
            select: {
                id: true,
                printing_id: true,
                finish: true,
                collection_id: true,
                condition: true,
                language_code: true,
                quantity: true,
                is_signed: true,
                is_altered: true,
                is_graded: true,
                grading_company: true,
                grade: true,
                certification_number: true,
                acquired_at: true,
                acquired_price: true,
                status: true,
                notes: true,
                created_at: true,
                updated_at: true,
                collections: {
                    select: {
                        id: true,
                        name: true,
                        visibility: true,
                    },
                },
                inventory_item_photos: {
                    select: {
                        id: true,
                        storage_provider: true,
                        storage_key: true,
                        public_url: true,
                        sort_order: true,
                        is_primary: true,
                    },
                    orderBy: {
                        sort_order: "asc",
                    },
                },
                printing_finishes: {
                    select: {
                        finish: true,
                        card_printings: {
                            select: {
                                id: true,
                                collector_number: true,
                                language_code: true,
                                printed_name: true,
                                rarity: true,
                                artist_name: true,
                                treatment: true,
                                image_small_uri: true,
                                image_normal_uri: true,
                                image_large_uri: true,
                                canonical_cards: {
                                    select: {
                                        id: true,
                                        name: true,
                                        mana_cost: true,
                                        type_line: true,
                                    },
                                },
                                card_sets: {
                                    select: {
                                        id: true,
                                        code: true,
                                        name: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
        if (!item) {
            throw new common_1.NotFoundException("Inventory item was not found or does not belong to this user.");
        }
        const { printing_finishes, ...inventoryItem } = item;
        const photos = await Promise.all(item.inventory_item_photos.map((photo) => this.addSignedUrlToPhoto(photo)));
        return {
            ...inventoryItem,
            inventory_item_photos: photos,
            printing: {
                ...printing_finishes.card_printings,
                finish: printing_finishes.finish,
            },
        };
    }
    async getUserCollections(userId) {
        const user = await this.database.client.user_profiles.findUnique({
            where: {
                id: userId,
            },
            select: {
                id: true,
            },
        });
        if (!user) {
            throw new common_1.NotFoundException("User was not found.");
        }
        return this.database.client.collections.findMany({
            where: {
                user_id: userId,
            },
            select: {
                id: true,
                name: true,
                description: true,
                visibility: true,
                created_at: true,
                updated_at: true,
                _count: {
                    select: {
                        inventory_items: true,
                    },
                },
            },
            orderBy: {
                created_at: "asc",
            },
        });
    }
    async createUserCollection(userId, input) {
        const user = await this.database.client.user_profiles.findUnique({
            where: {
                id: userId,
            },
            select: {
                id: true,
                status: true,
            },
        });
        if (!user) {
            throw new common_1.NotFoundException("User was not found.");
        }
        if (user.status !== "active") {
            throw new common_1.ForbiddenException("Collections cannot be created for an inactive user.");
        }
        const existing = await this.database.client.collections.findFirst({
            where: {
                user_id: userId,
                name: input.name,
            },
            select: {
                id: true,
            },
        });
        if (existing) {
            throw new common_1.ConflictException("A collection with this name already exists for this user.");
        }
        return this.database.client.collections.create({
            data: {
                user_id: userId,
                name: input.name,
                description: input.description ?? null,
                visibility: input.visibility,
            },
        });
    }
    async setUserInventoryCollection(userId, inventoryItemId, input) {
        const inventoryItem = await this.database.client.inventory_items.findFirst({
            where: {
                id: inventoryItemId,
                owner_user_id: userId,
            },
            select: {
                id: true,
                status: true,
            },
        });
        if (!inventoryItem) {
            throw new common_1.NotFoundException("Inventory item was not found or does not belong to this user.");
        }
        this.assertInventoryItemIsMutable(inventoryItem);
        if (input.collectionId) {
            const collection = await this.database.client.collections.findFirst({
                where: {
                    id: input.collectionId,
                    user_id: userId,
                },
                select: {
                    id: true,
                },
            });
            if (!collection) {
                throw new common_1.BadRequestException("The selected collection does not exist or does not belong to this user.");
            }
        }
        await this.database.client.inventory_items.update({
            where: {
                id: inventoryItemId,
            },
            data: {
                collection_id: input.collectionId,
                updated_at: new Date(),
            },
        });
        return this.getUserInventoryItem(userId, inventoryItemId);
    }
    async createUserInventoryItem(userId, input) {
        const user = await this.database.client.user_profiles.findUnique({
            where: {
                id: userId,
            },
            select: {
                id: true,
                status: true,
            },
        });
        if (!user) {
            throw new common_1.NotFoundException("User was not found.");
        }
        if (user.status !== "active") {
            throw new common_1.ForbiddenException("Inventory cannot be added to an inactive user.");
        }
        const printingFinish = await this.database.client.printing_finishes.findFirst({
            where: {
                printing_id: input.printingId,
                finish: input.finish,
            },
            select: {
                finish: true,
                card_printings: {
                    select: {
                        id: true,
                        language_code: true,
                        is_digital: true,
                    },
                },
            },
        });
        if (!printingFinish) {
            throw new common_1.BadRequestException("The selected finish is not valid for this printing.");
        }
        if (printingFinish
            .card_printings
            .is_digital) {
            throw new common_1.BadRequestException("Digital printings cannot be registered as physical inventory.");
        }
        if (input.collectionId) {
            const collection = await this.database.client.collections.findFirst({
                where: {
                    id: input.collectionId,
                    user_id: userId,
                },
                select: {
                    id: true,
                },
            });
            if (!collection) {
                throw new common_1.BadRequestException("The selected collection does not exist or does not belong to this user.");
            }
        }
        const created = await this.database.client.inventory_items.create({
            data: {
                printing_id: input.printingId,
                finish: input.finish,
                owner_user_id: userId,
                owner_store_id: null,
                collection_id: input.collectionId ??
                    null,
                condition: input.condition,
                language_code: printingFinish
                    .card_printings
                    .language_code,
                quantity: input.quantity,
                is_signed: input.isSigned,
                is_altered: input.isAltered,
                is_graded: input.isGraded,
                grading_company: input.isGraded
                    ? input.gradingCompany ??
                        null
                    : null,
                grade: input.isGraded
                    ? input.grade ??
                        null
                    : null,
                certification_number: input.isGraded
                    ? input.certificationNumber ??
                        null
                    : null,
                acquired_at: input.acquiredAt ??
                    null,
                acquired_price: input.acquiredPrice ??
                    null,
                status: "available",
                notes: input.notes ??
                    null,
            },
            select: {
                id: true,
            },
        });
        return this.getUserInventoryItem(userId, created.id);
    }
    async updateUserInventoryItem(userId, inventoryItemId, input) {
        const existing = await this.database.client.inventory_items.findFirst({
            where: {
                id: inventoryItemId,
                owner_user_id: userId,
            },
            select: {
                id: true,
                is_graded: true,
                grading_company: true,
                grade: true,
                certification_number: true,
                status: true,
            },
        });
        if (!existing) {
            throw new common_1.NotFoundException("Inventory item was not found or does not belong to this user.");
        }
        this.assertInventoryItemIsMutable(existing);
        const finalIsGraded = input.isGraded ??
            existing.is_graded;
        const finalGradingCompany = input.isGraded === false
            ? null
            : input.gradingCompany !== undefined
                ? input.gradingCompany
                : existing.grading_company;
        const finalGrade = input.isGraded === false
            ? null
            : input.grade !== undefined
                ? input.grade
                : existing.grade;
        const finalCertificationNumber = input.isGraded === false
            ? null
            : input.certificationNumber !== undefined
                ? input.certificationNumber
                : existing.certification_number;
        if (finalIsGraded &&
            (!finalGradingCompany ||
                !finalGrade)) {
            throw new common_1.BadRequestException("A graded card must include a grading company and grade.");
        }
        if (!finalIsGraded &&
            (finalGradingCompany ||
                finalGrade ||
                finalCertificationNumber)) {
            throw new common_1.BadRequestException("Grading information cannot be stored for an ungraded card.");
        }
        await this.database.client.inventory_items.update({
            where: {
                id: inventoryItemId,
            },
            data: {
                ...(input.condition !== undefined
                    ? {
                        condition: input.condition,
                    }
                    : {}),
                ...(input.quantity !== undefined
                    ? {
                        quantity: input.quantity,
                    }
                    : {}),
                ...(input.isSigned !== undefined
                    ? {
                        is_signed: input.isSigned,
                    }
                    : {}),
                ...(input.isAltered !== undefined
                    ? {
                        is_altered: input.isAltered,
                    }
                    : {}),
                ...(input.acquiredAt !== undefined
                    ? {
                        acquired_at: input.acquiredAt,
                    }
                    : {}),
                ...(input.acquiredPrice !== undefined
                    ? {
                        acquired_price: input.acquiredPrice,
                    }
                    : {}),
                ...(input.notes !== undefined
                    ? {
                        notes: input.notes,
                    }
                    : {}),
                is_graded: finalIsGraded,
                grading_company: finalGradingCompany,
                grade: finalGrade,
                certification_number: finalCertificationNumber,
                updated_at: new Date(),
            },
        });
        return this.getUserInventoryItem(userId, inventoryItemId);
    }
    async uploadUserInventoryPhoto(userId, inventoryItemId, input, file) {
        if (!file) {
            throw new common_1.BadRequestException("A photo file is required.");
        }
        const inventoryItem = await this.database.client.inventory_items.findFirst({
            where: {
                id: inventoryItemId,
                owner_user_id: userId,
            },
            select: {
                id: true,
                status: true,
            },
        });
        if (!inventoryItem) {
            throw new common_1.NotFoundException("Inventory item was not found or does not belong to this user.");
        }
        this.assertInventoryItemIsMutable(inventoryItem);
        const extension = this.getValidatedImageExtension(file);
        const storageKey = `users/${userId}/inventory/${inventoryItemId}/${(0, node_crypto_1.randomUUID)()}.${extension}`;
        await this.storage.upload({
            key: storageKey,
            buffer: file.buffer,
            contentType: file.mimetype,
        });
        try {
            await this.database.client.$transaction(async (transaction) => {
                const photoCount = await transaction.inventory_item_photos.count({
                    where: {
                        inventory_item_id: inventoryItemId,
                    },
                });
                const makePrimary = photoCount === 0 ||
                    input.isPrimary === true;
                if (makePrimary) {
                    await transaction.inventory_item_photos.updateMany({
                        where: {
                            inventory_item_id: inventoryItemId,
                            is_primary: true,
                        },
                        data: {
                            is_primary: false,
                        },
                    });
                }
                const maximumSortOrder = await transaction.inventory_item_photos.aggregate({
                    where: {
                        inventory_item_id: inventoryItemId,
                    },
                    _max: {
                        sort_order: true,
                    },
                });
                const sortOrder = input.sortOrder ??
                    ((maximumSortOrder
                        ._max
                        .sort_order ??
                        -1) + 1);
                await transaction.inventory_item_photos.create({
                    data: {
                        inventory_item_id: inventoryItemId,
                        storage_provider: this.storage.provider,
                        storage_key: storageKey,
                        public_url: null,
                        sort_order: sortOrder,
                        is_primary: makePrimary,
                    },
                });
            });
        }
        catch (error) {
            try {
                await this.storage.remove(storageKey);
            }
            catch {
                this.logger.error(`Database registration failed and storage cleanup also failed for ${storageKey}.`);
            }
            throw error;
        }
        return this.getUserInventoryItem(userId, inventoryItemId);
    }
};
exports.InventoryService = InventoryService;
exports.InventoryService = InventoryService = InventoryService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService,
        storage_service_1.StorageService])
], InventoryService);
