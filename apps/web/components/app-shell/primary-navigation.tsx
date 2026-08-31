"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./app-shell.module.css";
import { primaryNavigationItems } from "./primary-navigation-state";

export function PrimaryNavigation() {
  const pathname = usePathname();
  return <nav aria-label="Primary navigation"><ul className={styles.navigation}>{primaryNavigationItems.map((item) => {
    const active = item.active(pathname);
    return <li key={item.href}><Link href={item.href} aria-current={active ? "page" : undefined}>{item.label}</Link></li>;
  })}</ul></nav>;
}
