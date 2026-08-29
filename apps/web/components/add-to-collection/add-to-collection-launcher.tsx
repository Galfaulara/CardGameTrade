"use client";

import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { useAddToCollection } from "./add-to-collection-provider";

export function AddToCollectionLauncher({
  canonicalCardId,
  cardName,
  printingId,
  gameId,
  className,
  compact = false,
}: {
  canonicalCardId: string;
  cardName: string;
  printingId?: string;
  gameId?: string;
  className?: string;
  compact?: boolean;
}) {
  const { isLoaded, isSignedIn } = useAuth();
  const { openAddToCollection } = useAddToCollection();
  const label = compact ? "+" : "Add to collection";
  if (isLoaded && !isSignedIn) {
    const returnUrl =
      typeof window === "undefined"
        ? `/cards/${canonicalCardId}${printingId ? `?printing=${printingId}` : ""}`
        : window.location.pathname + window.location.search;
    return (
      <Link
        className={className}
        href={`/sign-in?redirect_url=${encodeURIComponent(returnUrl)}`}
        aria-label={`Sign in to add ${cardName} to your collection`}
      >
        {label}
      </Link>
    );
  }
  return (
    <button
      className={className}
      type="button"
      onClick={() =>
        openAddToCollection({
          initialCard: { canonicalCardId, cardName, printingId, gameId },
        })
      }
      disabled={!isLoaded}
      aria-label={`Add ${cardName} to your collection`}
    >
      {label}
    </button>
  );
}
