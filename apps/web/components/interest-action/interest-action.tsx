"use client";
import { useState } from "react";
import styles from "./interest-action.module.css";
import { useInterestDialog } from "./interest-dialog-provider";
export function InterestAction({
  inventoryItemId,
  cardName,
  imageUrl,
}: {
  inventoryItemId: string;
  cardName: string;
  imageUrl: string | null;
}) {
  const [sent, setSent] = useState(false),
    open = useInterestDialog();
  return (
    <button
      className={styles.launch}
      type="button"
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        open({
          inventoryItemId,
          cardName,
          imageUrl,
          onSent: () => setSent(true),
        });
      }}
    >
      {sent ? "Interested ✓" : "I'm interested"}
    </button>
  );
}
