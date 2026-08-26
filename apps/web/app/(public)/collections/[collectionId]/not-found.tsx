import Link from "next/link";
import styles from "./page.module.css";

export default function CollectionNotFound() {
  return (
    <main className={styles.main}>
      <section className={styles.unavailable}>
        <p>Collection not found</p>
        <h1>We couldn&apos;t find that collection.</h1>
        <span>It may no longer be available for public browsing.</span>
        <Link href="/discover">Back to discovery</Link>
      </section>
    </main>
  );
}
