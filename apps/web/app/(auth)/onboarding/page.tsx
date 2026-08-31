import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Brand } from "../../../components/brand/brand";
import {
  AuthenticatedApiError,
  getAuthenticatedCurrentUser,
} from "../../../features/auth/authenticated-api";
import styles from "./page.module.css";
import { OnboardingForm } from "./onboarding-form";

export default async function OnboardingPage() {
  const configured = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);

  if (!configured) {
    return <main className={styles.main}><div className={styles.shell}><Brand /><section className={styles.panel}><h1>DeckDeal onboarding is not configured locally</h1><p>Add the Clerk development environment values described in <code>.env.example</code>, then restart the web app.</p><Link href="/">Continue browsing DeckDeal</Link></section></div></main>;
  }

  const { userId } = await auth();
  if (!userId) {
    redirect("/sign-in?redirect_url=%2Fonboarding");
  }

  try {
    const currentUser = await getAuthenticatedCurrentUser();

    if (currentUser.onboarded) {
      if (currentUser.account_status === "active") {
        redirect("/account/profile");
      }

      return <main className={styles.main}><div className={styles.shell}><Brand /><section className={styles.panel}><p className={styles.eyebrow}>DeckDeal account unavailable</p><h1>This DeckDeal account can&apos;t complete onboarding again</h1><p>Your authenticated Clerk identity is already bound to a disabled DeckDeal account.</p><Link href="/">Return to DeckDeal</Link></section></div></main>;
    }
  } catch (error) {
    if (error instanceof AuthenticatedApiError && error.status === 401) {
      redirect("/sign-in?redirect_url=%2Fonboarding");
    }

    return <main className={styles.main}><div className={styles.shell}><Brand /><section className={styles.panel}><p className={styles.eyebrow}>DeckDeal onboarding</p><h1>We couldn&apos;t load setup right now</h1><p>Please try again shortly.</p><Link href="/">Return to DeckDeal</Link></section></div></main>;
  }

  return <main className={styles.main}><div className={styles.shell}><Brand /><section className={styles.panel}><p className={styles.eyebrow}>Welcome to DeckDeal</p><h1>Choose your DeckDeal identity</h1><p className={styles.description}>You&apos;re signed in with Clerk. Finish setup to claim your public DeckDeal username.</p><OnboardingForm /></section></div></main>;
}
