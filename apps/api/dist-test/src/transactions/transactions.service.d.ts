import type { GameScopedListQuery } from "@repo/validation";
import { DatabaseService } from "../database/database.service";
export declare class TransactionsService {
    private readonly database;
    constructor(database: DatabaseService);
    private resolveGameId;
    private getInventoryHistorySelect;
    private mapInventoryRecord;
    private loadInventoryRecords;
    private hydrateTransactions;
    private getTransactionHeaderSelect;
    getUserTransactions(userId: string, query?: GameScopedListQuery): Promise<any[]>;
    getUserTransaction(userId: string, transactionId: string): Promise<any>;
}
//# sourceMappingURL=transactions.service.d.ts.map