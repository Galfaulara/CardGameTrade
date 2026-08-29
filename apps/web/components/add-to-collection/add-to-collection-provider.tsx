"use client";

import { createContext, useContext, useMemo, useState } from "react";
import type { MyInventoryItem } from "../../features/account/inventory-types";
import { AddToCollectionModal } from "./add-to-collection-modal";

type CardContext = {
  canonicalCardId: string;
  cardName: string;
  printingId?: string;
  gameId?: string;
};
type OpenOptions = {
  initialCard?: CardContext;
  onAdded?: (item: MyInventoryItem) => void;
};
type AddToCollectionContextValue = {
  openAddToCollection: (options?: OpenOptions) => void;
};

const AddToCollectionContext =
  createContext<AddToCollectionContextValue | null>(null);

export function AddToCollectionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [request, setRequest] = useState<OpenOptions | null>(null);
  const value = useMemo(
    () => ({
      openAddToCollection: (options: OpenOptions = {}) => setRequest(options),
    }),
    [],
  );

  return (
    <AddToCollectionContext.Provider value={value}>
      {children}
      <AddToCollectionModal
        open={request !== null}
        initialCard={request?.initialCard}
        onAdded={request?.onAdded}
        onClose={() => setRequest(null)}
      />
    </AddToCollectionContext.Provider>
  );
}

export function useAddToCollection() {
  const value = useContext(AddToCollectionContext);
  if (!value)
    throw new Error(
      "useAddToCollection must be used inside AddToCollectionProvider",
    );
  return value;
}
