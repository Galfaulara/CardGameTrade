import Link from "next/link";
import styles from "./public-store-link.module.css";

export type PublicStoreIdentity = { id: string; name: string };

export function PublicStoreLink({ store }: { store: PublicStoreIdentity }) {
  return <Link className={styles.link} href={`/stores/${store.id}`}>{store.name}</Link>;
}
