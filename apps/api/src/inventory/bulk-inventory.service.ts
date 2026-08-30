import { BadRequestException, Injectable } from "@nestjs/common";
import type { BulkInventoryCommitInput, BulkInventoryResolveInput } from "@repo/validation";
import { DatabaseService } from "../database/database.service";

const conditions = new Set(["mint", "near_mint", "lightly_played", "moderately_played", "heavily_played", "damaged"]);
const normalizeName = (value: string) => value.trim().toLowerCase().replace(/\s+/g, " ");

@Injectable()
export class BulkInventoryService {
  constructor(private readonly database: DatabaseService) {}

  async resolve(userId: string, input: BulkInventoryResolveInput) {
    const game = await this.database.client.games.findUnique({
      where: { slug: input.gameSlug }, select: { id: true, slug: true, name: true },
    });
    if (!game) throw new BadRequestException("Unknown gameSlug.");
    if (input.collectionId) {
      const collection = await this.database.client.collections.findFirst({
        where: { id: input.collectionId, user_id: userId, game_id: game.id }, select: { id: true },
      });
      if (!collection) throw new BadRequestException("The selected collection does not belong to this user and game.");
    }

    const normalizedNames = [...new Set(input.rows.map((row) => normalizeName(row.name)).filter(Boolean))];
    const canonicalCards = await this.database.client.canonical_cards.findMany({
      where: { game_id: game.id, normalized_name: { in: normalizedNames } },
      select: { id: true, name: true, normalized_name: true },
    });
    const canonicalByName = new Map(canonicalCards.map((card) => [card.normalized_name, card]));
    const printings = canonicalCards.length ? await this.database.client.card_printings.findMany({
      where: { game_id: game.id, canonical_card_id: { in: canonicalCards.map((card) => card.id) }, is_digital: false },
      select: { id: true, canonical_card_id: true, collector_number: true, language_code: true, image_small_uri: true,
        card_sets: { select: { code: true, name: true } }, printing_finishes: { select: { finish: true } } },
      orderBy: [{ card_sets: { release_date: "desc" } }, { collector_number: "asc" }],
    }) : [];

    let totalQuantity = 0;
    const rows = input.rows.map((row, index) => {
      const quantity = typeof row.quantity === "number" ? row.quantity : Number(row.quantity);
      const condition = row.condition?.trim().toLowerCase().replace(/[ -]+/g, "_") || input.defaults.condition;
      const language = row.language?.trim().toLowerCase() || input.defaults.language.toLowerCase();
      const requestedFinish = row.finish?.trim().toLowerCase() || input.defaults.finish?.trim().toLowerCase() || null;
      const base = { index, source: row.source, quantity, name: row.name.trim(), game, set: row.set?.trim() || null,
        collectorNumber: row.collectorNumber?.trim() || null, finish: requestedFinish, condition, language,
        collectionId: input.collectionId ?? null };
      if (!Number.isInteger(quantity) || quantity < 1 || !base.name || !conditions.has(condition)) {
        return { ...base, status: "INVALID" as const, message: !base.name ? "Card name is required." : !conditions.has(condition) ? "Condition is not supported." : "Quantity must be a positive integer.", candidates: [] };
      }
      totalQuantity += quantity;
      const canonical = canonicalByName.get(normalizeName(base.name));
      if (!canonical) return { ...base, status: "UNMATCHED" as const, message: "No card with this name exists in the selected game.", candidates: [] };
      const matches = printings.filter((printing) => printing.canonical_card_id === canonical.id &&
        printing.language_code.toLowerCase() === language &&
        (!base.set || printing.card_sets.code.toLowerCase() === base.set.toLowerCase() || printing.card_sets.name.toLowerCase() === base.set.toLowerCase()) &&
        (!base.collectorNumber || printing.collector_number.toLowerCase() === base.collectorNumber.toLowerCase())).slice(0, 100);
      const candidates: Array<(typeof matches)[number] & { finishes: string[]; finish: string | null }> = [];
      for (const printing of matches) {
        const finishes = printing.printing_finishes.map((value) => value.finish);
        const eligible = requestedFinish ? finishes.filter((value) => value.toLowerCase() === requestedFinish) : finishes.length === 1 ? finishes : [];
        if (requestedFinish || finishes.length === 1) candidates.push(...eligible.map((value) => ({ ...printing, finishes, finish: value })));
        else candidates.push({ ...printing, finishes, finish: null });
      }
      if (!matches.length) return { ...base, canonicalCard: canonical, status: "UNMATCHED" as const, message: "No physical printing matches the supplied set, collector number, and language.", candidates: [] };
      if (requestedFinish && !candidates.length) return { ...base, canonicalCard: canonical, status: "INVALID" as const, message: "The requested finish is not supported by the matching printing.", candidates: matches.map((printing) => ({ ...printing, finishes: printing.printing_finishes.map((value) => value.finish), finish: null })) };
      const exact = candidates.length === 1 && candidates[0]!.finish;
      return { ...base, canonicalCard: canonical, status: exact ? "EXACT" as const : "AMBIGUOUS" as const,
        message: exact ? null : "Choose the exact printing and finish.", candidates,
        ...(exact ? { printingId: candidates[0]!.id, finish: candidates[0]!.finish } : {}) };
    });
    if (totalQuantity > 5000) throw new BadRequestException("A bulk add may contain at most 5000 cards.");
    return { game, totalQuantity, rows };
  }

  async commit(userId: string, input: BulkInventoryCommitInput) {
    return this.database.client.$transaction(async (transaction) => {
      const game = await transaction.games.findUnique({ where: { slug: input.gameSlug }, select: { id: true } });
      if (!game) throw new BadRequestException("Unknown gameSlug.");
      const collectionIds = [...new Set(input.rows.map((row) => row.collectionId).filter((value): value is string => Boolean(value)))];
      if (collectionIds.length) {
        const count = await transaction.collections.count({ where: { id: { in: collectionIds }, user_id: userId, game_id: game.id } });
        if (count !== collectionIds.length) throw new BadRequestException("A selected collection does not belong to this user and game.");
      }
      const printingIds = [...new Set(input.rows.map((row) => row.printingId))];
      const finishes = await transaction.printing_finishes.findMany({
        where: { printing_id: { in: printingIds }, card_printings: { is: { game_id: game.id, is_digital: false } } },
        select: { printing_id: true, finish: true, card_printings: { select: { language_code: true } } },
      });
      const valid = new Map(finishes.map((value) => [`${value.printing_id}:${value.finish}`, value.card_printings.language_code]));
      for (const row of input.rows) {
        const language = valid.get(`${row.printingId}:${row.finish}`);
        if (!language) throw new BadRequestException("A printing or finish is unresolved, invalid, digital, or belongs to another game.");
        if (language.toLowerCase() !== row.language.toLowerCase()) throw new BadRequestException("Row language does not match the selected printing.");
      }
      const result = await transaction.inventory_items.createMany({ data: input.rows.map((row) => ({
        game_id: game.id, printing_id: row.printingId, finish: row.finish, owner_user_id: userId, owner_store_id: null,
        collection_id: row.collectionId, condition: row.condition, language_code: valid.get(`${row.printingId}:${row.finish}`)!,
        quantity: row.quantity, is_signed: false, is_altered: false, is_graded: false, status: "available",
      })) });
      return { addedQuantity: input.rows.reduce((sum, row) => sum + row.quantity, 0), entryCount: result.count };
    });
  }
}
