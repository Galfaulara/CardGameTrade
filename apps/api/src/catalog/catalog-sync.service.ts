import {
  createReadStream,
  createWriteStream,
} from "node:fs";
import {
  mkdir,
  rename,
  stat,
  unlink,
} from "node:fs/promises";
import { join } from "node:path";
import { createInterface } from "node:readline";
import { Readable } from "node:stream";
import { pipeline } from "node:stream/promises";
import { createGunzip } from "node:zlib";

import { Injectable, Logger } from "@nestjs/common";

import { DatabaseService } from "../database/database.service";
import type {
  ScryfallBulkDataItem,
  ScryfallCard,
  ScryfallList,
  ScryfallSet,
} from "./scryfall.types";

@Injectable()
export class CatalogSyncService {
  private readonly logger = new Logger(
    CatalogSyncService.name,
  );

  constructor(
    private readonly database: DatabaseService,
  ) {}

  private async getBulkDataItem(
    type: string,
  ) {
    const response = await fetch(
      "https://api.scryfall.com/bulk-data",
      {
        headers: {
          Accept:
            "application/json;q=0.9,*/*;q=0.8",
          "User-Agent": "DeckDeal/0.1.0",
        },
      },
    );

    if (!response.ok) {
      throw new Error(
        `Scryfall bulk-data request failed: ${response.status} ${response.statusText}`,
      );
    }

    const result =
      (await response.json()) as ScryfallList<ScryfallBulkDataItem>;

    const bulkData = result.data.find(
      (item) => item.type === type,
    );

    if (!bulkData) {
      throw new Error(
        `Scryfall bulk data type "${type}" was not found.`,
      );
    }

    if (!bulkData.jsonl_download_uri) {
      throw new Error(
        `Scryfall bulk data type "${type}" did not provide jsonl_download_uri.`,
      );
    }

    return bulkData;
  }

  private async getFileSize(
    filePath: string,
  ) {
    try {
      const file = await stat(filePath);
      return file.size;
    } catch (error) {
      if (
        (error as NodeJS.ErrnoException)
          .code === "ENOENT"
      ) {
        return null;
      }

      throw error;
    }
  }

  private async sleep(
    milliseconds: number,
  ) {
    await new Promise((resolve) =>
      setTimeout(resolve, milliseconds),
    );
  }

