import { WishlistsService } from "../src/wishlists/wishlists.service";

const persisted: Array<{ canonical_card_id: string | null }> = [];
let failBatch = true;
const gameId = "game-id", wishlistId = "wishlist-id", userId = "owner-id";
const client: any = {
  games: { findUnique: async ({ where }: any) => where.slug === "mtg" ? { id: gameId } : null },
  $transaction: async (work: (transaction: any) => Promise<unknown>) => {
    const pending = [...persisted];
    const transaction = {
      wishlists: { findFirst: async ({ where }: any) => where.id === wishlistId && where.user_id === userId && where.game_id === gameId && where.status === "active" ? { id: wishlistId, game_id: gameId } : null },
      canonical_cards: { findUnique: async ({ where }: any) => ({ id: where.id, game_id: gameId }) },
      card_printings: { findUnique: async () => null },
      printing_finishes: { findFirst: async () => null },
      wishlist_items: {
        findMany: async () => [],
        createMany: async ({ data }: any) => {
          pending.push(data[0]);
          if (failBatch) throw new Error("intentional second-row database failure");
          pending.splice(persisted.length, pending.length - persisted.length, ...data);
          return { count: data.length };
        },
      },
    };
    const result = await work(transaction);
    persisted.splice(0, persisted.length, ...pending);
    return result;
  },
};
const service = new WishlistsService({ client } as any);
const item = (id: string) => ({ canonicalCardId: id, printingId: null, quantityDesired: 1,
  priority: "normal" as const, willingToPayCash: true, willingToTradeCards: false });

async function main() {
  try {
    await service.createWishlistItemsBulk(userId, wishlistId, "mtg", { items: [item("card-a"), item("card-b")] });
    throw new Error("Expected the intentional batch failure.");
  } catch (error) {
    if ((error as Error).message === "Expected the intentional batch failure.") throw error;
  }
  if (persisted.length !== 0) throw new Error("A failed confirmed batch left partial Wishlist items.");
  failBatch = false;
  const result = await service.createWishlistItemsBulk(userId, wishlistId, "mtg", { items: [item("card-a"), item("card-b")] });
  if (Number(persisted.length) !== 2 || result.created_items !== 2) throw new Error("Successful batch did not commit exactly once.");
  console.log("Atomic Bulk Wants rollback regression passed.");
}
void main();
