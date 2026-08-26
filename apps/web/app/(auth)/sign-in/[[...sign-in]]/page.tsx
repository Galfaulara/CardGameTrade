import { SignIn } from "@clerk/nextjs";
import Link from "next/link";
import { Brand } from "../../../../components/brand/brand";
import styles from "../../auth.module.css";

export default function SignInPage() {
  const configured = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);
  return <main className={styles.main}><div className={styles.shell}><Brand />{configured
    ? <SignIn routing="path" path="/sign-in" signUpUrl="/sign-up" fallbackRedirectUrl="/" signUpFallbackRedirectUrl="/onboarding" />
    : <section className={styles.fallback}><h1>Sign-in is not configured locally</h1><p>Add the Clerk development environment values described in <code>.env.example</code>, then restart the web app.</p><Link href="/">Continue browsing DeckDeal</Link></section>}</div></main>;
}
