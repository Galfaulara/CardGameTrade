import { Injectable } from "@nestjs/common";
import { Prisma } from "@repo/db";
import { Readable } from "node:stream";
import { createGunzip } from "node:zlib";
import { DatabaseService } from "../database/database.service";
import type { ScryfallCard } from "./scryfall.types";

export type PriceKey = { printingId: string; finish: string };
export type PriceObservation = PriceKey & {
  source: "tcgplayer" | "cardkingdom";
  sourceRef: string;
  currencyCode: string;
  marketPrice: string;
  capturedAt: Date;
  rawData?: Prisma.InputJsonValue;
};

@Injectable()
export class MarketPricesService {
  constructor(private readonly database: DatabaseService) {}

  async latest(keys: PriceKey[]) {
    const unique = [
      ...new Map(
        keys.map((key) => [`${key.printingId}:${key.finish}`, key]),
      ).values(),
    ];
    if (!unique.length) return [];
    const pairs = Prisma.join(
      unique.map((key) => Prisma.sql`(${key.printingId}::uuid, ${key.finish})`),
    );
    return this.database.client.$queryRaw<
      Array<{
        printing_id: string;
        finish: string;
        source: string;
        currency_code: string;
        market_price: Prisma.Decimal | null;
        captured_at: Date;
      }>
    >(Prisma.sql`
      SELECT DISTINCT ON (printing_id, finish, source)
        printing_id, finish, source, currency_code, market_price, captured_at
      FROM price_snapshots
      WHERE condition = 'unspecified'
        AND (printing_id, finish) IN (${pairs})
        AND source IN ('tcgplayer', 'cardkingdom')
        AND market_price IS NOT NULL
      ORDER BY printing_id, finish, source, captured_at DESC, created_at DESC, id DESC
    `);
  }

  async upsertObservation(observation: PriceObservation) {
    const where = {
      printing_id: observation.printingId,
      finish: observation.finish,
      condition: "unspecified",
      source: observation.source,
      source_ref: observation.sourceRef,
    };
    const matches = await this.database.client.price_snapshots.findMany({
      where,
      orderBy: [{ created_at: "asc" }, { id: "asc" }],
      select: { id: true },
    });
    const data = {
      currency_code: observation.currencyCode,
      market_price: observation.marketPrice,
      captured_at: observation.capturedAt,
      raw_data: observation.rawData ?? {},
    };
    const first = matches[0];
    if (first) {
      await this.database.client.price_snapshots.update({
        where: { id: first.id },
        data,
      });
      if (matches.length > 1)
        await this.database.client.price_snapshots.deleteMany({
          where: { id: { in: matches.slice(1).map((row) => row.id) } },
        });
      return first.id;
    }
    return (
      await this.database.client.price_snapshots.create({
        data: { ...where, ...data },
      })
    ).id;
  }

  async syncTcgplayerFromScryfallCatalog(capturedAt = new Date()) {
    const sourceRef = `scryfall-${capturedAt.toISOString().slice(0, 10)}`;
    await this.database.client.price_snapshots.deleteMany({
      where: { source: "_sync_tcgplayer" },
    });
    let cursor: string | undefined;
    let observed = 0;
    let written = 0;
    let considered = 0;
    let matchedPrintings = 0;
    let skippedMissingPrices = 0;
    do {
      const printings = await this.database.client.card_printings.findMany({
        where: {
          source: "scryfall",
          ...(cursor ? { id: { gt: cursor } } : {}),
        },
        orderBy: { id: "asc" },
        take: 1000,
        select: {
          id: true,
          source_key: true,
          raw_data: true,
          printing_finishes: { select: { finish: true } },
        },
      });
      if (!printings.length) break;
      cursor = printings.at(-1)!.id;
      const observations: Prisma.price_snapshotsCreateManyInput[] = [];
      for (const printing of printings) {
        considered += 1;
        const raw = printing.raw_data as Record<string, unknown> | null;
        const prices = raw?.prices as Record<string, unknown> | undefined;
        let matched = false;
        for (const { finish } of printing.printing_finishes) {
          const field =
            finish === "nonfoil"
              ? "usd"
              : finish === "foil"
                ? "usd_foil"
                : finish === "etched"
                  ? "usd_etched"
                  : null;
          const value =
            field && typeof prices?.[field] === "string"
              ? (prices[field] as string)
              : null;
          if (!value || !Number.isFinite(Number(value)) || Number(value) <= 0) {
            skippedMissingPrices += 1;
            continue;
          }
          matched = true;
          observed += 1;
          observations.push({
            printing_id: printing.id,
            finish,
            condition: "unspecified",
            source: "_sync_tcgplayer",
            source_ref: sourceRef,
            currency_code: "USD",
            market_price: value,
            captured_at: capturedAt,
            raw_data: {
              intermediary: "scryfall",
              scryfall_id: printing.source_key,
              price_field: field,
            },
          });
          written += 1;
        }
        if (matched) matchedPrintings += 1;
      }
      if (observations.length)
        await this.database.client.price_snapshots.createMany({
          data: observations,
        });
      if (printings.length < 1000) break;
    } while (cursor);
    await this.database.client.$transaction(async (transaction) => {
      await transaction.price_snapshots.deleteMany({
        where: { source: "tcgplayer", source_ref: sourceRef },
      });
      await transaction.price_snapshots.updateMany({
        where: { source: "_sync_tcgplayer", source_ref: sourceRef },
        data: { source: "tcgplayer" },
      });
    });
    return {
      provider: "tcgplayer",
      intermediary: "scryfall",
      source_ref: sourceRef,
      considered,
      matched_printings: matchedPrintings,
      unmatched_printings: considered - matchedPrintings,
      observed,
      written,
      skipped_missing_prices: skippedMissingPrices,
      captured_at: capturedAt,
    };
  }

