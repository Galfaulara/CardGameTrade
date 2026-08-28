import Image from "next/image";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { NavigationBack } from "../../../../../components/navigation-back/navigation-back";
import {
  AccountShell,
  AccountState,
} from "../../../../../features/account/account-shell";
import {
  tradeCounterparty,
  tradeInventoryImage,
  tradeInventoryName,
  tradeInventoryPhysical,
  tradeInventoryPrinting,
  tradeNextStep,
  tradeParticipantHref,
  tradeParticipantLabel,
  tradePerspectiveItems,
  tradeStatusLabel,
} from "../../../../../features/account/trade-types";
import {
  AuthenticatedApiError,
  getAuthenticatedCurrentUser,
  getMyTransaction,
} from "../../../../../features/auth/authenticated-api";
import styles from "./page.module.css";

const signInRedirect = (
  transactionId: string,
) =>
  `/sign-in?redirect_url=${encodeURIComponent(`/account/trades/${transactionId}`)}`;

function TradeCard({
  title,
  items,
}: {
  title: string;
  items: ReturnType<typeof tradePerspectiveItems>["give"];
}) {
  return (
    <section className={styles.group}>
      <h2>{title}</h2>
      <ul className={styles.grid}>
        {items.map((item) => (
          <li key={item.id}>
            <article className={styles.card}>
              <div className={styles.art}>
                {tradeInventoryImage(item.source_inventory) ? (
                  <Image
                    src={tradeInventoryImage(item.source_inventory)!}
                    alt={`${tradeInventoryName(item.source_inventory)} card`}
                    fill
                    sizes="(max-width: 42rem) 42vw, 180px"
                    unoptimized
                  />
                ) : (
                  <span>Card image unavailable</span>
                )}
              </div>
              <div className={styles.info}>
                <h3>
                  {tradeInventoryName(item.source_inventory)}
                </h3>
                <p>
                  {tradeInventoryPrinting(item.source_inventory)}
                </p>
                <p>
                  {tradeInventoryPhysical(item.source_inventory)}
                </p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default async function TradeDetailPage({
  params,
}: {
  params: Promise<{
    transactionId: string;
  }>;
}) {
  const { transactionId } =
    await params;

  const configured = Boolean(
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
  );

  if (!configured) {
    return (
      <AccountState
        eyebrow="My DeckDeal"
        title="Trade detail is not configured locally"
        description="Add the Clerk development environment values described in .env.example, then restart the web app."
        primaryHref="/"
        primaryLabel="Continue browsing DeckDeal"
      />
    );
  }

  const { userId } = await auth();
  if (!userId) {
    redirect(signInRedirect(transactionId));
  }

  try {
    const currentUser =
      await getAuthenticatedCurrentUser();

    if (!currentUser.onboarded) {
      redirect("/onboarding");
    }

    if (currentUser.account_status !== "active") {
      return (
        <AccountState
          eyebrow="DeckDeal account unavailable"
          title="This DeckDeal account can’t open trade detail"
          description="Your authenticated Clerk identity is already bound to a disabled DeckDeal account."
          primaryHref="/"
          primaryLabel="Return to DeckDeal"
        />
      );
    }

    try {
      const trade = await getMyTransaction(
        currentUser.user.id,
        transactionId,
      );
      const counterpart =
        tradeCounterparty(trade);
      const counterpartHref =
        tradeParticipantHref(
          counterpart,
        );
      const perspective =
        tradePerspectiveItems(
          trade,
          currentUser.user.id,
        );

      return (
        <AccountShell
          section="trades"
          title="Trade detail"
          intro="Accepted DeckDeal trades stay in mediated handoff until authorized Store release completes the ownership transfer."
        >
          <div className={styles.page}>
            <NavigationBack fallback="/account/trades" />
            <section className={styles.hero}>
              <p className={styles.kicker}>
                Trade with
              </p>
              <h1>
                {counterpartHref ? (
                  <Link href={counterpartHref}>
                    {tradeParticipantLabel(counterpart)}
                  </Link>
                ) : (
                  tradeParticipantLabel(counterpart)
                )}
              </h1>
              <div className={styles.metaGrid}>
                <div>
                  <span>STATUS</span>
                  <strong>
                    {tradeStatusLabel(trade)}
                  </strong>
                </div>
                <div>
                  <span>HANDOFF LOCATION</span>
                  <strong>
                    {trade.handoff?.store?.name ?? "Store pending"}
                  </strong>
                </div>
                <div>
                  <span>AGREED</span>
                  <strong>
                    {new Date(trade.agreed_at).toLocaleString()}
                  </strong>
                </div>
              </div>
            </section>

            <TradeCard
              title="You give"
              items={perspective.give}
            />
            <TradeCard
              title="You receive"
              items={perspective.receive}
            />

            <section className={styles.nextStep}>
              <p className={styles.kicker}>
                Next step
              </p>
              <h2>
                {tradeNextStep(trade)}
              </h2>
              <p>
                Ownership has not transferred yet. The mediation Store records
                receipt, verification, and release in the next phase.
              </p>
            </section>
          </div>
        </AccountShell>
      );
    } catch (error) {
      if (
        error instanceof AuthenticatedApiError &&
        error.status === 404
      ) {
        return (
          <AccountShell
            section="trades"
            title="Trade detail"
            intro="Accepted DeckDeal trades stay private to their participants."
          >
            <div className={styles.page}>
              <NavigationBack fallback="/account/trades" />
              <section className={styles.state}>
                <p className={styles.kicker}>
                  Trade unavailable
                </p>
                <h1>This trade isn’t available.</h1>
                <p>
                  It may not exist anymore or this DeckDeal account is not one of
                  its participants.
                </p>
              </section>
            </div>
          </AccountShell>
        );
      }

      throw error;
    }
  } catch (error) {
    if (
      error instanceof AuthenticatedApiError &&
      error.status === 401
    ) {
      redirect(signInRedirect(transactionId));
    }

    if (
      error instanceof AuthenticatedApiError &&
      error.status === 403
    ) {
      return (
        <AccountState
          eyebrow="DeckDeal account unavailable"
          title="This DeckDeal account can’t open trade detail"
          description="Your authenticated Clerk identity does not currently have access to an active DeckDeal account."
          primaryHref="/"
          primaryLabel="Return to DeckDeal"
        />
      );
    }

    return (
      <AccountState
        eyebrow="My DeckDeal"
        title="We couldn’t load this trade right now"
        description="Please try again shortly."
        primaryHref="/account/trades"
        primaryLabel="Back to My Trades"
      />
    );
  }
}
