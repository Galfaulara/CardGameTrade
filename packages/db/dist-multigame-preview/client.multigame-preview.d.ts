export { Prisma } from "./generated/prisma-multigame-preview/client";
export declare const createDbClient: (connectionString: string) => import("./generated/prisma-multigame-preview/internal/class").PrismaClient<never, import("./generated/prisma-multigame-preview/internal/prismaNamespace").GlobalOmitConfig | undefined, import("@prisma/client/runtime/client").DefaultArgs>;
export type DbClient = ReturnType<typeof createDbClient>;