  async syncTcgplayerFromScryfallBulk(
    cards: AsyncIterable<{ card: ScryfallCard; rawData: unknown }>,
    capturedAt = new Date(),
  ) {
    const sourceRef = `scryfall-${capturedAt.toISOString().slice(0, 10)}`;
    const printings = await this.database.client.card_printings.findMany({
      where: { source: "scryfall" },
      select: {
        id: true,
        source_key: true,
        printing_finishes: { select: { finish: true } },
      },
    });
    const byScryfallId = new Map(
      printings.map((printing) => [printing.source_key, printing]),
    );
    await this.database.client.price_snapshots.deleteMany({
      where: { source: "_sync_tcgplayer" },
    });
    let providerRecords = 0;
    let skippedMissingPrices = 0;
    let written = 0;
    const matchedIds = new Set<string>();
    let observations: Prisma.price_snapshotsCreateManyInput[] = [];
    const flush = async () => {
      if (!observations.length) return;
      await this.database.client.price_snapshots.createMany({
        data: observations,
      });
      written += observations.length;
      observations = [];
    };
    for await (const { card, rawData } of cards) {
      providerRecords += 1;
      const printing = byScryfallId.get(card.id);
      if (!printing) continue;
      matchedIds.add(printing.id);
      const raw = rawData as { prices?: Record<string, unknown> };
      for (const { finish } of printing.printing_finishes) {
        const field =
          finish === "nonfoil"
            ? "usd"
            : finish === "foil"
              ? "usd_foil"
              : finish === "etched"
                ? "usd_etched"
                : null;
        const value =
          field && typeof raw.prices?.[field] === "string"
            ? (raw.prices[field] as string)
            : null;
        if (!value || !Number.isFinite(Number(value)) || Number(value) <= 0) {
          skippedMissingPrices += 1;
          continue;
        }
        observations.push({
          printing_id: printing.id,
          finish,
          condition: "unspecified",
          source: "_sync_tcgplayer",
          source_ref: sourceRef,
          currency_code: "USD",
          market_price: value,
          captured_at: capturedAt,
          raw_data: {
            intermediary: "scryfall",
            scryfall_id: card.id,
            price_field: field,
          },
        });
        if (observations.length >= 1000) await flush();
      }
    }
    await flush();
    await this.database.client.$transaction(async (transaction) => {
      await transaction.price_snapshots.deleteMany({
        where: { source: "tcgplayer", source_ref: sourceRef },
      });
      await transaction.price_snapshots.updateMany({
        where: { source: "_sync_tcgplayer", source_ref: sourceRef },
        data: { source: "tcgplayer" },
      });
    });
    return {
      provider: "tcgplayer",
      intermediary: "scryfall",
      source_ref: sourceRef,
      provider_records: providerRecords,
      considered: printings.length,
      matched_printings: matchedIds.size,
      unmatched_printings: printings.length - matchedIds.size,
      written,
      skipped_missing_prices: skippedMissingPrices,
      captured_at: capturedAt,
    };
  }

  private async mtgjsonStream(url: string) {
    const response = await fetch(url, {
      headers: { "User-Agent": "DeckDeal daily market pricing sync" },
    });
    if (!response.ok || !response.body)
      throw new Error(
        `MTGJSON bulk request failed (${response.status}) for ${url}`,
      );
    return Readable.fromWeb(response.body as never).pipe(createGunzip());
  }

