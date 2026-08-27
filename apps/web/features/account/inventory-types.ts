export type MyInventoryCollection = {
  id: string;
  name: string;
  visibility: "private" | "unlisted" | "public";
};

export type MyInventoryListing = {
  id: string;
  status: "active";
  accepts_cash: boolean;
  accepts_trade: boolean;
  asking_price: string | null;
  currency_code: string | null;
  created_at: string;
  updated_at: string;
};

export type MyInventoryPrinting = {
  id: string;
  canonical_card_id: string;
  collector_number: string;
  language_code: string;
  printed_name: string | null;
  rarity: string | null;
  artist_name: string | null;
  treatment: string | null;
  image_small_uri: string | null;
  image_normal_uri: string | null;
  image_large_uri: string | null;
  finish: string;
  canonical_cards: {
    id: string;
    name: string;
  };
  card_sets: {
    id: string;
    code: string;
    name: string;
  };
};

export type MyInventoryItem = {
  id: string;
  printing_id: string;
  finish: string;
  collection_id: string | null;
  condition: string;
  language_code: string;
  quantity: number;
  is_signed: boolean;
  is_altered: boolean;
  is_graded: boolean;
  grading_company: string | null;
  grade: string | null;
  certification_number: string | null;
  acquired_at: string | null;
  acquired_price: string | null;
  status: string;
  notes: string | null;
  created_at: string;
  updated_at: string;
  collection: MyInventoryCollection | null;
  active_listing: MyInventoryListing | null;
  printing: MyInventoryPrinting;
};

export type MyInventoryListResult = {
  items: MyInventoryItem[];
  summary: {
    total_inventory_row_count: number;
    total_card_quantity: number;
    filtered_inventory_row_count: number;
    filtered_card_quantity: number;
  };
  pagination: {
    page: number;
    page_size: number;
    total_count: number;
    has_more: boolean;
  };
};
