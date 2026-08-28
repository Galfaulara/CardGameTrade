import type { TradeInventory, TradeItemCustody, TradeParticipant, TradeStore } from "../account/trade-types";

export type StoreHandoffItem = {
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
  source_inventory: TradeInventory | null;
  result_inventory: TradeInventory | null;
  custody: (TradeItemCustody & {
    received_by_staff: unknown | null;
    verified_by_staff: unknown | null;
    released_by_staff: unknown | null;
  }) | null;
};

export type StoreHandoff = {
  id: string;
  transaction_id: string;
  store_id: string;
  status: string;
  created_at: string;
  updated_at: string;
  completed_at: string | null;
  cancelled_at: string | null;
  store: TradeStore | null;
  transaction: {
    id: string;
    seller_user_id: string | null;
    seller_store_id: string | null;
    counterparty_user_id: string | null;
    counterparty_store_id: string | null;
    status: string;
    agreed_at: string;
    completed_at: string | null;
    seller: TradeParticipant;
    counterparty: TradeParticipant;
  };
  items: StoreHandoffItem[];
  progress: {
    total_items: number;
    received_items: number;
    verified_items: number;
    released_items: number;
  };
};

export const storeHandoffStatus = (handoff: StoreHandoff) => {
  switch (handoff.status) {
    case "awaiting_items": return "Waiting for cards";
    case "partially_received": return "Partially received";
    case "all_items_received": return "Verification";
    case "validated": return "Ready to release";
    case "completed": return "Completed";
    case "cancelled": return "Cancelled";
    case "disputed": return "Needs attention";
    default: return handoff.status.replaceAll("_", " ");
  }
};
