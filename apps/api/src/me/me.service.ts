import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import type {
  CardRelationshipContextInput,
  MyProfileStoreOptionsQuery,
  UpdateMyProfileInput,
} from "@repo/validation";
import { DatabaseService } from "../database/database.service";

const available = {
  status: "available",
};

const activeListing = {
  status: "active",
  OR: [
    {
      accepts_trade: true,
    },
    {
      accepts_cash: true,
    },
  ],
};

const eligibleStore = {
  status: "active",
  verification_status: "verified",
  trade_mediation_enabled: true,
};

const storeSelect = {
  id: true,
  name: true,
  slug: true,
  logo_url: true,
  city: true,
  state_region: true,
  country_code: true,
  status: true,
  verification_status: true,
  trade_mediation_enabled: true,
} as const;

const storeOptionSelect = {
  id: true,
  name: true,
  slug: true,
  logo_url: true,
  city: true,
  state_region: true,
  country_code: true,
} as const;

@Injectable()
export class MeService {
  constructor(
    private readonly database:
      DatabaseService,
  ) {}

  private publicUserWhere(
    userId: string,
  ) {
    return {
      id: userId,
      status: "active",
      OR: [
        {
          collections: {
            some: {
              visibility: "public",
            },
          },
        },
        {
          inventory_items: {
            some: {
              ...available,
              owner_store_id: null,
              listings_listings_inventory_item_id_seller_user_idToinventory_items:
                {
                  some: activeListing,
                },
            },
          },
        },
        {
          wishlists: {
            some: {
              visibility: "public",
              status: "active",
            },
          },
        },
      ],
    };
  }

  private mapStore(
    store: any,
  ) {
    if (!store) {
      return null;
    }

    const {
      status,
      verification_status,
      trade_mediation_enabled,
      ...safeStore
    } = store;

    return {
      ...safeStore,
      eligible:
        status === "active" &&
        verification_status === "verified" &&
        trade_mediation_enabled === true,
    };
  }

  private async requireUser(
    userId: string,
  ) {
    const user =
      await this.database.client.user_profiles.findUnique({
        where: {
          id: userId,
        },

        select: {
          id: true,
          display_name: true,
          username: true,
          preferred_store_id:
            true,

          preferred_store: {
            select: storeSelect,
          },
        },
      });

    if (!user) {
      throw new NotFoundException(
        "User was not found.",
      );
    }

    return user;
  }

  private async requireEligibleStore(
    storeId: string,
  ) {
    const store =
      await this.database.client.stores.findFirst({
        where: {
          id: storeId,
          ...eligibleStore,
        },

        select: {
          id: true,
        },
      });

    if (!store) {
      throw new BadRequestException(
        "The preferred store must be an active, verified DeckDeal trade-mediation store.",
      );
    }
  }

  async getProfile(
    userId: string,
  ) {
    const [user, publicProfileAvailable] =
      await Promise.all([
        this.requireUser(userId),
        this.database.client.user_profiles.count({
          where:
            this.publicUserWhere(userId),
        }),
      ]);

    return {
      id: user.id,
      display_name:
        user.display_name,
      username:
        user.username,
      preferred_store_id:
        user.preferred_store_id,
      preferred_store:
        this.mapStore(
          user.preferred_store,
        ),
      public_profile_available:
        publicProfileAvailable > 0,
    };
  }

  async updateProfile(
    userId: string,
    input:
      UpdateMyProfileInput,
  ) {
    const current =
      await this.requireUser(userId);

    const data: {
      display_name?: string | null;
      preferred_store_id?: string | null;
      updated_at?: Date;
    } = {};

    if (
      "displayName" in input &&
      input.displayName !==
        current.display_name
    ) {
      data.display_name =
        input.displayName ?? null;
    }

    if (
      "preferredStoreId" in input &&
      input.preferredStoreId !==
        current.preferred_store_id
    ) {
      if (input.preferredStoreId) {
        await this.requireEligibleStore(
          input.preferredStoreId,
        );
      }

      data.preferred_store_id =
        input.preferredStoreId ?? null;
    }

    if (
      !("display_name" in data) &&
      !("preferred_store_id" in data)
    ) {
      return this.getProfile(
        userId,
      );
    }

    await this.database.client.user_profiles.update({
      where: {
        id: userId,
      },

      data: {
        ...data,
        updated_at:
          new Date(),
      },
    });

    return this.getProfile(
      userId,
    );
  }

  async getProfileStoreOptions(
    query:
      MyProfileStoreOptionsQuery,
  ) {
    const terms =
      query.q
        .split(/\s+/)
        .map((value) => value.trim())
        .filter(Boolean);

    const where =
      terms.length
        ? {
            ...eligibleStore,
            AND: terms.map((term) => ({
              OR: [
                {
                  name: {
                    contains: term,
                    mode: "insensitive" as const,
                  },
                },
                {
                  slug: {
                    contains: term,
                    mode: "insensitive" as const,
                  },
                },
                {
                  city: {
                    contains: term,
                    mode: "insensitive" as const,
                  },
                },
                {
                  state_region: {
                    contains: term,
                    mode: "insensitive" as const,
                  },
                },
                {
                  country_code: {
                    contains: term,
                    mode: "insensitive" as const,
                  },
                },
              ],
            })),
          }
        : eligibleStore;

    return {
      items:
        await this.database.client.stores.findMany({
          where,

          select: storeOptionSelect,

          orderBy: {
            name: "asc",
          },

          take:
            query.limit,
        }),
    };
  }

  async getCardRelationshipContext(userId: string, input: CardRelationshipContextInput) {
    const game = await this.database.client.games.findUnique({ where: { slug: input.gameSlug }, select: { id: true } });
    if (!game) throw new BadRequestException("The active game was not found.");
    const [inventory, wants] = await Promise.all([
      this.database.client.inventory_items.findMany({
        where: { owner_user_id: userId, owner_store_id: null, game_id: game.id, status: { in: ["available", "not_for_trade", "reserved", "in_trade"] },
          OR: [{ printing_id: { in: input.printingIds } }, { card_printings: { canonical_card_id: { in: input.canonicalCardIds } } }],
        }, select: { printing_id: true, quantity: true, card_printings: { select: { canonical_card_id: true } } },
      }),
      this.database.client.wishlist_items.findMany({
        where: { game_id: game.id, status: "active", wishlists: { user_id: userId, status: "active" },
          OR: [{ printing_id: { in: input.printingIds } }, { canonical_card_id: { in: input.canonicalCardIds } }],
        }, select: { printing_id: true, canonical_card_id: true, card_printings: { select: { canonical_card_id: true } } },
      }),
    ]);
    const canonicalOwned: Record<string,number> = {}, printingOwned: Record<string,number> = {};
    for (const row of inventory) { printingOwned[row.printing_id]=(printingOwned[row.printing_id]??0)+row.quantity; const id=row.card_printings.canonical_card_id; canonicalOwned[id]=(canonicalOwned[id]??0)+row.quantity; }
    const canonicalWants = [...new Set(wants.map((row)=>row.canonical_card_id??row.card_printings?.canonical_card_id).filter(Boolean))];
    const printingWants = [...new Set(wants.map((row)=>row.printing_id).filter(Boolean))];
    return { canonicalOwned, printingOwned, canonicalWants, printingWants };
  }
}
