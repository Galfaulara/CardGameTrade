import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";

import type {
  SetPreferredTradeStoreInput,
} from "@repo/validation";

import { DatabaseService } from "../database/database.service";

@Injectable()
export class PreferencesService {
  constructor(
    private readonly database:
      DatabaseService,
  ) {}

  async getPreferredTradeStore(
    userId: string,
  ) {
    const user =
      await this.database.client.user_profiles.findUnique({
        where: {
          id: userId,
        },

        select: {
          id: true,
        },
      });

    if (!user) {
      throw new NotFoundException(
        "User was not found.",
      );
    }

    const preference =
      await this.database.client.user_preferences.findUnique({
        where: {
          user_id: userId,
        },

        select: {
          user_id: true,

          preferred_trade_store_id:
            true,

          created_at: true,
          updated_at: true,
        },
      });

    if (
      !preference ||
      !preference.preferred_trade_store_id
    ) {
      return {
        user_id:
          userId,

        preferred_trade_store_id:
          null,

        preferred_trade_store:
          null,
      };
    }

    const store =
      await this.database.client.stores.findUnique({
        where: {
          id:
            preference.preferred_trade_store_id,
        },

        select: {
          id: true,
          name: true,
          slug: true,
          logo_url: true,

          city: true,
          state_region: true,
          country_code: true,

          status: true,

          verification_status:
            true,

          trade_mediation_enabled:
            true,
        },
      });

    return {
      ...preference,

      preferred_trade_store:
        store,
    };
  }

  async setPreferredTradeStore(
    userId: string,
    input:
      SetPreferredTradeStoreInput,
  ) {
    const user =
      await this.database.client.user_profiles.findUnique({
        where: {
          id: userId,
        },

        select: {
          id: true,
          status: true,
        },
      });

    if (!user) {
      throw new NotFoundException(
        "User was not found.",
      );
    }

    if (
      user.status !==
      "active"
    ) {
      throw new BadRequestException(
        "An inactive user cannot change trade preferences.",
      );
    }

    if (input.storeId) {
      const store =
        await this.database.client.stores.findFirst({
          where: {
            id:
              input.storeId,

            status:
              "active",

            verification_status:
              "verified",

            trade_mediation_enabled:
              true,
          },

          select: {
            id: true,
          },
        });

      if (!store) {
        throw new BadRequestException(
          "The preferred trade store must be an active affiliated DeckDeal trade-mediation store.",
        );
      }
    }

    await this.database.client.user_preferences.upsert({
      where: {
        user_id:
          userId,
      },

      create: {
        user_id:
          userId,

        preferred_trade_store_id:
          input.storeId,

        updated_at:
          new Date(),
      },

      update: {
        preferred_trade_store_id:
          input.storeId,

        updated_at:
          new Date(),
      },
    });

    return this.getPreferredTradeStore(
      userId,
    );
  }
}