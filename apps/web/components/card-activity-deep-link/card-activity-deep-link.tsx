"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { MyInventoryItem } from "../../features/account/inventory-types";
import { ActivityDialog } from "../../app/(public)/account/inventory/inventory-manager";
import styles from "./card-activity-deep-link.module.css";

export function CardActivityDeepLink({
  canonicalCardId,
  inventoryItemId,
}: {
  canonicalCardId: string;
  inventoryItemId?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [item, setItem] = useState<MyInventoryItem | null>(null);
  const [unavailable, setUnavailable] = useState(false);
  const close = () => {
    const next = new URLSearchParams(searchParams.toString());
    next.delete("activity");
    router.replace(next.size ? `${pathname}?${next}` : pathname, {
      scroll: false,
    });
    setItem(null);
  };
  useEffect(() => {
    setItem(null);
    setUnavailable(false);
    if (!inventoryItemId) return;
    if (!/^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i.test(inventoryItemId)) {
      setUnavailable(true);
      return;
    }
    const controller = new AbortController();
    void fetch(`/api/me/inventory/${encodeURIComponent(inventoryItemId)}`, {
      cache: "no-store",
      signal: controller.signal,
    })
      .then(async (response) => {
        if (!response.ok) throw new Error("unavailable");
        const candidate = (await response.json()) as MyInventoryItem;
        if (candidate.printing.canonical_cards.id !== canonicalCardId)
          throw new Error("mismatch");
        setItem(candidate);
      })
      .catch((error) => {
        if (error.name !== "AbortError") setUnavailable(true);
      });
    return () => controller.abort();
  }, [canonicalCardId, inventoryItemId]);

  if (item) return <ActivityDialog item={item} onClose={close} />;
  if (inventoryItemId && unavailable)
    return (
      <p className={styles.notice} role="status">
        That Card Activity context is no longer available, but the card details
        are still here.
      </p>
    );
  return null;
}