  private async ensureBulkDataFile(
    type: string,
  ) {
    const bulkData =
      await this.getBulkDataItem(type);

    const version = bulkData.updated_at
      .replace(
        /[^0-9A-Za-z]+/g,
        "-",
      )
      .replace(/^-|-$/g, "");

    const cacheDirectory = join(
      process.cwd(),
      ".cache",
      "scryfall",
    );

    await mkdir(cacheDirectory, {
      recursive: true,
    });

    const finalPath = join(
      cacheDirectory,
      `${type}-${version}.jsonl.gz`,
    );

    const partialPath =
      `${finalPath}.part`;

    const finalSize =
      await this.getFileSize(
        finalPath,
      );

    if (
      finalSize ===
      bulkData.compressed_size
    ) {
      this.logger.log(
        `Using cached ${type} bulk file.`,
      );

      return finalPath;
    }

    if (finalSize !== null) {
      await unlink(finalPath);
    }

    const maxAttempts = 6;

    for (
      let attempt = 1;
      attempt <= maxAttempts;
      attempt += 1
    ) {
      let downloadedBytes =
        (await this.getFileSize(
          partialPath,
        )) ?? 0;

      if (
        downloadedBytes >
        bulkData.compressed_size
      ) {
        await unlink(partialPath);
        downloadedBytes = 0;
      }

      const percentage =
        bulkData.compressed_size > 0
          ? (
              (downloadedBytes /
                bulkData.compressed_size) *
              100
            ).toFixed(1)
          : "0.0";

      if (downloadedBytes > 0) {
        this.logger.log(
          `Resuming ${type} download at ${percentage}% (${downloadedBytes} bytes)...`,
        );
      } else {
        this.logger.log(
          `Downloading ${type} bulk data (${bulkData.compressed_size} compressed bytes)...`,
        );
      }

      const headers: Record<
        string,
        string
      > = {
        Accept:
          "application/octet-stream,*/*",
        "Accept-Encoding":
          "identity",
        "User-Agent":
          "DeckDeal/0.1.0",
      };

      if (downloadedBytes > 0) {
        headers.Range =
          `bytes=${downloadedBytes}-`;
      }

      try {
        const response = await fetch(
          bulkData.jsonl_download_uri,
          {
            headers,
          },
        );

        if (!response.body) {
          throw new Error(
            "Scryfall bulk download returned no response body.",
          );
        }

        let append = false;

        if (downloadedBytes > 0) {
          if (
            response.status === 206
          ) {
            append = true;
          } else if (response.ok) {
            this.logger.warn(
              "Scryfall did not honor the Range request. Restarting this download from byte 0.",
            );

            downloadedBytes = 0;
          } else {
            throw new Error(
              `Scryfall bulk download failed: ${response.status} ${response.statusText}`,
            );
          }
        } else if (!response.ok) {
          throw new Error(
            `Scryfall bulk download failed: ${response.status} ${response.statusText}`,
          );
        }

        const output =
          createWriteStream(
            partialPath,
            {
              flags: append
                ? "a"
                : "w",
            },
          );

        await pipeline(
          Readable.fromWeb(
            response.body as never,
          ),
          output,
        );
      } catch (error) {
        const currentSize =
          (await this.getFileSize(
            partialPath,
          )) ?? 0;

        this.logger.warn(
          `Bulk download interrupted on attempt ${attempt}/${maxAttempts}. ${currentSize} bytes are preserved.`,
        );

        if (
          attempt === maxAttempts
        ) {
          throw error;
        }

        await this.sleep(
          attempt * 3000,
        );

        continue;
      }

      const downloadedSize =
        await this.getFileSize(
          partialPath,
        );

      if (
        downloadedSize ===
        bulkData.compressed_size
      ) {
        await rename(
          partialPath,
          finalPath,
        );

        this.logger.log(
          `${type} bulk download complete.`,
        );

        return finalPath;
      }

      if (
        downloadedSize !== null &&
        downloadedSize >
          bulkData.compressed_size
      ) {
        await unlink(partialPath);

        this.logger.warn(
          `${type} download exceeded the expected size. Restarting it.`,
        );
      } else {
        this.logger.warn(
          `${type} download ended before reaching the expected size. Retrying.`,
        );
      }

      if (
        attempt < maxAttempts
      ) {
        await this.sleep(
          attempt * 3000,
        );
      }
    }

    throw new Error(
      `Unable to download Scryfall bulk data "${type}" after ${maxAttempts} attempts.`,
    );
  }

  private async *readBulkDataCards(
    type: string,
  ) {
    const filePath =
      await this.ensureBulkDataFile(
        type,
      );

    this.logger.log(
      `Reading ${type} from local cache...`,
    );

    const compressedInput =
      createReadStream(filePath);

    const decompressedInput =
      compressedInput.pipe(
        createGunzip(),
      );

    const lines = createInterface({
      input: decompressedInput,
      crlfDelay: Infinity,
    });

    for await (const line of lines) {
      const trimmedLine =
        line.trim();

      if (!trimmedLine) {
        continue;
      }

      const rawData =
        JSON.parse(trimmedLine);

      yield {
        rawData,
        card:
          rawData as ScryfallCard,
      };
    }
  }

  private getCardImageUris(
    card: ScryfallCard,
  ) {
    if (card.image_uris) {
      return card.image_uris;
    }

    return card.card_faces?.find(
      (face) => face.image_uris,
    )?.image_uris;
  }

  async syncSets() {
    const game =
      await this.database.client.games.findUnique(
        {
          where: {
            slug: "mtg",
          },
          select: {
            id: true,
          },
        },
      );

    if (!game) {
      throw new Error(
        'MTG game row was not found. Expected games.slug = "mtg".',
      );
    }

    const response = await fetch(
      "https://api.scryfall.com/sets",
      {
        headers: {
          Accept:
            "application/json;q=0.9,*/*;q=0.8",
          "User-Agent":
            "DeckDeal/0.1.0",
        },
      },
    );

    if (!response.ok) {
      throw new Error(
        `Scryfall sets request failed: ${response.status} ${response.statusText}`,
      );
    }

    const result =
      (await response.json()) as ScryfallList<ScryfallSet>;

    const physicalSets =
      result.data.filter(
        (set) => !set.digital,
      );

    let synchronized = 0;

    for (const set of physicalSets) {
      await this.database.client.card_sets.upsert(
        {
          where: {
            game_id_code: {
              game_id: game.id,
              code: set.code,
            },
          },
          create: {
            game_id: game.id,
            code: set.code,
            name: set.name,
            source: "scryfall",
            source_id: set.id,
            release_date:
              set.released_at
                ? new Date(
                    set.released_at,
                  )
                : null,
            set_type: set.set_type,
          },
          update: {
            name: set.name,
            source: "scryfall",
            source_id: set.id,
            release_date:
              set.released_at
                ? new Date(
                    set.released_at,
                  )
                : null,
            set_type: set.set_type,
          },
        },
      );

      synchronized += 1;

      if (
        synchronized % 100 ===
        0
      ) {
        this.logger.log(
          `Synchronized ${synchronized} sets...`,
        );
      }
    }

    return {
      received: result.data.length,
      skippedDigital:
        result.data.length -
        physicalSets.length,
      synchronized,
    };
  }

