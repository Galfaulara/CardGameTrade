import styles from "./search-form.module.css";

export function SearchForm({ defaultValue = "" }: { defaultValue?: string }) {
  return (
    <form className={styles.form} action="/search" role="search">
      <label className={styles.srOnly} htmlFor="marketplace-search">Search cards</label>
      <input id="marketplace-search" name="q" defaultValue={defaultValue} placeholder="Search cards by name…" autoComplete="off" />
      <button type="submit" aria-label="Submit card search">Search</button>
    </form>
  );
}
