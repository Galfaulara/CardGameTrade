"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

type AvailabilityResponse = {
  username: string;
  normalized: string;
  available: boolean;
  reason: "invalid" | "reserved" | "taken" | null;
  message: string | null;
};

type ValidationError = {
  path: string;
  message: string;
  code: string;
};

type SubmissionError = {
  message?: string;
  errors?: ValidationError[];
};

const usernamePattern = "^[A-Za-z0-9][A-Za-z0-9_]{2,23}$";
const defaultAvailabilityMessage = "This is your unique public handle.";

type AvailabilityState =
  | { status: "idle" }
  | { status: "checking" }
  | { status: "ready"; result: AvailabilityResponse }
  | { status: "error"; message: string };

export function OnboardingForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [availability, setAvailability] = useState<AvailabilityState>({ status: "idle" });
  const [submitting, setSubmitting] = useState(false);
  const [generalError, setGeneralError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{ username?: string; displayName?: string }>({});
  const trimmedUsername = username.trim();

  useEffect(() => {
    setGeneralError(null);
    setFieldErrors((current) => current.username ? { ...current, username: undefined } : current);

    if (!trimmedUsername) {
      setAvailability({ status: "idle" });
      return;
    }

    const controller = new AbortController();
    const timeout = window.setTimeout(async () => {
      setAvailability({ status: "checking" });
      try {
        const response = await fetch(`/api/onboarding/username-availability?username=${encodeURIComponent(username)}`, {
          signal: controller.signal,
          cache: "no-store",
        });
        const data = await response.json() as AvailabilityResponse | SubmissionError;
        if (!response.ok) {
          setAvailability({ status: "error", message: data.message ?? "Could not check username availability." });
          return;
        }
        setAvailability({ status: "ready", result: data as AvailabilityResponse });
      } catch {
        if (controller.signal.aborted) {
          return;
        }
        setAvailability({ status: "error", message: "Could not check username availability." });
      }
    }, 300);

    return () => {
      controller.abort();
      window.clearTimeout(timeout);
    };
  }, [trimmedUsername, username]);

  const availabilityMessage = useMemo(() => {
    if (!trimmedUsername) {
      return { tone: "neutral", message: defaultAvailabilityMessage };
    }

    if (availability.status === "checking") {
      return { tone: "neutral", message: "Checking username availability…" };
    }

    if (availability.status === "error") {
      return { tone: "error", message: availability.message };
    }

    if (availability.status === "ready") {
      if (availability.result.available) {
        return { tone: "success", message: `@${availability.result.username} is available.` };
      }

      return { tone: "error", message: availability.result.message ?? "This username is unavailable." };
    }

    return { tone: "neutral", message: defaultAvailabilityMessage };
  }, [availability, trimmedUsername]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setGeneralError(null);
    setFieldErrors({});

    try {
      const response = await fetch("/api/onboarding/complete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, displayName }),
      });
      const data = await response.json().catch(() => null) as ({ user?: { id: string } } & SubmissionError) | null;

      if (!response.ok) {
        if (response.status === 400 && data?.errors?.length) {
          const nextErrors: { username?: string; displayName?: string } = {};
          for (const issue of data.errors) {
            if (issue.path === "username" && !nextErrors.username) {
              nextErrors.username = issue.message;
            }
            if (issue.path === "displayName" && !nextErrors.displayName) {
              nextErrors.displayName = issue.message;
            }
          }
          setFieldErrors(nextErrors);
          if (!Object.keys(nextErrors).length && data.message) {
            setGeneralError(data.message);
          }
        } else {
          setGeneralError(
            data?.message ??
              (response.status === 403
                ? "This Clerk account has already completed DeckDeal onboarding."
                : response.status === 409
                  ? "This DeckDeal identity is no longer available."
                  : "DeckDeal onboarding is temporarily unavailable."),
          );
        }
        return;
      }

      if (!data?.user?.id) {
        setGeneralError("DeckDeal onboarding returned an invalid response.");
        return;
      }

      router.replace(`/users/${data.user.id}`);
      router.refresh();
    } catch {
      setGeneralError("DeckDeal onboarding is temporarily unavailable.");
    } finally {
      setSubmitting(false);
    }
  }

  return <form className={styles.form} onSubmit={handleSubmit} noValidate>
    <div className={styles.field}>
      <label htmlFor="deckdeal-username">Username</label>
      <input id="deckdeal-username" name="username" value={username} onChange={(event) => setUsername(event.target.value)} autoComplete="username" spellCheck={false} minLength={3} maxLength={24} pattern={usernamePattern} aria-invalid={fieldErrors.username ? "true" : undefined} aria-describedby="deckdeal-username-help deckdeal-username-status" />
      <p className={styles.help} id="deckdeal-username-help">This is your unique public handle.</p>
      <p className={`${styles.status} ${availabilityMessage.tone === "success" ? styles.success : availabilityMessage.tone === "error" ? styles.error : ""}`} id="deckdeal-username-status" role={availabilityMessage.tone === "error" ? "alert" : "status"}>{availabilityMessage.message}</p>
      {fieldErrors.username && <p className={styles.error} role="alert">{fieldErrors.username}</p>}
    </div>
    <div className={styles.field}>
      <label htmlFor="deckdeal-display-name">Display name</label>
      <input id="deckdeal-display-name" name="displayName" value={displayName} onChange={(event) => setDisplayName(event.target.value)} autoComplete="nickname" aria-invalid={fieldErrors.displayName ? "true" : undefined} aria-describedby="deckdeal-display-name-help" />
      <p className={styles.help} id="deckdeal-display-name-help">This is how your name may be presented. Other users may use the same display name. Optional.</p>
      {fieldErrors.displayName && <p className={styles.error} role="alert">{fieldErrors.displayName}</p>}
    </div>
    {generalError && <div className={styles.submitError} role="alert">{generalError}</div>}
    <button className={styles.submit} type="submit" disabled={submitting}>{submitting ? "Completing setup…" : "Complete setup"}</button>
  </form>;
}
