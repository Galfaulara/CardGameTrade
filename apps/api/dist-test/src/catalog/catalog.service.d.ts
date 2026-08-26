import { DatabaseService } from "../database/database.service";
export declare class CatalogService {
    private readonly database;
    constructor(database: DatabaseService);
    getGames(): Promise<{
        name: string;
        id: string;
        created_at: Date;
        slug: string;
    }[]>;
    getSetsByGame(gameId: string): Promise<{
        name: string;
        id: string;
        created_at: Date;
        game_id: string;
        code: string;
        source: string;
        source_id: string | null;
        release_date: Date | null;
        set_type: string | null;
    }[]>;
    searchCards(gameId: string, query: string): Promise<{
        name: string;
        id: string;
        game_id: string;
        normalized_name: string;
        mana_cost: string | null;
        type_line: string | null;
        oracle_text: string | null;
        colors: string[];
        color_identity: string[];
    }[]>;
    private positiveInteger;
    private terms;
    private printingSelect;
    private safeScryfallUri;
    private mapPrinting;
    private faces;
    private characteristics;
    private representativePrintings;
    searchCanonicalCards(gameId: string, query: string, pageValue: string, pageSizeValue: string): Promise<{
        query: string;
        items: {
            representative_printing: any;
            name: string;
            id: string;
            game_id: string;
            mana_cost: string | null;
            type_line: string | null;
        }[];
        page: number;
        page_size: number;
        total_results: number;
        total_pages: number;
    }>;
    getCardDetail(canonicalCardId: string, requestedPrintingId?: string): Promise<{
        card: {
            faces: any;
            power: string | null;
            toughness: string | null;
            loyalty: string | null;
            defense: string | null;
            name: string;
            id: string;
            game_id: string;
            mana_cost: string | null;
            type_line: string | null;
            oracle_text: string | null;
            colors: string[];
            color_identity: string[];
        };
        selected_printing: any;
        other_printings: any[];
        requested_printing_valid: boolean;
    }>;
    getCardListings(canonicalCardId: string, selectedPrintingId: string, pageValue: string, pageSizeValue: string): Promise<{
        items: ({
            id: string;
            accepts_trade: boolean;
            accepts_cash: boolean;
            asking_price: import("@prisma/client-runtime-utils").Decimal | null;
            currency_code: string | null;
            created_at: Date;
            inventory_item: {
                printing_finishes: undefined;
                printing: any;
                id: string;
                user_profiles: {
                    id: string;
                    username: string | null;
                    display_name: string | null;
                } | null;
                language_code: string;
                stores: {
                    name: string;
                    id: string;
                    slug: string;
                    verification_status: string;
                } | null;
                printing_id: string;
                finish: string;
                condition: string;
                quantity: number;
                is_signed: boolean;
                is_altered: boolean;
                is_graded: boolean;
            };
            seller: {
                name: string;
                id: string;
                slug: string;
                verification_status: string;
                kind: string;
            } | {
                id?: string | undefined;
                username?: string | null | undefined;
                display_name?: string | null | undefined;
                kind: string;
            };
        } | null)[];
        page: number;
        page_size: number;
        total_results: number;
        total_pages: number;
    }>;
    getPrintingsByCanonicalCard(canonicalCardId: string): Promise<{
        id: string;
        card_sets: {
            name: string;
            id: string;
            code: string;
            release_date: Date | null;
        };
        game_id: string;
        canonical_card_id: string;
        card_set_id: string;
        collector_number: string;
        language_code: string;
        printed_name: string | null;
        rarity: string | null;
        artist_name: string | null;
        treatment: string | null;
        frame_version: string | null;
        border_color: string | null;
        is_promo: boolean;
        is_reprint: boolean;
        released_at: Date | null;
        image_small_uri: string | null;
        image_normal_uri: string | null;
        image_large_uri: string | null;
    }[]>;
    getPrintingFinishes(printingId: string): Promise<{
        finish: string;
    }[]>;
}
//# sourceMappingURL=catalog.service.d.ts.map