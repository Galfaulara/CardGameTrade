export type TradeUser = {
  id: string;
  username: string | null;
  display_name: string | null;
  status: string;
};

export type TradeStore = {
  id: string;
  name: string;
  slug: string;
  logo_url: string | null;
  city: string | null;
  state_region: string | null;
  country_code: string | null;
  status: string;
  verification_status: string;
  trade_mediation_enabled: boolean;
};

export type TradeParticipant =
  | {
      type: "user";
      user: TradeUser | null;
    }
  | {
      type: "store";
      store: TradeStore | null;
    }
  | null;

export type TradeInventory = {
  id: string;
  owner_user_id: string | null;
  owner_store_id: string | null;
  finish: string;
  condition: string;
  language_code: string;
  quantity: number;
  is_signed: boolean;
  is_altered: boolean;
  is_graded: boolean;
  status: string;
  created_at: string;
  updated_at: string;
  printing: {
    id: string;
    collector_number: string;
    language_code: string;
    printed_name: string | null;
    rarity: string | null;
    artist_name: string | null;
    treatment: string | null;
    image_small_uri: string | null;
    image_normal_uri: string | null;
    image_large_uri: string | null;
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
};

export type TradeItemCustody = {
  id: string;
  handoff_id: string;
  transaction_id: string;
  transaction_item_id: string;
  store_id: string;
  custody_status: string;
  received_by_staff_id: string | null;
  received_at: string | null;
  verified_by_staff_id: string | null;
  verified_at: string | null;
  released_by_staff_id: string | null;
  released_at: string | null;
  issue_notes: string | null;
  created_at: string;
  updated_at: string;
};

export type TradeItem = {
  id: string;
  transaction_id: string;
  inventory_item_id: string;
  result_inventory_item_id: string | null;
  item_role: string;
  quantity: number;
  from_user_id: string | null;
  from_store_id: string | null;
  to_user_id: string | null;
  to_store_id: string | null;
  market_snapshot_id: string | null;
  agreed_unit_value: string | null;
  currency_code: string | null;
  created_at: string;
  source_inventory: TradeInventory | null;
  result_inventory: TradeInventory | null;
  custody: (TradeItemCustody & {
    received_by_staff: {
      id: string;
      store_id: string;
      user_id: string;
      role: string;
      status: string;
      user: TradeUser | null;
    } | null;
    verified_by_staff: {
      id: string;
      store_id: string;
      user_id: string;
      role: string;
      status: string;
      user: TradeUser | null;
    } | null;
    released_by_staff: {
      id: string;
      store_id: string;
      user_id: string;
      role: string;
      status: string;
      user: TradeUser | null;
    } | null;
  }) | null;
};

export type MyTrade = {
  id: string;
  game_id: string;
  listing_id: string | null;
  accepted_offer_id: string | null;
  accepted_wishlist_offer_id: string | null;
  seller_user_id: string | null;
  seller_store_id: string | null;
  counterparty_user_id: string | null;
  counterparty_store_id: string | null;
  transaction_type: string;
  cash_amount: string;
  currency_code: string;
  status: string;
  agreed_at: string;
  completed_at: string | null;
  created_at: string;
  updated_at: string;
  transaction_role: "seller" | "counterparty";
  seller: TradeParticipant;
  counterparty: TradeParticipant;
  items: TradeItem[];
  handoff: {
    id: string;
    transaction_id: string;
    store_id: string;
    status: string;
    store_notes: string | null;
    created_at: string;
    updated_at: string;
    completed_at: string | null;
    cancelled_at: string | null;
    store: TradeStore | null;
  } | null;
};

export const prettyTradeValue = (
  value: string,
) => value.replaceAll("_", " ");

export type TradeInventoryCardLike = {
  finish: string;
  condition: string;
  quantity: number;
  printing: {
    collector_number: string;
    image_small_uri: string | null;
    image_normal_uri: string | null;
    image_large_uri: string | null;
    canonical_cards: {
      name: string;
    };
    card_sets: {
      code: string;
      name: string;
    };
  };
} | null;

export const tradeInventoryImage = (
  inventory: TradeInventoryCardLike,
) =>
  inventory?.printing.image_large_uri ??
  inventory?.printing.image_normal_uri ??
  inventory?.printing.image_small_uri ??
  null;

export const tradeInventoryName = (
  inventory: TradeInventoryCardLike,
) =>
  inventory?.printing.canonical_cards.name ??
  "Unavailable card";

export const tradeInventoryPrinting = (
  inventory: TradeInventoryCardLike,
) =>
  inventory
    ? `${inventory.printing.card_sets.name} · ${inventory.printing.card_sets.code.toUpperCase()} #${inventory.printing.collector_number}`
    : "Unknown printing";

export const tradeInventoryPhysical = (
  inventory: TradeInventoryCardLike,
) =>
  inventory
    ? `${prettyTradeValue(inventory.condition)} · ${prettyTradeValue(inventory.finish)}${inventory.quantity > 1 ? ` · ×${inventory.quantity}` : ""}`
    : "Inventory details unavailable";

export const tradeCounterparty = (
  trade: MyTrade,
) =>
  trade.transaction_role === "seller"
    ? trade.counterparty
    : trade.seller;

export const tradeParticipantLabel = (
  participant: TradeParticipant,
) => {
  if (!participant) {
    return "DeckDeal participant";
  }

  if (participant.type === "user") {
    return participant.user?.username
      ? `@${participant.user.username}`
      : participant.user?.display_name ??
          "DeckDeal collector";
  }

  return participant.store?.name ??
    "DeckDeal store";
};

export const tradeParticipantHref = (
  participant: TradeParticipant,
) => {
  if (!participant) {
    return null;
  }

  if (participant.type === "user") {
    return participant.user?.id
      ? `/users/${participant.user.id}`
      : null;
  }

  return participant.store?.id
    ? `/stores/${participant.store.id}`
    : null;
};

export const tradePerspectiveItems = (
  trade: MyTrade,
  currentUserId: string,
) => ({
  give: trade.items.filter(
    (item) => item.from_user_id === currentUserId,
  ),
  receive: trade.items.filter(
    (item) => item.to_user_id === currentUserId,
  ),
});

export const tradeStatusLabel = (
  trade: MyTrade,
) => {
  const custodyStates = trade.items
    .map((item) => item.custody?.custody_status)
    .filter(
      (value): value is string =>
        Boolean(value),
    );

  if (trade.status === "completed") {
    return "Trade completed";
  }

  if (
    trade.handoff?.status === "validated" ||
    custodyStates.includes("verified_by_store")
  ) {
    return "Verified by store";
  }

  if (
    trade.handoff?.status === "all_items_received" ||
    custodyStates.includes("in_store")
  ) {
    return "Received by store";
  }

  if (trade.handoff?.status === "partially_received") {
    return "Waiting for cards";
  }

  if (
    trade.status === "awaiting_handoff" ||
    trade.handoff?.status === "awaiting_items" ||
    custodyStates.includes("awaiting_delivery_to_store")
  ) {
    return "Awaiting store receipt";
  }

  return prettyTradeValue(trade.status);
};

export const tradeNextStep = (
  trade: MyTrade,
) => {
  const storeName =
    trade.handoff?.store?.name ??
    "the selected store";

  if (trade.status === "completed") {
    return "This trade is complete.";
  }

  if (
    trade.handoff?.status === "validated" ||
    trade.items.some(
      (item) =>
        item.custody?.custody_status ===
        "verified_by_store",
    )
  ) {
    return `${storeName} is verifying the handoff before release.`;
  }

  if (
    trade.handoff?.status === "partially_received" ||
    trade.handoff?.status === "all_items_received" ||
    trade.items.some(
      (item) =>
        item.custody?.custody_status ===
        "in_store",
    )
  ) {
    return `Wait while both collectors finish delivering cards to ${storeName}.`;
  }

  return `Bring your cards to ${storeName} for verification.`;
};
