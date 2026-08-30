import { z } from "zod";
import { inventoryConditionSchema } from "./schemas";

export const BULK_INVENTORY_MAX_ROWS = 500;
export const BULK_INVENTORY_MAX_QUANTITY = 5000;

const optionalText = z.string().trim().max(200).optional().nullable();

export const bulkInventorySourceRowSchema = z
  .object({
    source: z.string().trim().min(1).max(1000),
    quantity: z.union([z.number(), z.string()]),
    name: z.string().trim().max(300),
    set: optionalText,
    collectorNumber: optionalText,
    finish: optionalText,
    condition: optionalText,
    language: optionalText,
  })
  .strict();

export const bulkInventoryResolveSchema = z
  .object({
    gameSlug: z.string().trim().min(1).max(64).toLowerCase(),
    collectionId: z.string().uuid().nullable().optional(),
    defaults: z
      .object({
        finish: optionalText,
        condition: inventoryConditionSchema,
        language: z.string().trim().min(1).max(16),
      })
      .strict(),
    rows: z
      .array(bulkInventorySourceRowSchema)
      .min(1)
      .max(BULK_INVENTORY_MAX_ROWS),
  })
  .strict();

export const bulkInventoryCommitRowSchema = z
  .object({
    quantity: z.number().int().positive(),
    printingId: z.string().uuid(),
    finish: z.string().trim().min(1).max(100),
    condition: inventoryConditionSchema,
    language: z.string().trim().min(1).max(16),
    collectionId: z.string().uuid().nullable(),
  })
  .strict();

export const bulkInventoryCommitSchema = z
  .object({
    gameSlug: z.string().trim().min(1).max(64).toLowerCase(),
    rows: z
      .array(bulkInventoryCommitRowSchema)
      .min(1)
      .max(BULK_INVENTORY_MAX_ROWS),
  })
  .strict()
  .superRefine((value, context) => {
    const total = value.rows.reduce((sum, row) => sum + row.quantity, 0);
    if (total > BULK_INVENTORY_MAX_QUANTITY)
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message: `A bulk add may contain at most ${BULK_INVENTORY_MAX_QUANTITY} cards.`,
        path: ["rows"],
      });
  });

export type BulkInventorySourceRow = z.infer<
  typeof bulkInventorySourceRowSchema
>;
export type BulkInventoryResolveInput = z.infer<
  typeof bulkInventoryResolveSchema
>;
export type BulkInventoryCommitInput = z.infer<
  typeof bulkInventoryCommitSchema
>;

export function parseBulkInventoryLine(
  line: string,
): BulkInventorySourceRow | null {
  const source = line.trim();
  if (!source) return null;
  const prefix = source.match(/^(\d+)\s*x?\s+(.+)$/i);
  if (!prefix) return { source, quantity: "", name: source };
  const details = prefix[2]!.match(/^(.+?)\s+\[([^\]]+)\](?:\s+(\S+))?$/);
  return {
    source,
    quantity: prefix[1]!,
    name: (details?.[1] ?? prefix[2]!).trim(),
    set: details?.[2]?.trim() || null,
    collectorNumber: details?.[3]?.trim() || null,
  };
}

const csvAliases: Record<string, keyof BulkInventorySourceRow> = {
  quantity: "quantity",
  qty: "quantity",
  count: "quantity",
  name: "name",
  card: "name",
  card_name: "name",
  set: "set",
  edition: "set",
  set_code: "set",
  collector_number: "collectorNumber",
  collector: "collectorNumber",
  card_number: "collectorNumber",
  finish: "finish",
  foil: "finish",
  condition: "condition",
  language: "language",
  lang: "language",
};

function csvCells(line: string) {
  const cells: string[] = [];
  let value = "";
  let quoted = false;
  for (let index = 0; index < line.length; index += 1) {
    const character = line[index]!;
    if (character === '"' && quoted && line[index + 1] === '"') {
      value += '"';
      index += 1;
    } else if (character === '"') quoted = !quoted;
    else if (character === "," && !quoted) {
      cells.push(value.trim());
      value = "";
    } else value += character;
  }
  cells.push(value.trim());
  return cells;
}

export function parseBulkInventoryCsv(csv: string) {
  const lines = csv
    .replace(/^\uFEFF/, "")
    .split(/\r?\n/)
    .filter((line) => line.trim());
  if (!lines.length)
    return { rows: [] as BulkInventorySourceRow[], errors: ["CSV is empty."] };
  const headers = csvCells(lines[0]!).map((header) =>
    header.toLowerCase().replace(/[ -]+/g, "_"),
  );
  const mapped = headers.map((header) => csvAliases[header] ?? null);
  const errors: string[] = [];
  headers.forEach((header, index) => {
    if (!mapped[index]) errors.push(`Unsupported CSV header: ${header}`);
  });
  if (!mapped.includes("quantity"))
    errors.push("CSV requires a quantity column.");
  if (!mapped.includes("name")) errors.push("CSV requires a name column.");
  if (errors.length) return { rows: [] as BulkInventorySourceRow[], errors };
  return {
    errors,
    rows: lines.slice(1).map((line, rowIndex) => {
      const result: Record<string, unknown> = {
        source: line,
        quantity: "",
        name: "",
      };
      csvCells(line).forEach((cell, index) => {
        const key = mapped[index];
        if (key) result[key] = cell || null;
      });
      result.source = `CSV row ${rowIndex + 2}: ${line}`;
      return result as BulkInventorySourceRow;
    }),
  };
}
