import { BadRequestException } from "@nestjs/common";
import { OffersService } from "../src/offers/offers.service";
import { WishlistsService } from "../src/wishlists/wishlists.service";

const assert: (value: unknown, message: string) => asserts value = (
  value,
  message,
) => {
  if (!value) throw new Error(message);
};

const games = [
  { id: "game-mtg", slug: "mtg" },
  { id: "game-pokemon", slug: "pokemon" },
  { id: "game-yugioh", slug: "yugioh" },
];

const ids = (items: Array<{ id: string }>) =>
  items.map((item) => item.id).sort().join(",");

// --- Listing offers (OffersService) ---

const listings = [
  { id: "listing-a", seller_user_id: "user-1", seller_store_id: null },
  { id: "listing-b", seller_user_id: "user-1", seller_store_id: null },
];

const listingOffers = [
  { id: "offer-sent-mtg", game_id: "game-mtg", listing_id: "listing-other-mtg", offerer_user_id: "user-1", offer_items_offer_items_offer_idTolisting_offers: [] },
  { id: "offer-sent-pokemon", game_id: "game-pokemon", listing_id: "listing-other-pokemon", offerer_user_id: "user-1", offer_items_offer_items_offer_idTolisting_offers: [] },
  { id: "offer-received-mtg", game_id: "game-mtg", listing_id: "listing-a", offerer_user_id: "user-2", offer_items_offer_items_offer_idTolisting_offers: [] },
  { id: "offer-received-pokemon", game_id: "game-pokemon", listing_id: "listing-b", offerer_user_id: "user-2", offer_items_offer_items_offer_idTolisting_offers: [] },
];

function fakeOffersDatabase() {
  return {
    client: {
      user_profiles: {
        findUnique: async ({ where: { id } }: { where: { id: string } }) =>
          id === "user-1" ? { id: "user-1" } : null,
      },
      games: {
        findUnique: async ({ where: { slug } }: { where: { slug: string } }) =>
          games.find((game) => game.slug === slug) ?? null,
      },
      listings: {
        findFirst: async () => null,
        findMany: async ({
          where,
        }: {
          where: { seller_user_id: string; seller_store_id: null };
        }) =>
          listings.filter(
            (listing) =>
              listing.seller_user_id === where.seller_user_id &&
              listing.seller_store_id === where.seller_store_id,
          ),
      },
      listing_offers: {
        findMany: async ({
          where,
        }: {
          where: {
            offerer_user_id?: string;
            game_id?: string;
            listing_id?: { in: string[] };
          };
        }) =>
          listingOffers.filter((offer) => {
            if (where.offerer_user_id !== undefined && offer.offerer_user_id !== where.offerer_user_id) return false;
            if (where.game_id !== undefined && offer.game_id !== where.game_id) return false;
            if (where.listing_id && !where.listing_id.in.includes(offer.listing_id)) return false;
            return true;
          }),
      },
    },
  } as never;
}

async function testListingOffers() {
  const service = new OffersService(fakeOffersDatabase());

  // 1. Unfiltered sent offers must preserve current behavior.
  const sentAll = await service.getUserSentOffers("user-1");
  assert(ids(sentAll) === ids([{ id: "offer-sent-mtg" }, { id: "offer-sent-pokemon" }]), "Unfiltered sent offers must preserve current behavior.");

  // 2/4. Per-game filtering is same-game, and game_id is exposed.
  const sentMtg = await service.getUserSentOffers("user-1", { gameSlug: "mtg" });
  assert(sentMtg.length === 1 && sentMtg[0]?.id === "offer-sent-mtg" && (sentMtg[0] as any).game_id === "game-mtg", "mtg-filtered sent offers must return only the MTG offer and expose game_id.");
  const sentPokemon = await service.getUserSentOffers("user-1", { gameSlug: "pokemon" });
  assert(sentPokemon.length === 1 && sentPokemon[0]?.id === "offer-sent-pokemon", "pokemon-filtered sent offers must return only the Pokémon offer.");

  // 5/10. A game with zero matching offers must return empty, not the unfiltered set (same predicate excludes cleanly).
  const sentYugioh = await service.getUserSentOffers("user-1", { gameSlug: "yugioh" });
  assert(sentYugioh.length === 0, "yugioh-filtered sent offers must be empty when no such offers exist.");

  // 3. Unknown game must produce a clean 400.
  let threw = false;
  try {
    await service.getUserSentOffers("user-1", { gameSlug: "unknown-cert-game" });
  } catch (error) {
    threw = error instanceof BadRequestException;
  }
  assert(threw, "An unknown gameSlug must raise a BadRequestException for sent offers.");

  // Received offers: same rules, resolved via the user's own listings.
  const receivedAll = await service.getUserReceivedOffers("user-1");
  assert(ids(receivedAll) === ids([{ id: "offer-received-mtg" }, { id: "offer-received-pokemon" }]), "Unfiltered received offers must preserve current behavior.");

  const receivedMtg = await service.getUserReceivedOffers("user-1", undefined, { gameSlug: "mtg" });
  assert(receivedMtg.length === 1 && receivedMtg[0]?.id === "offer-received-mtg" && (receivedMtg[0] as any).game_id === "game-mtg", "mtg-filtered received offers must return only the MTG offer and expose game_id.");

  const receivedPokemon = await service.getUserReceivedOffers("user-1", undefined, { gameSlug: "pokemon" });
  assert(receivedPokemon.length === 1 && receivedPokemon[0]?.id === "offer-received-pokemon", "pokemon-filtered received offers must return only the Pokémon offer.");

  const receivedYugioh = await service.getUserReceivedOffers("user-1", undefined, { gameSlug: "yugioh" });
  assert(receivedYugioh.length === 0, "yugioh-filtered received offers must be empty when no such offers exist.");

  let receivedThrew = false;
  try {
    await service.getUserReceivedOffers("user-1", undefined, { gameSlug: "unknown-cert-game" });
  } catch (error) {
    receivedThrew = error instanceof BadRequestException;
  }
  assert(receivedThrew, "An unknown gameSlug must raise a BadRequestException for received offers.");
}

