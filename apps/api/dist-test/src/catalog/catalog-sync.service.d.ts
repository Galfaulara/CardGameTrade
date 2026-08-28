import { DatabaseService } from "../database/database.service";
import type { ScryfallCard } from "./scryfall.types";
export declare class CatalogSyncService {
    private readonly database;
    private readonly logger;
    constructor(database: DatabaseService);
    private getBulkDataItem;
    private getFileSize;
    private sleep;
    private ensureBulkDataFile;
    private readBulkDataCards;
    readPricingCards(): AsyncGenerator<{
        rawData: any;
        card: ScryfallCard;
    }, void, unknown>;
    private getCardImageUris;
    syncSets(): Promise<{
        received: number;
        skippedDigital: number;
        synchronized: number;
    }>;
    syncCanonicalCards(): Promise<{
        synchronized: number;
        skippedWithoutOracleId: number;
    }>;
    syncPrintings(): Promise<{
        synchronized: number;
        finishesSynchronized: number;
        skippedDigital: number;
        skippedWithoutOracleId: number;
        skippedMissingCanonicalCard: number;
        skippedMissingSet: number;
    }>;
}
//# sourceMappingURL=catalog-sync.service.d.ts.map