  async syncCanonicalCards() {
    const game =
      await this.database.client.games.findUnique(
        {
          where: {
            slug: "mtg",
          },
          select: {
            id: true,
          },
        },
      );

    if (!game) {
      throw new Error(
        'MTG game row was not found. Expected games.slug = "mtg".',
      );
    }

    let synchronized = 0;
    let skippedWithoutOracleId = 0;

    for await (const {
      rawData,
      card,
    } of this.readBulkDataCards(
      "oracle_cards",
    )) {
      if (!card.oracle_id) {
        skippedWithoutOracleId += 1;
        continue;
      }

      await this.database.client.canonical_cards.upsert(
        {
          where: {
            game_id_source_source_key:
              {
                game_id: game.id,
                source:
                  "scryfall",
                source_key:
                  card.oracle_id,
              },
          },
          create: {
            game_id: game.id,
            source: "scryfall",
            source_key:
              card.oracle_id,
            name: card.name,
            normalized_name:
              card.name
                .trim()
                .toLowerCase(),
            mana_cost:
              card.mana_cost ??
              null,
            type_line:
              card.type_line ??
              null,
            oracle_text:
              card.oracle_text ??
              null,
            colors:
              card.colors ?? [],
            color_identity:
              card.color_identity ??
              [],
            raw_data: rawData,
          },
          update: {
            name: card.name,
            normalized_name:
              card.name
                .trim()
                .toLowerCase(),
            mana_cost:
              card.mana_cost ??
              null,
            type_line:
              card.type_line ??
              null,
            oracle_text:
              card.oracle_text ??
              null,
            colors:
              card.colors ?? [],
            color_identity:
              card.color_identity ??
              [],
            raw_data: rawData,
            updated_at:
              new Date(),
          },
        },
      );

      synchronized += 1;

      if (
        synchronized % 1000 ===
        0
      ) {
        this.logger.log(
          `Synchronized ${synchronized} canonical cards...`,
        );
      }
    }

    return {
      synchronized,
      skippedWithoutOracleId,
    };
  }

