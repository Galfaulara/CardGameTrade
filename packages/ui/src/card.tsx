import type { HTMLAttributes } from "react";
import styles from "./card.module.css";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  elevated?: boolean;
}

export function Card({ className, elevated = false, ...props }: CardProps) {
  return (
    <div
      {...props}
      className={[styles.card, elevated && styles.elevated, className]
        .filter(Boolean)
        .join(" ")}
    />
  );
}
