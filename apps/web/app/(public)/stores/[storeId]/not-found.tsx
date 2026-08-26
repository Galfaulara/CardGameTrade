import Link from "next/link";
import styles from "./page.module.css";
export default function StoreNotFound(){return <main className={styles.main}><section className={styles.empty}><p className={styles.eyebrow}>Local game store</p><h1>Store not found</h1><p>This Store is unavailable or is not a participating DeckDeal LGS.</p><Link href="/discover?view=stores">Back to discovery</Link></section></main>}