  async syncPrintings() {
    const game =
      await this.database.client.games.findUnique(
        {
          where: {
            slug: "mtg",
          },
          select: {
            id: true,
          },
        },
      );

    if (!game) {
      throw new Error(
        'MTG game row was not found. Expected games.slug = "mtg".',
      );
    }

    this.logger.log(
      "Loading DeckDeal set and canonical-card mappings...",
    );

    const [
      sets,
      canonicalCards,
    ] = await Promise.all([
      this.database.client.card_sets.findMany(
        {
          where: {
            game_id: game.id,
            source:
              "scryfall",
            source_id: {
              not: null,
            },
          },
          select: {
            id: true,
            source_id: true,
          },
        },
      ),

      this.database.client.canonical_cards.findMany(
        {
          where: {
            game_id: game.id,
            source:
              "scryfall",
          },
          select: {
            id: true,
            source_key: true,
          },
        },
      ),
    ]);

    const setIdByScryfallId =
      new Map(
        sets
          .filter(
            (
              set,
            ): set is typeof set & {
              source_id: string;
            } =>
              set.source_id !==
              null,
          )
          .map((set) => [
            set.source_id,
            set.id,
          ]),
      );

    const canonicalIdByOracleId =
      new Map(
        canonicalCards.map(
          (card) => [
            card.source_key,
            card.id,
          ],
        ),
      );

    this.logger.log(
      `Loaded ${setIdByScryfallId.size} sets and ${canonicalIdByOracleId.size} canonical cards.`,
    );

    let synchronized = 0;
    let finishesSynchronized = 0;
    let skippedDigital = 0;
    let skippedWithoutOracleId = 0;
    let skippedMissingCanonicalCard =
      0;
    let skippedMissingSet = 0;

    for await (const {
      rawData,
      card,
    } of this.readBulkDataCards(
      "all_cards",
    )) {
      if (card.digital) {
        skippedDigital += 1;
        continue;
      }

      if (!card.oracle_id) {
        skippedWithoutOracleId +=
          1;
        continue;
      }

      const canonicalCardId =
        canonicalIdByOracleId.get(
          card.oracle_id,
        );

      if (!canonicalCardId) {
        skippedMissingCanonicalCard +=
          1;
        continue;
      }

      const cardSetId =
        setIdByScryfallId.get(
          card.set_id,
        );

      if (!cardSetId) {
        skippedMissingSet += 1;
        continue;
      }

      const imageUris =
        this.getCardImageUris(
          card,
        );

      const printing =
        await this.database.client.card_printings.upsert(
          {
            where: {
              source_source_key: {
                source:
                  "scryfall",
                source_key:
                  card.id,
              },
            },
            create: {
              game_id: game.id,
              canonical_card_id:
                canonicalCardId,
              card_set_id:
                cardSetId,

              source:
                "scryfall",
              source_key:
                card.id,

              collector_number:
                card.collector_number,
              language_code:
                card.lang,

              printed_name:
                card.printed_name ??
                null,
              printed_type_line:
                card.printed_type_line ??
                null,
              printed_text:
                card.printed_text ??
                null,

              rarity:
                card.rarity ??
                null,
              artist_name:
                card.artist ??
                null,

              treatment:
                card.frame_effects?.join(
                  ",",
                ) ?? null,
              frame_version:
                card.frame ??
                null,
              border_color:
                card.border_color ??
                null,

              is_promo:
                card.promo,
              is_reprint:
                card.reprint,
              is_digital:
                card.digital,

              released_at:
                card.released_at
                  ? new Date(
                      card.released_at,
                    )
                  : null,

              image_small_uri:
                imageUris?.small ??
                null,
              image_normal_uri:
                imageUris?.normal ??
                null,
              image_large_uri:
                imageUris?.large ??
                null,

              raw_data:
                rawData,
            },
            update: {
              game_id: game.id,
              canonical_card_id:
                canonicalCardId,
              card_set_id:
                cardSetId,

              collector_number:
                card.collector_number,
              language_code:
                card.lang,

              printed_name:
                card.printed_name ??
                null,
              printed_type_line:
                card.printed_type_line ??
                null,
              printed_text:
                card.printed_text ??
                null,

              rarity:
                card.rarity ??
                null,
              artist_name:
                card.artist ??
                null,

              treatment:
                card.frame_effects?.join(
                  ",",
                ) ?? null,
              frame_version:
                card.frame ??
                null,
              border_color:
                card.border_color ??
                null,

              is_promo:
                card.promo,
              is_reprint:
                card.reprint,
              is_digital:
                card.digital,

              released_at:
                card.released_at
                  ? new Date(
                      card.released_at,
                    )
                  : null,

              image_small_uri:
                imageUris?.small ??
                null,
              image_normal_uri:
                imageUris?.normal ??
                null,
              image_large_uri:
                imageUris?.large ??
                null,

              raw_data:
                rawData,
              updated_at:
                new Date(),
            },
            select: {
              id: true,
            },
          },
        );

      const finishes = [
        ...new Set(
          card.finishes ?? [],
        ),
      ].filter(
        (finish) =>
          finish.trim().length >
          0,
      );

      if (
        finishes.length > 0
      ) {
        const result =
          await this.database.client.printing_finishes.createMany(
            {
              data: finishes.map(
                (finish) => ({
                  printing_id:
                    printing.id,
                  finish,
                }),
              ),
              skipDuplicates:
                true,
            },
          );

        finishesSynchronized +=
          result.count;
      }

      synchronized += 1;

      if (
        synchronized % 1000 ===
        0
      ) {
        this.logger.log(
          `Synchronized ${synchronized} printings...`,
        );
      }
    }

    return {
      synchronized,
      finishesSynchronized,
      skippedDigital,
      skippedWithoutOracleId,
      skippedMissingCanonicalCard,
      skippedMissingSet,
    };
  }
}