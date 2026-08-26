import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import {
  AuthenticatedApiError,
  getAuthenticatedCurrentUser,
  getMyProfile,
} from "../../../../features/auth/authenticated-api";
import { ProfileForm } from "./profile-form";
import styles from "./page.module.css";

const signInRedirectUrl =
  "/sign-in?redirect_url=%2Faccount%2Fprofile";

function AccountState({
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
}: {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
}) {
  return <main className={styles.main}><section className={styles.statePanel}><p className={styles.stateEyebrow}>{eyebrow}</p><h1>{title}</h1><p>{description}</p><div className={styles.stateActions}><Link className={styles.primaryAction} href={primaryHref}>{primaryLabel}</Link></div></section></main>;
}

export default async function AccountProfilePage() {
  const configured = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);

  if (!configured) {
    return <AccountState eyebrow="My DeckDeal" title="Account profile is not configured locally" description="Add the Clerk development environment values described in .env.example, then restart the web app." primaryHref="/" primaryLabel="Continue browsing DeckDeal" />;
  }

  const { userId } = await auth();
  if (!userId) {
    redirect(signInRedirectUrl);
  }

  try {
    const currentUser = await getAuthenticatedCurrentUser();

    if (!currentUser.onboarded) {
      redirect("/onboarding");
    }

    if (currentUser.account_status !== "active") {
      return <AccountState eyebrow="DeckDeal account unavailable" title="This DeckDeal account can’t open My Profile" description="Your authenticated Clerk identity is already bound to a disabled DeckDeal account." primaryHref="/" primaryLabel="Return to DeckDeal" />;
    }

    const profile = await getMyProfile();

    return <main className={styles.main}><div className={styles.shell}><header className={styles.hero}><p className={styles.eyebrow}>My DeckDeal</p><h1>Profile</h1><p className={styles.intro}>Manage your DeckDeal public identity, display name, and preferred local game store without changing Clerk sign-in controls.</p></header><ProfileForm initialProfile={profile} /></div></main>;
  } catch (error) {
    if (error instanceof AuthenticatedApiError && error.status === 401) {
      redirect(signInRedirectUrl);
    }

    if (error instanceof AuthenticatedApiError && error.status === 403) {
      return <AccountState eyebrow="DeckDeal account unavailable" title="This DeckDeal account can’t open My Profile" description="Your authenticated Clerk identity does not currently have access to an active DeckDeal account." primaryHref="/" primaryLabel="Return to DeckDeal" />;
    }

    return <AccountState eyebrow="My DeckDeal" title="We couldn’t load your profile right now" description="Please try again shortly." primaryHref="/" primaryLabel="Return to DeckDeal" />;
  }
}
