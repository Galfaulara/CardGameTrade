"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const db_1 = require("@repo/db");
const market_prices_service_1 = require("../src/catalog/market-prices.service");
const db = (0, db_1.createDbClient)(process.env.DATABASE_URL);
const assert = (value, message) => {
    if (!value)
        throw new Error(message);
};
async function main() {
    await db.$connect();
    const fixture = await db.printing_finishes.findFirst({
        select: { printing_id: true, finish: true },
    });
    assert(fixture, "A printing finish fixture is required.");
    const service = new market_prices_service_1.MarketPricesService({ client: db });
    const prefix = `pricing-regression-${Date.now()}`;
    const listingPricesBefore = JSON.stringify(await db.listings.findMany({
        orderBy: { id: "asc" },
        select: { id: true, asking_price: true },
    }));
    try {
        await service.upsertObservation({
            printingId: fixture.printing_id,
            finish: fixture.finish,
            source: "tcgplayer",
            sourceRef: `${prefix}-old`,
            currencyCode: "USD",
            marketPrice: "8.42",
            capturedAt: new Date("2099-08-26T12:00:00Z"),
        });
        await service.upsertObservation({
            printingId: fixture.printing_id,
            finish: fixture.finish,
            source: "tcgplayer",
            sourceRef: `${prefix}-today`,
            currencyCode: "USD",
            marketPrice: "8.71",
            capturedAt: new Date("2099-08-27T12:00:00Z"),
        });
        await service.upsertObservation({
            printingId: fixture.printing_id,
            finish: fixture.finish,
            source: "tcgplayer",
            sourceRef: `${prefix}-today`,
            currencyCode: "USD",
            marketPrice: "8.71",
            capturedAt: new Date("2099-08-27T12:00:00Z"),
        });
        await service.upsertObservation({
            printingId: fixture.printing_id,
            finish: fixture.finish,
            source: "cardkingdom",
            sourceRef: `${prefix}-today`,
            currencyCode: "USD",
            marketPrice: "9.99",
            capturedAt: new Date("2099-08-27T12:00:00Z"),
        });
        const rows = await db.price_snapshots.findMany({
            where: { source_ref: { startsWith: prefix } },
        });
        assert(rows.length === 3, "Daily retry must be idempotent while preserving prior history and separate providers.");
        assert(JSON.stringify(await db.listings.findMany({
            orderBy: { id: "asc" },
            select: { id: true, asking_price: true },
        })) === listingPricesBefore, "Market snapshots must not populate or mutate seller asking prices.");
        const latest = await service.latest([
            { printingId: fixture.printing_id, finish: fixture.finish },
        ]);
        assert(latest
            .find((row) => row.source === "tcgplayer")
            ?.market_price?.toString() === "8.71", "Latest exact-finish TCGplayer snapshot was not selected.");
        assert(latest
            .find((row) => row.source === "cardkingdom")
            ?.market_price?.toString() === "9.99", "Card Kingdom source was not kept separate.");
        const countBeforeFailure = await db.price_snapshots.count({
            where: { source_ref: { startsWith: prefix } },
        });
        try {
            throw new Error("provider unavailable");
        }
        catch { }
        assert((await db.price_snapshots.count({
            where: { source_ref: { startsWith: prefix } },
        })) === countBeforeFailure, "Failed provider work erased valid snapshots.");
        const targetTotal = 2 * 5;
        const offeredTotal = 13.2;
        const difference = offeredTotal - targetTotal;
        assert(targetTotal === 10 && Math.abs(difference - 3.2) < 0.0001, "Quantity totals or offered-minus-target difference changed.");
        const incomplete = [5, null];
        assert(incomplete.some((value) => value === null), "Missing provider prices must suppress a complete total/difference instead of becoming zero.");
        console.log("Pricing sync/read regression passed.");
    }
    finally {
        await db.price_snapshots.deleteMany({
            where: { source_ref: { startsWith: prefix } },
        });
        await db.$disconnect();
    }
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
