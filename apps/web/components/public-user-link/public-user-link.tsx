import Link from "next/link";
import styles from "./public-user-link.module.css";

export type PublicUserIdentity = {
  id: string;
  display_name: string | null;
  username: string | null;
};

export const publicUserLabel = (
  user: PublicUserIdentity,
  compact = false,
) => {
  if (user.username) {
    return user.display_name && !compact
      ? `${user.display_name} · @${user.username}`
      : `@${user.username}`;
  }

  return user.display_name;
};

export function PublicUserLink({ user, compact = false }: { user: PublicUserIdentity; compact?: boolean }) {
  const name = publicUserLabel(user, compact);

  return name ? <Link className={styles.link} href={`/users/${user.id}`}>{name}</Link> : null;
}
