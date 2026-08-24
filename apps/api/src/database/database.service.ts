import {
  Injectable,
  OnModuleDestroy,
  OnModuleInit,
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { createDbClient, type DbClient } from "@repo/db";

@Injectable()
export class DatabaseService implements OnModuleInit, OnModuleDestroy {
  public readonly client: DbClient;

  constructor(private readonly configService: ConfigService) {
    const connectionString =
      this.configService.getOrThrow<string>("DATABASE_URL");

    this.client = createDbClient(connectionString);
  }

  async onModuleInit() {
    await this.client.$connect();
  }

  async onModuleDestroy() {
    await this.client.$disconnect();
  }
}