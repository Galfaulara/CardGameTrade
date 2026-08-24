import { Injectable } from "@nestjs/common";

import { DatabaseService } from "../database/database.service";

@Injectable()
export class CatalogService {
  constructor(private readonly database: DatabaseService) {}

  async getGames() {
    return this.database.client.games.findMany({
      select: {
        id: true,
        name: true,
        slug: true,
        created_at: true,
      },
      orderBy: {
        name: "asc",
      },
    });
  }

  async getSetsByGame(gameId: string) {
    return this.database.client.card_sets.findMany({
      where: {
        game_id: gameId,
      },
      select: {
        id: true,
        game_id: true,
        code: true,
        name: true,
        source: true,
        source_id: true,
        release_date: true,
        set_type: true,
        created_at: true,
      },
      orderBy: {
        release_date: "desc",
      },
    });
  }

  async searchCards(gameId: string, query: string) {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return [];
    }

    return this.database.client.canonical_cards.findMany({
      where: {
        game_id: gameId,
        normalized_name: {
          contains: normalizedQuery,
        },
      },
      select: {
        id: true,
        game_id: true,
        name: true,
        normalized_name: true,
        mana_cost: true,
        type_line: true,
        oracle_text: true,
        colors: true,
        color_identity: true,
      },
      orderBy: {
        name: "asc",
      },
      take: 25,
    });
  }

  async getPrintingsByCanonicalCard(canonicalCardId: string) {
    return this.database.client.card_printings.findMany({
      where: {
        canonical_card_id: canonicalCardId,
        is_digital: false,
      },
      select: {
        id: true,
        game_id: true,
        canonical_card_id: true,
        card_set_id: true,
        collector_number: true,
        language_code: true,
        printed_name: true,
        rarity: true,
        artist_name: true,
        treatment: true,
        frame_version: true,
        border_color: true,
        is_promo: true,
        is_reprint: true,
        released_at: true,
        image_small_uri: true,
        image_normal_uri: true,
        image_large_uri: true,

        card_sets: {
          select: {
            id: true,
            code: true,
            name: true,
            release_date: true,
          },
        },
      },
      orderBy: {
        released_at: "desc",
      },
    });
  }

  async getPrintingFinishes(printingId: string) {
    return this.database.client.printing_finishes.findMany({
      where: {
        printing_id: printingId,
      },
      select: {
        finish: true,
      },
      orderBy: {
        finish: "asc",
      },
    });
  }
}