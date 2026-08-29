"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDbClient = exports.Prisma = void 0;
const adapter_pg_1 = require("@prisma/adapter-pg");
const client_1 = require("./generated/prisma-multigame-preview/client");
var client_2 = require("./generated/prisma-multigame-preview/client");
Object.defineProperty(exports, "Prisma", { enumerable: true, get: function () { return client_2.Prisma; } });
const createDbClient = (connectionString) => {
    const adapter = new adapter_pg_1.PrismaPg({
        connectionString,
    });
    return new client_1.PrismaClient({
        adapter,
    });
};
exports.createDbClient = createDbClient;
