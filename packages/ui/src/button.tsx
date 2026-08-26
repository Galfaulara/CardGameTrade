"use client";

import type { ButtonHTMLAttributes } from "react";
import styles from "./button.module.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "small" | "regular";
  /** @deprecated Retained for compatibility with the Turborepo docs starter. */
  appName?: string;
}

export const Button = ({
  appName,
  className,
  onClick,
  size = "regular",
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) => {
  const legacyClickHandler = appName
    ? () => alert(`Hello from your ${appName} app!`)
    : undefined;

  return (
    <button
      {...props}
      type={type}
      className={[styles.button, styles[variant], styles[size], className]
        .filter(Boolean)
        .join(" ")}
      onClick={onClick ?? legacyClickHandler}
    />
  );
};