// --- Wishlist offers (WishlistsService) ---

const wishlistOffers = [
  { id: "wishlist-offer-mtg", game_id: "game-mtg", wishlist_item_id: "item-1", offerer_user_id: "user-1", status: "pending" },
  { id: "wishlist-offer-pokemon", game_id: "game-pokemon", wishlist_item_id: "item-2", offerer_user_id: "user-1", status: "pending" },
];

function fakeWishlistsDatabase() {
  return {
    client: {
      user_profiles: {
        findUnique: async ({ where: { id } }: { where: { id: string } }) =>
          id === "user-1" ? { id: "user-1", status: "active" } : null,
        findMany: async () => [],
      },
      games: {
        findUnique: async ({ where: { slug } }: { where: { slug: string } }) =>
          games.find((game) => game.slug === slug) ?? null,
      },
      wishlist_offers: {
        findMany: async ({
          where,
        }: {
          where: { offerer_user_id?: string; game_id?: string };
        }) =>
          wishlistOffers.filter((offer) => {
            if (where.offerer_user_id !== undefined && offer.offerer_user_id !== where.offerer_user_id) return false;
            if (where.game_id !== undefined && offer.game_id !== where.game_id) return false;
            return true;
          }),
      },
      // The offer-detail hydration pipeline touches these regardless of the
      // gameSlug filter; with no offered/requested item rows in this fixture,
      // every downstream lookup naturally resolves to an empty set.
      wishlist_offer_items: { findMany: async () => [] },
      wishlist_offer_requested_items: { findMany: async () => [] },
      wishlist_items: { findMany: async () => [] },
      wishlists: { findMany: async () => [] },
      inventory_items: { findMany: async () => [] },
      canonical_cards: { findMany: async () => [] },
      card_printings: { findMany: async () => [] },
      stores: { findMany: async () => [] },
    },
  } as never;
}

async function testWishlistOffers() {
  const service = new WishlistsService(fakeWishlistsDatabase());

  const sentAll = await service.getUserSentWishlistOffers("user-1");
  assert(ids(sentAll) === ids([{ id: "wishlist-offer-mtg" }, { id: "wishlist-offer-pokemon" }]), "Unfiltered sent wishlist offers must preserve current behavior.");

  const sentMtg = await service.getUserSentWishlistOffers("user-1", { gameSlug: "mtg" });
  assert(sentMtg.length === 1 && sentMtg[0]?.id === "wishlist-offer-mtg" && (sentMtg[0] as any).game_id === "game-mtg", "mtg-filtered sent wishlist offers must return only the MTG offer and expose game_id.");

  const sentYugioh = await service.getUserSentWishlistOffers("user-1", { gameSlug: "yugioh" });
  assert(sentYugioh.length === 0, "yugioh-filtered sent wishlist offers must be empty when no such offers exist.");

  let threw = false;
  try {
    await service.getUserSentWishlistOffers("user-1", { gameSlug: "unknown-cert-game" });
  } catch (error) {
    threw = error instanceof BadRequestException;
  }
  assert(threw, "An unknown gameSlug must raise a BadRequestException for sent wishlist offers.");
}

async function main() {
  await testListingOffers();
  await testWishlistOffers();
  console.log("Offer-list game filter regression passed.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
