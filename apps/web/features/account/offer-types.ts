export type MySentOfferItem = {
  id: string;
  inventory_item_id: string;
  quantity: number;
  notes: string | null;
  created_at: string;
  inventory_item: {
    id: string;
    finish: string;
    condition: string;
    language_code: string;
    quantity: number;
    is_signed: boolean;
    is_altered: boolean;
    is_graded: boolean;
    status: string;
    printing: {
      id: string;
      collector_number: string;
      language_code: string;
      printed_name: string | null;
      rarity: string | null;
      treatment: string | null;
      image_small_uri: string | null;
      image_normal_uri: string | null;
      image_large_uri: string | null;
      finish: string;
      canonical_cards: {
        id: string;
        name: string;
        mana_cost: string | null;
        type_line: string | null;
      };
      card_sets: {
        id: string;
        code: string;
        name: string;
      };
    };
  } | null;
};

export type MySentOffer = {
  id: string;
  listing_id: string;
  offerer_user_id: string | null;
  offerer_store_id: string | null;
  cash_amount: string;
  currency_code: string;
  message: string | null;
  visibility: "owner_only" | "public";
  status: string;
  expires_at: string | null;
  responded_at: string | null;
  created_at: string;
  updated_at: string;
  listings: {
    id: string;
    inventory_item_id: string;
    seller_user_id: string | null;
    seller_store_id: string | null;
    accepts_cash: boolean;
    accepts_trade: boolean;
    asking_price: string | null;
    currency_code: string | null;
    preferred_store_id: string | null;
    title: string | null;
    description: string | null;
    status: string;
  };
  items: MySentOfferItem[];
};
