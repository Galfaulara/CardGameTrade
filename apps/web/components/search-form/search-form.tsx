"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useId, useTransition } from "react";
import { searchHref } from "../../features/games/active-game";
import { useActiveGame } from "../../features/games/active-game-provider";
import styles from "./search-form.module.css";

export function SearchForm({ defaultValue = "" }: { defaultValue?: string }) {
  const { activeGameSlug } = useActiveGame();
  const router = useRouter();
  const inputId = useId();
  const [isSearching, startSearch] = useTransition();
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = String(new FormData(event.currentTarget).get("q") ?? "");
    if (isSearching) return;
    startSearch(() => {
      if (activeGameSlug) router.push(searchHref(query, activeGameSlug));
      else router.push(`/search?q=${encodeURIComponent(query)}`);
    });
  };
  return (
    <form className={styles.form} action="/search" role="search" onSubmit={submit}>
      <label className={styles.srOnly} htmlFor={inputId}>Search cards</label>
      <input id={inputId} name="q" defaultValue={defaultValue} placeholder="Search cards by name…" autoComplete="off" />
      <button type="submit" disabled={isSearching} aria-busy={isSearching} aria-label={isSearching ? "Searching card catalog" : "Submit card search"}>{isSearching ? "Searching…" : "Search"}</button>
      <span className={styles.srOnly} role="status" aria-live="polite">{isSearching ? "Searching for cards" : ""}</span>
    </form>
  );
}
