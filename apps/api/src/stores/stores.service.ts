import {
  Injectable,
} from "@nestjs/common";

import { DatabaseService } from "../database/database.service";

@Injectable()
export class StoresService {
  constructor(
    private readonly database:
      DatabaseService,
  ) {}

  async getTradeMediators() {
    return this.database.client.stores.findMany({
      where: {
        status: "active",

        verification_status:
          "verified",

        trade_mediation_enabled:
          true,
      },

      select: {
        id: true,
        name: true,
        slug: true,
        description: true,
        logo_url: true,

        email: true,
        phone: true,
        website_url: true,

        address_line1: true,
        address_line2: true,
        city: true,
        state_region: true,
        postal_code: true,
        country_code: true,

        verification_status:
          true,

        status:
          true,

        trade_mediation_enabled:
          true,
      },

      orderBy: {
        name: "asc",
      },
    });
  }
}