  async syncCardKingdom(capturedAt = new Date()) {
    const sourceRef = `mtgjson-${capturedAt.toISOString().slice(0, 10)}`;
    const priceStream = await this.mtgjsonStream(
      "https://mtgjson.com/api/v5/AllPricesToday.json.gz",
    );
    const priceChunks: Buffer[] = [];
    for await (const chunk of priceStream)
      priceChunks.push(
        Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk as Uint8Array),
      );
    const priceDocument = JSON.parse(
      Buffer.concat(priceChunks).toString("utf8"),
    ) as {
      data?: Record<
        string,
        {
          paper?: {
            cardkingdom?: {
              currency?: string;
              retail?: Partial<
                Record<"normal" | "foil" | "etched", Record<string, number>>
              >;
            };
          };
        }
      >;
    };
    const cardKingdomByMtgjsonId = new Map(
      Object.entries(priceDocument.data ?? {}).flatMap(([id, value]) =>
        value.paper?.cardkingdom?.retail
          ? [[id, value.paper.cardkingdom] as const]
          : [],
      ),
    );

    const deckPrintings = await this.database.client.card_printings.findMany({
      where: { source: "scryfall" },
      select: {
        id: true,
        source_key: true,
        printing_finishes: { select: { finish: true } },
      },
    });
    const byScryfallId = new Map(
      deckPrintings.map((printing) => [printing.source_key, printing]),
    );
    const identifiersStream = await this.mtgjsonStream(
      "https://mtgjson.com/api/v5/AllIdentifiers.json.gz",
    );
    const [{ parser }, { pick }, { streamObject }] = await Promise.all([
      import("stream-json"),
      import("stream-json/filters/pick.js"),
      import("stream-json/streamers/stream-object.js"),
    ]);
    const records = identifiersStream
      .pipe(parser.asStream())
      .pipe(pick.asStream({ filter: "data" }))
      .pipe(streamObject.asStream());
    const observations = new Map<
      string,
      Prisma.price_snapshotsCreateManyInput
    >();
    let matchedPrintings = 0;
    for await (const entry of records as AsyncIterable<{
      key: string;
      value: { identifiers?: { scryfallId?: string } };
    }>) {
      const provider = cardKingdomByMtgjsonId.get(entry.key);
      if (!provider) continue;
      const scryfallId = entry.value.identifiers?.scryfallId;
      const printing = scryfallId ? byScryfallId.get(scryfallId) : undefined;
      if (!printing) continue;
      matchedPrintings += 1;
      for (const { finish } of printing.printing_finishes) {
        if (finish !== "nonfoil" && finish !== "foil" && finish !== "etched")
          continue;
        const points =
          provider.retail?.[finish === "nonfoil" ? "normal" : finish];
        const latest = points
          ? Object.entries(points).sort(([left], [right]) =>
              right.localeCompare(left),
            )[0]
          : undefined;
        const value = latest?.[1];
        if (typeof value !== "number" || !Number.isFinite(value) || value <= 0)
          continue;
        observations.set(`${printing.id}:${finish}`, {
          printing_id: printing.id,
          finish,
          condition: "unspecified",
          source: "_sync_cardkingdom",
          source_ref: sourceRef,
          currency_code: provider.currency ?? "USD",
          market_price: value,
          captured_at: capturedAt,
          raw_data: {
            intermediary: "mtgjson",
            mtgjson_uuid: entry.key,
            scryfall_id: scryfallId,
            price_date: latest![0],
            price_type: `paper.cardkingdom.retail.${finish === "nonfoil" ? "normal" : finish}`,
          },
        });
      }
    }

    await this.database.client.price_snapshots.deleteMany({
      where: { source: "_sync_cardkingdom" },
    });
    const staged = [...observations.values()];
    for (let index = 0; index < staged.length; index += 1000) {
      await this.database.client.price_snapshots.createMany({
        data: staged.slice(index, index + 1000),
      });
    }
    await this.database.client.$transaction(async (transaction) => {
      await transaction.price_snapshots.deleteMany({
        where: { source: "cardkingdom", source_ref: sourceRef },
      });
      await transaction.price_snapshots.updateMany({
        where: { source: "_sync_cardkingdom", source_ref: sourceRef },
        data: { source: "cardkingdom" },
      });
    });
    return {
      provider: "cardkingdom",
      intermediary: "mtgjson",
      source_ref: sourceRef,
      provider_printings: cardKingdomByMtgjsonId.size,
      matched_printings: matchedPrintings,
      unmatched_printings: cardKingdomByMtgjsonId.size - matchedPrintings,
      written: staged.length,
      captured_at: capturedAt,
    };
  }
}
