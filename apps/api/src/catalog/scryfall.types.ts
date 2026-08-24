export interface ScryfallList<T> {
  object: "list";
  has_more: boolean;
  data: T[];
}

export interface ScryfallSet {
  id: string;
  code: string;
  name: string;
  set_type: string;
  released_at?: string | null;
  digital: boolean;
}

export interface ScryfallBulkDataItem {
  object: "bulk_data";
  id: string;
  type: string;
  updated_at: string;
  name: string;
  description: string;
  compressed_size: number;
  jsonl_download_uri: string;
}

export interface ScryfallImageUris {
  small?: string;
  normal?: string;
  large?: string;
}

export interface ScryfallCardFace {
  image_uris?: ScryfallImageUris;
}

export interface ScryfallCard {
  id: string;
  oracle_id?: string | null;

  name: string;
  mana_cost?: string;
  type_line?: string;
  oracle_text?: string;
  colors?: string[];
  color_identity?: string[];

  set_id: string;
  collector_number: string;
  lang: string;

  printed_name?: string;
  printed_type_line?: string;
  printed_text?: string;

  rarity?: string;
  artist?: string;

  frame?: string;
  frame_effects?: string[];
  border_color?: string;

  promo: boolean;
  reprint: boolean;
  digital: boolean;

  released_at?: string;

  image_uris?: ScryfallImageUris;
  card_faces?: ScryfallCardFace[];

  finishes?: string[];
}