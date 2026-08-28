"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketPricesService = void 0;
const common_1 = require("@nestjs/common");
const db_1 = require("@repo/db");
const node_stream_1 = require("node:stream");
const node_zlib_1 = require("node:zlib");
const database_service_1 = require("../database/database.service");
let MarketPricesService = class MarketPricesService {
    database;
    constructor(database) {
        this.database = database;
    }
    async latest(keys) {
        const unique = [
            ...new Map(keys.map((key) => [`${key.printingId}:${key.finish}`, key])).values(),
        ];
        if (!unique.length)
            return [];
        const pairs = db_1.Prisma.join(unique.map((key) => db_1.Prisma.sql `(${key.printingId}::uuid, ${key.finish})`));
        return this.database.client.$queryRaw(db_1.Prisma.sql `
      SELECT DISTINCT ON (printing_id, finish, source)
        printing_id, finish, source, currency_code, market_price, captured_at
      FROM price_snapshots
      WHERE condition = 'unspecified'
        AND (printing_id, finish) IN (${pairs})
        AND source IN ('tcgplayer', 'cardkingdom')
        AND market_price IS NOT NULL
      ORDER BY printing_id, finish, source, captured_at DESC, created_at DESC, id DESC
    `);
    }
    async upsertObservation(observation) {
        const where = {
            printing_id: observation.printingId,
            finish: observation.finish,
            condition: "unspecified",
            source: observation.source,
            source_ref: observation.sourceRef,
        };
        const matches = await this.database.client.price_snapshots.findMany({
            where,
            orderBy: [{ created_at: "asc" }, { id: "asc" }],
            select: { id: true },
        });
        const data = {
            currency_code: observation.currencyCode,
            market_price: observation.marketPrice,
            captured_at: observation.capturedAt,
            raw_data: observation.rawData ?? {},
        };
        const first = matches[0];
        if (first) {
            await this.database.client.price_snapshots.update({
                where: { id: first.id },
                data,
            });
            if (matches.length > 1)
                await this.database.client.price_snapshots.deleteMany({
                    where: { id: { in: matches.slice(1).map((row) => row.id) } },
                });
            return first.id;
        }
        return (await this.database.client.price_snapshots.create({
            data: { ...where, ...data },
        })).id;
    }
    async syncTcgplayerFromScryfallCatalog(capturedAt = new Date()) {
        const sourceRef = `scryfall-${capturedAt.toISOString().slice(0, 10)}`;
        await this.database.client.price_snapshots.deleteMany({
            where: { source: "_sync_tcgplayer" },
        });
        let cursor;
        let observed = 0;
        let written = 0;
        let considered = 0;
        let matchedPrintings = 0;
        let skippedMissingPrices = 0;
        do {
            const printings = await this.database.client.card_printings.findMany({
                where: {
                    source: "scryfall",
                    ...(cursor ? { id: { gt: cursor } } : {}),
                },
                orderBy: { id: "asc" },
                take: 1000,
                select: {
                    id: true,
                    source_key: true,
                    raw_data: true,
                    printing_finishes: { select: { finish: true } },
                },
            });
            if (!printings.length)
                break;
            cursor = printings.at(-1).id;
            const observations = [];
            for (const printing of printings) {
                considered += 1;
                const raw = printing.raw_data;
                const prices = raw?.prices;
                let matched = false;
                for (const { finish } of printing.printing_finishes) {
                    const field = finish === "nonfoil"
                        ? "usd"
                        : finish === "foil"
                            ? "usd_foil"
                            : finish === "etched"
                                ? "usd_etched"
                                : null;
                    const value = field && typeof prices?.[field] === "string"
                        ? prices[field]
                        : null;
                    if (!value || !Number.isFinite(Number(value)) || Number(value) <= 0) {
                        skippedMissingPrices += 1;
                        continue;
                    }
                    matched = true;
                    observed += 1;
                    observations.push({
                        printing_id: printing.id,
                        finish,
                        condition: "unspecified",
                        source: "_sync_tcgplayer",
                        source_ref: sourceRef,
                        currency_code: "USD",
                        market_price: value,
                        captured_at: capturedAt,
                        raw_data: {
                            intermediary: "scryfall",
                            scryfall_id: printing.source_key,
                            price_field: field,
                        },
                    });
                    written += 1;
                }
                if (matched)
                    matchedPrintings += 1;
            }
            if (observations.length)
                await this.database.client.price_snapshots.createMany({
                    data: observations,
                });
            if (printings.length < 1000)
                break;
        } while (cursor);
        await this.database.client.$transaction(async (transaction) => {
            await transaction.price_snapshots.deleteMany({
                where: { source: "tcgplayer", source_ref: sourceRef },
            });
            await transaction.price_snapshots.updateMany({
                where: { source: "_sync_tcgplayer", source_ref: sourceRef },
                data: { source: "tcgplayer" },
            });
        });
        return {
            provider: "tcgplayer",
            intermediary: "scryfall",
            source_ref: sourceRef,
            considered,
            matched_printings: matchedPrintings,
            unmatched_printings: considered - matchedPrintings,
            observed,
            written,
            skipped_missing_prices: skippedMissingPrices,
            captured_at: capturedAt,
        };
    }
    async syncTcgplayerFromScryfallBulk(cards, capturedAt = new Date()) {
        const sourceRef = `scryfall-${capturedAt.toISOString().slice(0, 10)}`;
        const printings = await this.database.client.card_printings.findMany({
            where: { source: "scryfall" },
            select: {
                id: true,
                source_key: true,
                printing_finishes: { select: { finish: true } },
            },
        });
        const byScryfallId = new Map(printings.map((printing) => [printing.source_key, printing]));
        await this.database.client.price_snapshots.deleteMany({
            where: { source: "_sync_tcgplayer" },
        });
        let providerRecords = 0;
        let skippedMissingPrices = 0;
        let written = 0;
        const matchedIds = new Set();
        let observations = [];
        const flush = async () => {
            if (!observations.length)
                return;
            await this.database.client.price_snapshots.createMany({
                data: observations,
            });
            written += observations.length;
            observations = [];
        };
        for await (const { card, rawData } of cards) {
            providerRecords += 1;
            const printing = byScryfallId.get(card.id);
            if (!printing)
                continue;
            matchedIds.add(printing.id);
            const raw = rawData;
            for (const { finish } of printing.printing_finishes) {
                const field = finish === "nonfoil"
                    ? "usd"
                    : finish === "foil"
                        ? "usd_foil"
                        : finish === "etched"
                            ? "usd_etched"
                            : null;
                const value = field && typeof raw.prices?.[field] === "string"
                    ? raw.prices[field]
                    : null;
                if (!value || !Number.isFinite(Number(value)) || Number(value) <= 0) {
                    skippedMissingPrices += 1;
                    continue;
                }
                observations.push({
                    printing_id: printing.id,
                    finish,
                    condition: "unspecified",
                    source: "_sync_tcgplayer",
                    source_ref: sourceRef,
                    currency_code: "USD",
                    market_price: value,
                    captured_at: capturedAt,
                    raw_data: {
                        intermediary: "scryfall",
                        scryfall_id: card.id,
                        price_field: field,
                    },
                });
                if (observations.length >= 1000)
                    await flush();
            }
        }
        await flush();
        await this.database.client.$transaction(async (transaction) => {
            await transaction.price_snapshots.deleteMany({
                where: { source: "tcgplayer", source_ref: sourceRef },
            });
            await transaction.price_snapshots.updateMany({
                where: { source: "_sync_tcgplayer", source_ref: sourceRef },
                data: { source: "tcgplayer" },
            });
        });
        return {
            provider: "tcgplayer",
            intermediary: "scryfall",
            source_ref: sourceRef,
            provider_records: providerRecords,
            considered: printings.length,
            matched_printings: matchedIds.size,
            unmatched_printings: printings.length - matchedIds.size,
            written,
            skipped_missing_prices: skippedMissingPrices,
            captured_at: capturedAt,
        };
    }
    async mtgjsonStream(url) {
        const response = await fetch(url, {
            headers: { "User-Agent": "DeckDeal daily market pricing sync" },
        });
        if (!response.ok || !response.body)
            throw new Error(`MTGJSON bulk request failed (${response.status}) for ${url}`);
        return node_stream_1.Readable.fromWeb(response.body).pipe((0, node_zlib_1.createGunzip)());
    }
    async syncCardKingdom(capturedAt = new Date()) {
        const sourceRef = `mtgjson-${capturedAt.toISOString().slice(0, 10)}`;
        const priceStream = await this.mtgjsonStream("https://mtgjson.com/api/v5/AllPricesToday.json.gz");
        const priceChunks = [];
        for await (const chunk of priceStream)
            priceChunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
        const priceDocument = JSON.parse(Buffer.concat(priceChunks).toString("utf8"));
        const cardKingdomByMtgjsonId = new Map(Object.entries(priceDocument.data ?? {}).flatMap(([id, value]) => value.paper?.cardkingdom?.retail
            ? [[id, value.paper.cardkingdom]]
            : []));
        const deckPrintings = await this.database.client.card_printings.findMany({
            where: { source: "scryfall" },
            select: {
                id: true,
                source_key: true,
                printing_finishes: { select: { finish: true } },
            },
        });
        const byScryfallId = new Map(deckPrintings.map((printing) => [printing.source_key, printing]));
        const identifiersStream = await this.mtgjsonStream("https://mtgjson.com/api/v5/AllIdentifiers.json.gz");
        const [{ parser }, { pick }, { streamObject }] = await Promise.all([
            Promise.resolve().then(() => __importStar(require("stream-json"))),
            Promise.resolve().then(() => __importStar(require("stream-json/filters/pick.js"))),
            Promise.resolve().then(() => __importStar(require("stream-json/streamers/stream-object.js"))),
        ]);
        const records = identifiersStream
            .pipe(parser.asStream())
            .pipe(pick.asStream({ filter: "data" }))
            .pipe(streamObject.asStream());
        const observations = new Map();
        let matchedPrintings = 0;
        for await (const entry of records) {
            const provider = cardKingdomByMtgjsonId.get(entry.key);
            if (!provider)
                continue;
            const scryfallId = entry.value.identifiers?.scryfallId;
            const printing = scryfallId ? byScryfallId.get(scryfallId) : undefined;
            if (!printing)
                continue;
            matchedPrintings += 1;
            for (const { finish } of printing.printing_finishes) {
                if (finish !== "nonfoil" && finish !== "foil" && finish !== "etched")
                    continue;
                const points = provider.retail?.[finish === "nonfoil" ? "normal" : finish];
                const latest = points
                    ? Object.entries(points).sort(([left], [right]) => right.localeCompare(left))[0]
                    : undefined;
                const value = latest?.[1];
                if (typeof value !== "number" || !Number.isFinite(value) || value <= 0)
                    continue;
                observations.set(`${printing.id}:${finish}`, {
                    printing_id: printing.id,
                    finish,
                    condition: "unspecified",
                    source: "_sync_cardkingdom",
                    source_ref: sourceRef,
                    currency_code: provider.currency ?? "USD",
                    market_price: value,
                    captured_at: capturedAt,
                    raw_data: {
                        intermediary: "mtgjson",
                        mtgjson_uuid: entry.key,
                        scryfall_id: scryfallId,
                        price_date: latest[0],
                        price_type: `paper.cardkingdom.retail.${finish === "nonfoil" ? "normal" : finish}`,
                    },
                });
            }
        }
        await this.database.client.price_snapshots.deleteMany({
            where: { source: "_sync_cardkingdom" },
        });
        const staged = [...observations.values()];
        for (let index = 0; index < staged.length; index += 1000) {
            await this.database.client.price_snapshots.createMany({
                data: staged.slice(index, index + 1000),
            });
        }
        await this.database.client.$transaction(async (transaction) => {
            await transaction.price_snapshots.deleteMany({
                where: { source: "cardkingdom", source_ref: sourceRef },
            });
            await transaction.price_snapshots.updateMany({
                where: { source: "_sync_cardkingdom", source_ref: sourceRef },
                data: { source: "cardkingdom" },
            });
        });
        return {
            provider: "cardkingdom",
            intermediary: "mtgjson",
            source_ref: sourceRef,
            provider_printings: cardKingdomByMtgjsonId.size,
            matched_printings: matchedPrintings,
            unmatched_printings: cardKingdomByMtgjsonId.size - matchedPrintings,
            written: staged.length,
            captured_at: capturedAt,
        };
    }
};
exports.MarketPricesService = MarketPricesService;
exports.MarketPricesService = MarketPricesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], MarketPricesService);
