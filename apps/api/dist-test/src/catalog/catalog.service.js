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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogService = void 0;
const common_1 = require("@nestjs/common");
const db_1 = require("@repo/db");
const database_service_1 = require("../database/database.service");
let CatalogService = class CatalogService {
    database;
    constructor(database) {
        this.database = database;
    }
    async getGames() {
        return this.database.client.games.findMany({
            select: {
                id: true,
                name: true,
                slug: true,
                created_at: true,
            },
            orderBy: {
                name: "asc",
            },
        });
    }
    async getSetsByGame(gameId) {
        return this.database.client.card_sets.findMany({
            where: {
                game_id: gameId,
            },
            select: {
                id: true,
                game_id: true,
                code: true,
                name: true,
                source: true,
                source_id: true,
                release_date: true,
                set_type: true,
                created_at: true,
            },
            orderBy: {
                release_date: "desc",
            },
        });
    }
    async searchCards(gameId, query) {
        const normalizedQuery = query.trim().toLowerCase();
        if (!normalizedQuery) {
            return [];
        }
        return this.database.client.canonical_cards.findMany({
            where: {
                game_id: gameId,
                normalized_name: {
                    contains: normalizedQuery,
                },
            },
            select: {
                id: true,
                game_id: true,
                name: true,
                normalized_name: true,
                mana_cost: true,
                type_line: true,
                oracle_text: true,
                colors: true,
                color_identity: true,
            },
            orderBy: {
                name: "asc",
            },
            take: 25,
        });
    }
    positiveInteger(value, fallback, maximum) {
        const parsed = Number(value);
        return Number.isInteger(parsed) && parsed > 0 ? Math.min(parsed, maximum) : fallback;
    }
    terms(query) {
        return query.trim().replace(/\s+/g, " ").toLowerCase().split(" ").filter(Boolean);
    }
    printingSelect() {
        return {
            id: true, source_key: true, canonical_card_id: true, collector_number: true,
            language_code: true, printed_name: true, printed_type_line: true, printed_text: true,
            rarity: true, artist_name: true, treatment: true, frame_version: true,
            border_color: true, is_promo: true, is_reprint: true, released_at: true,
            image_small_uri: true, image_normal_uri: true, image_large_uri: true, raw_data: true,
            card_sets: { select: { id: true, code: true, name: true, release_date: true } },
        };
    }
    safeScryfallUri(raw) {
        if (!raw || typeof raw !== "object" || !("scryfall_uri" in raw))
            return null;
        const value = raw.scryfall_uri;
        if (typeof value !== "string")
            return null;
        try {
            const url = new URL(value);
            return url.protocol === "https:" && (url.hostname === "scryfall.com" || url.hostname.endsWith(".scryfall.com")) ? url.href : null;
        }
        catch {
            return null;
        }
    }
    mapPrinting(printing) {
        const { raw_data, ...safe } = printing;
        return { ...safe, set: printing.card_sets, scryfall_uri: this.safeScryfallUri(raw_data) };
    }
    faces(raw) {
        if (!raw || typeof raw !== "object" || !("card_faces" in raw) || !Array.isArray(raw.card_faces))
            return undefined;
        return raw.card_faces.map((face) => ({
            name: typeof face.name === "string" ? face.name : null,
            mana_cost: typeof face.mana_cost === "string" ? face.mana_cost : null,
            type_line: typeof face.type_line === "string" ? face.type_line : null,
            oracle_text: typeof face.oracle_text === "string" ? face.oracle_text : null,
            power: typeof face.power === "string" ? face.power : null,
            toughness: typeof face.toughness === "string" ? face.toughness : null,
            loyalty: typeof face.loyalty === "string" ? face.loyalty : null,
            defense: typeof face.defense === "string" ? face.defense : null,
        }));
    }
    characteristics(raw) {
        const source = raw && typeof raw === "object" ? raw : {};
        const text = (key) => typeof source[key] === "string" ? source[key] : null;
        return { power: text("power"), toughness: text("toughness"), loyalty: text("loyalty"), defense: text("defense") };
    }
    async representativePrintings(canonicalIds) {
        if (!canonicalIds.length)
            return new Map();
        const rows = await this.database.client.$queryRaw(db_1.Prisma.sql `
      SELECT id, canonical_card_id FROM (
        SELECT cp.id, cp.canonical_card_id, ROW_NUMBER() OVER (PARTITION BY cp.canonical_card_id ORDER BY
          CASE WHEN cp.language_code = 'en' THEN 0 ELSE 1 END,
          CASE WHEN cp.is_digital = false THEN 0 ELSE 1 END,
          CASE WHEN cp.image_normal_uri IS NOT NULL OR cp.image_large_uri IS NOT NULL OR cp.image_small_uri IS NOT NULL THEN 0 ELSE 1 END,
          CASE WHEN cp.is_promo = false THEN 0 ELSE 1 END,
          cp.released_at DESC NULLS LAST, cp.id ASC) AS rank
        FROM card_printings cp WHERE cp.canonical_card_id IN (${db_1.Prisma.join(canonicalIds)})
      ) ranked WHERE rank = 1`);
        const printings = await this.database.client.card_printings.findMany({
            where: { id: { in: rows.map((row) => row.id) } }, select: this.printingSelect(),
        });
        return new Map(printings.map((printing) => [printing.canonical_card_id, this.mapPrinting(printing)]));
    }
    async searchCanonicalCards(gameId, query, pageValue, pageSizeValue) {
        const terms = this.terms(query);
        const page = this.positiveInteger(pageValue, 1, 1_000_000);
        const pageSize = this.positiveInteger(pageSizeValue, 60, 60);
        if (!terms.length)
            return { query: "", items: [], page, page_size: pageSize, total_results: 0, total_pages: 0 };
        const where = { game_id: gameId, AND: terms.map((term) => ({ normalized_name: { contains: term } })) };
        const [cards, total] = await Promise.all([
            this.database.client.canonical_cards.findMany({ where, select: { id: true, game_id: true, name: true, mana_cost: true, type_line: true },
                orderBy: [{ name: "asc" }, { id: "asc" }], skip: (page - 1) * pageSize, take: pageSize }),
            this.database.client.canonical_cards.count({ where }),
        ]);
        const representatives = await this.representativePrintings(cards.map((card) => card.id));
        return { query: terms.join(" "), items: cards.map((card) => ({ ...card, representative_printing: representatives.get(card.id) ?? null })),
            page, page_size: pageSize, total_results: total, total_pages: Math.ceil(total / pageSize) };
    }
    async getCardDetail(canonicalCardId, requestedPrintingId) {
        const card = await this.database.client.canonical_cards.findUnique({ where: { id: canonicalCardId },
            select: { id: true, game_id: true, name: true, mana_cost: true, type_line: true, oracle_text: true,
                colors: true, color_identity: true, raw_data: true } });
        if (!card)
            throw new common_1.NotFoundException("Card was not found.");
        const requested = requestedPrintingId && /^[0-9a-f-]{36}$/i.test(requestedPrintingId)
            ? await this.database.client.card_printings.findFirst({ where: { id: requestedPrintingId, canonical_card_id: canonicalCardId }, select: this.printingSelect() }) : null;
        const representative = requested ? null : (await this.representativePrintings([canonicalCardId])).get(canonicalCardId);
        const selected = requested ?? representative ?? null;
        const alternatives = await this.database.client.card_printings.findMany({ where: { canonical_card_id: canonicalCardId, is_digital: false,
                ...(selected ? { id: { not: selected.id } } : {}) }, select: this.printingSelect(), orderBy: [{ released_at: "desc" }, { id: "asc" }], take: 10 });
        const { raw_data, ...canonical } = card;
        return { card: { ...canonical, ...this.characteristics(raw_data), faces: this.faces(raw_data) },
            selected_printing: selected ? this.mapPrinting(selected) : null,
            other_printings: alternatives.map((printing) => this.mapPrinting(printing)),
            requested_printing_valid: !requestedPrintingId || Boolean(requested) };
    }
    async getCardListings(canonicalCardId, selectedPrintingId, pageValue, pageSizeValue) {
        const page = this.positiveInteger(pageValue, 1, 1_000_000);
        const pageSize = this.positiveInteger(pageSizeValue, 12, 24);
        const inventorySelect = { id: true, printing_id: true, condition: true, finish: true, language_code: true, quantity: true,
            is_signed: true, is_altered: true, is_graded: true,
            user_profiles: { select: { id: true, display_name: true, username: true } },
            stores: { select: { id: true, name: true, slug: true, verification_status: true } },
            printing_finishes: { select: { card_printings: { select: this.printingSelect() } } },
        };
        const select = { id: true, accepts_trade: true, accepts_cash: true, asking_price: true, currency_code: true, created_at: true,
            inventory_items_listings_inventory_item_id_seller_user_idToinventory_items: { select: inventorySelect },
            inventory_items_listings_inventory_item_id_seller_store_idToinventory_items: { select: inventorySelect } };
        const selected = /^[0-9a-f-]{36}$/i.test(selectedPrintingId) ? selectedPrintingId : "00000000-0000-0000-0000-000000000000";
        const [ids, countRows] = await Promise.all([
            this.database.client.$queryRaw(db_1.Prisma.sql `
        SELECT l.id FROM listings l JOIN inventory_items i ON i.id = l.inventory_item_id
        JOIN card_printings cp ON cp.id = i.printing_id
        WHERE cp.canonical_card_id = ${canonicalCardId}::uuid AND l.status = 'active'
          AND i.status = 'available' AND (l.accepts_trade OR l.accepts_cash)
          AND ((l.seller_user_id = i.owner_user_id AND l.seller_store_id IS NULL)
            OR (l.seller_store_id = i.owner_store_id AND l.seller_user_id IS NULL))
        ORDER BY CASE WHEN i.printing_id = ${selected}::uuid THEN 0 ELSE 1 END,
          CASE WHEN l.accepts_trade THEN 0 ELSE 1 END, l.created_at DESC, l.id ASC
        OFFSET ${(page - 1) * pageSize} LIMIT ${pageSize}`),
            this.database.client.$queryRaw(db_1.Prisma.sql `
        SELECT COUNT(*) count FROM listings l JOIN inventory_items i ON i.id = l.inventory_item_id
        JOIN card_printings cp ON cp.id = i.printing_id
        WHERE cp.canonical_card_id = ${canonicalCardId}::uuid AND l.status = 'active'
          AND i.status = 'available' AND (l.accepts_trade OR l.accepts_cash)
          AND ((l.seller_user_id = i.owner_user_id AND l.seller_store_id IS NULL)
            OR (l.seller_store_id = i.owner_store_id AND l.seller_user_id IS NULL))`),
        ]);
        const hydrated = await this.database.client.listings.findMany({ where: { id: { in: ids.map((row) => row.id) } }, select });
        const byId = new Map(hydrated.map((listing) => [listing.id, listing]));
        const ranked = ids.flatMap(({ id }) => { const item = byId.get(id); return item ? [item] : []; });
        const total = Number(countRows[0]?.count ?? 0);
        return { items: ranked.map((listing) => {
                const inventory = listing.inventory_items_listings_inventory_item_id_seller_user_idToinventory_items ?? listing.inventory_items_listings_inventory_item_id_seller_store_idToinventory_items;
                if (!inventory)
                    return null;
                return { id: listing.id, accepts_trade: listing.accepts_trade, accepts_cash: listing.accepts_cash,
                    asking_price: listing.asking_price, currency_code: listing.currency_code, created_at: listing.created_at,
                    inventory_item: { ...inventory, printing_finishes: undefined, printing: this.mapPrinting(inventory.printing_finishes.card_printings) },
                    seller: inventory.stores ? { kind: "store", ...inventory.stores } : { kind: "user", ...inventory.user_profiles } };
            }).filter(Boolean),
            page, page_size: pageSize, total_results: total, total_pages: Math.ceil(total / pageSize) };
    }
    async getPrintingsByCanonicalCard(canonicalCardId) {
        return this.database.client.card_printings.findMany({
            where: {
                canonical_card_id: canonicalCardId,
                is_digital: false,
            },
            select: {
                id: true,
                game_id: true,
                canonical_card_id: true,
                card_set_id: true,
                collector_number: true,
                language_code: true,
                printed_name: true,
                rarity: true,
                artist_name: true,
                treatment: true,
                frame_version: true,
                border_color: true,
                is_promo: true,
                is_reprint: true,
                released_at: true,
                image_small_uri: true,
                image_normal_uri: true,
                image_large_uri: true,
                card_sets: {
                    select: {
                        id: true,
                        code: true,
                        name: true,
                        release_date: true,
                    },
                },
            },
            orderBy: {
                released_at: "desc",
            },
        });
    }
    async getPrintingFinishes(printingId) {
        return this.database.client.printing_finishes.findMany({
            where: {
                printing_id: printingId,
            },
            select: {
                finish: true,
            },
            orderBy: {
                finish: "asc",
            },
        });
    }
};
exports.CatalogService = CatalogService;
exports.CatalogService = CatalogService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], CatalogService);
