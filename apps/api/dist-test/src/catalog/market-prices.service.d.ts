import { Prisma } from "@repo/db";
import { DatabaseService } from "../database/database.service";
import type { ScryfallCard } from "./scryfall.types";
export type PriceKey = {
    printingId: string;
    finish: string;
};
export type PriceObservation = PriceKey & {
    source: "tcgplayer" | "cardkingdom";
    sourceRef: string;
    currencyCode: string;
    marketPrice: string;
    capturedAt: Date;
    rawData?: Prisma.InputJsonValue;
};
export declare class MarketPricesService {
    private readonly database;
    constructor(database: DatabaseService);
    latest(keys: PriceKey[]): Promise<{
        printing_id: string;
        finish: string;
        source: string;
        currency_code: string;
        market_price: Prisma.Decimal | null;
        captured_at: Date;
    }[]>;
    upsertObservation(observation: PriceObservation): Promise<string>;
    syncTcgplayerFromScryfallCatalog(capturedAt?: Date): Promise<{
        provider: string;
        intermediary: string;
        source_ref: string;
        considered: number;
        matched_printings: number;
        unmatched_printings: number;
        observed: number;
        written: number;
        skipped_missing_prices: number;
        captured_at: Date;
    }>;
    syncTcgplayerFromScryfallBulk(cards: AsyncIterable<{
        card: ScryfallCard;
        rawData: unknown;
    }>, capturedAt?: Date): Promise<{
        provider: string;
        intermediary: string;
        source_ref: string;
        provider_records: number;
        considered: number;
        matched_printings: number;
        unmatched_printings: number;
        written: number;
        skipped_missing_prices: number;
        captured_at: Date;
    }>;
    private mtgjsonStream;
    syncCardKingdom(capturedAt?: Date): Promise<{
        provider: string;
        intermediary: string;
        source_ref: string;
        provider_printings: number;
        matched_printings: number;
        unmatched_printings: number;
        written: number;
        captured_at: Date;
    }>;
}
//# sourceMappingURL=market-prices.service.d.ts.map