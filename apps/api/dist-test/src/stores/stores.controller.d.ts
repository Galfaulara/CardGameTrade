import { StoresService } from "./stores.service";
export declare class StoresController {
    private readonly storesService;
    constructor(storesService: StoresService);
    getTradeMediators(gameSlug?: string): Promise<{
        name: string;
        status: string;
        id: string;
        email: string | null;
        slug: string;
        description: string | null;
        logo_url: string | null;
        phone: string | null;
        website_url: string | null;
        address_line1: string | null;
        address_line2: string | null;
        city: string | null;
        state_region: string | null;
        postal_code: string | null;
        country_code: string | null;
        verification_status: string;
        trade_mediation_enabled: boolean;
    }[]>;
}
//# sourceMappingURL=stores.controller.d.ts.map