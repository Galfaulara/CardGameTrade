import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma/client";

export { Prisma } from "./generated/prisma/client";

export const createDbClient = (connectionString: string) => {
  const adapter = new PrismaPg({
    connectionString,
  });

  return new PrismaClient({
    adapter,
  });
};

export type DbClient = ReturnType<typeof createDbClient>;
