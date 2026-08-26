import Link from "next/link";
import styles from "./page.module.css";
export default function CardNotFound(){return <main className={styles.main}><section className={styles.unavailable}><p>Card catalog</p><h1>Card not found</h1><span>We could not find that card in the DeckDeal catalog.</span><Link href="/search">Search the catalog</Link></section></main>}
