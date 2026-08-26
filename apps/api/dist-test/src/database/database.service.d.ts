import { OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { type DbClient } from "@repo/db";
export declare class DatabaseService implements OnModuleInit, OnModuleDestroy {
    private readonly configService;
    readonly client: DbClient;
    constructor(configService: ConfigService);
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
}
//# sourceMappingURL=database.service.d.ts.map