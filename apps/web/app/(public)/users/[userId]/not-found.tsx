import Link from "next/link";
import styles from "./page.module.css";

export default function UserNotFound() {
  return <main className={styles.main}><section className={styles.message}><p>Collector</p><h1>User not found</h1><span>This collector profile is not available.</span><Link href="/discover?view=collections">Back to discovery</Link></section></main>;
}
