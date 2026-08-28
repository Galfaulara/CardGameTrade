import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import type { ReactNode } from "react";
import { tryGetAuthenticatedCurrentUser } from "../../features/auth/authenticated-api";
import { Brand } from "../brand/brand";
import { SearchForm } from "../search-form/search-form";
import styles from "./app-shell.module.css";

export async function AppShell({ children }: { children: ReactNode }) {
  const clerkConfigured = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);
  const session = clerkConfigured ? await auth() : null;
  const signedIn = Boolean(session?.userId);
  let currentUser = null;

  if (signedIn) {
    try {
      currentUser = await tryGetAuthenticatedCurrentUser();
    } catch {
      currentUser = null;
    }
  }

  return (
    <div className={styles.shell}>
      <a className={styles.skipLink} href="#main-content">
        Skip to main content
      </a>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.topRow}><Brand />
          <nav aria-label="Primary navigation">
            <ul className={styles.navigation}>
              <li>
                <Link href="/discover">Discover</Link>
              </li>
              <li>
                <Link href="/#how-it-works">How it works</Link>
              </li>
              <li>
                <Link href="/#local-stores">Local stores</Link>
              </li>
            </ul>
          </nav>
          <div className={styles.auth}>{clerkConfigured ? signedIn ? <>
            {currentUser && !currentUser.onboarded && <Link className={styles.finishSetup} href="/onboarding">Finish setup</Link>}
            {currentUser?.onboarded && currentUser.account_status === "active" && <Link className={styles.accountLink} href="/account/profile">My profile</Link>}
            {currentUser?.onboarded && currentUser.account_status === "active" && currentUser.store_workspaces.length > 0 && <Link className={styles.accountLink} href="/store">Store Workspace</Link>}
            <UserButton />
          </> : <><Link href="/sign-in">Sign in</Link><Link className={styles.createAccount} href="/sign-up">Create account</Link></> : <><Link href="/sign-in">Sign in</Link><Link className={styles.createAccount} href="/sign-up">Create account</Link></>}</div>
          </div>
          <div className={styles.search}><SearchForm /></div>
        </div>
      </header>
      <main id="main-content">{children}</main>
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <Brand />
          <p>Built for collectors, traders, and the local stores they trust.</p>
        </div>
      </footer>
    </div>
  );
}
