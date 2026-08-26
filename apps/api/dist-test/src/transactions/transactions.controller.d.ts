import { TransactionsService } from "./transactions.service";
export declare class TransactionsController {
    private readonly transactionsService;
    constructor(transactionsService: TransactionsService);
    getUserTransactions(userId: string): Promise<any[]>;
    getUserTransaction(transactionId: string, userId: string): Promise<any>;
}
//# sourceMappingURL=transactions.controller.d.ts.map