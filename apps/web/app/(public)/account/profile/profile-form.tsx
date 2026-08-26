"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type {
  MyProfile,
  MyProfileStore,
  MyProfileStoreOption,
} from "../../../../features/account/profile-types";
import styles from "./page.module.css";

type ValidationError = {
  path: string;
  message: string;
  code: string;
};

type SubmissionError = {
  message?: string;
  errors?: ValidationError[];
};

type StoreOptionsState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "ready"; items: MyProfileStoreOption[] }
  | { status: "error"; message: string };

const normalizeDisplayName = (
  value: string,
) => {
  const trimmed = value.trim();
  return trimmed.length
    ? trimmed
    : null;
};

const storeLocation = (
  store: Pick<MyProfileStore, "city" | "state_region" | "country_code">,
) => [store.city, store.state_region, store.country_code].filter(Boolean).join(" · ");

const storeLabel = (
  store: Pick<MyProfileStore, "name" | "city" | "state_region" | "country_code">,
) => {
  const location = storeLocation(store);
  return location
    ? `${store.name} · ${location}`
    : store.name;
};

export function ProfileForm({
  initialProfile,
}: {
  initialProfile: MyProfile;
}) {
  const [profile, setProfile] = useState(initialProfile);
  const [displayName, setDisplayName] = useState(initialProfile.display_name ?? "");
  const [selectedStore, setSelectedStore] = useState<MyProfileStore | null>(initialProfile.preferred_store);
  const [storeQuery, setStoreQuery] = useState("");
  const [storeSearchOpen, setStoreSearchOpen] = useState(false);
  const [storeOptions, setStoreOptions] = useState<StoreOptionsState>({ status: "idle" });
  const [submitting, setSubmitting] = useState(false);
  const [generalError, setGeneralError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{ displayName?: string; preferredStoreId?: string }>({});

  const normalizedDisplayName = useMemo(
    () => normalizeDisplayName(displayName),
    [displayName],
  );
  const selectedStoreId = selectedStore?.id ?? null;
  const dirty = normalizedDisplayName !== profile.display_name || selectedStoreId !== profile.preferred_store_id;
  const publicProfileMessage = profile.public_profile_available
    ? "Your public DeckDeal profile is currently discoverable."
    : "Your public profile will become discoverable when you publish a collection, list a card, or have public Wishlist content.";

  useEffect(() => {
    if (!storeSearchOpen) {
      return;
    }

    const controller = new AbortController();
    const timeout = window.setTimeout(async () => {
      setStoreOptions({ status: "loading" });
      try {
        const query = new URLSearchParams({ q: storeQuery, limit: "8" });
        const response = await fetch(`/api/me/profile/store-options?${query.toString()}`, {
          signal: controller.signal,
          cache: "no-store",
        });
        const data = await response.json().catch(() => null) as ({ items?: MyProfileStoreOption[] } & SubmissionError) | null;
        if (!response.ok) {
          setStoreOptions({ status: "error", message: data?.message ?? "Could not load eligible stores." });
          return;
        }
        setStoreOptions({ status: "ready", items: Array.isArray(data?.items) ? data.items : [] });
      } catch {
        if (controller.signal.aborted) {
          return;
        }
        setStoreOptions({ status: "error", message: "Could not load eligible stores." });
      }
    }, 200);

    return () => {
      controller.abort();
      window.clearTimeout(timeout);
    };
  }, [storeQuery, storeSearchOpen]);

  function chooseStore(
    store: MyProfileStoreOption,
  ) {
    setSelectedStore({ ...store, eligible: true });
    setStoreQuery("");
    setStoreSearchOpen(false);
    setGeneralError(null);
    setSuccessMessage(null);
    setFieldErrors((current) => current.preferredStoreId ? { ...current, preferredStoreId: undefined } : current);
  }

  function clearStore() {
    setSelectedStore(null);
    setStoreQuery("");
    setStoreSearchOpen(false);
    setGeneralError(null);
    setSuccessMessage(null);
    setFieldErrors((current) => current.preferredStoreId ? { ...current, preferredStoreId: undefined } : current);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!dirty || submitting) {
      return;
    }

    const payload: {
      displayName?: string | null;
      preferredStoreId?: string | null;
    } = {};

    if (normalizedDisplayName !== profile.display_name) {
      payload.displayName = normalizedDisplayName;
    }

    if (selectedStoreId !== profile.preferred_store_id) {
      payload.preferredStoreId = selectedStoreId;
    }

    setSubmitting(true);
    setGeneralError(null);
    setSuccessMessage(null);
    setFieldErrors({});

    try {
      const response = await fetch("/api/me/profile", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json().catch(() => null) as (MyProfile & SubmissionError) | null;

      if (!response.ok) {
        if (response.status === 400 && data?.errors?.length) {
          const nextErrors: { displayName?: string; preferredStoreId?: string } = {};
          for (const issue of data.errors) {
            if (issue.path === "displayName" && !nextErrors.displayName) {
              nextErrors.displayName = issue.message;
            }
            if (issue.path === "preferredStoreId" && !nextErrors.preferredStoreId) {
              nextErrors.preferredStoreId = issue.message;
            }
          }
          setFieldErrors(nextErrors);
          if (!Object.keys(nextErrors).length && data.message) {
            setGeneralError(data.message);
          }
        } else {
          setGeneralError(
            data?.message ??
              (response.status === 401
                ? "Please sign in again to continue."
                : response.status === 403
                  ? "This DeckDeal account is currently unavailable."
                  : "DeckDeal couldn’t save your profile right now."),
          );
        }
        return;
      }

      if (!data?.id) {
        setGeneralError("DeckDeal returned an invalid profile response.");
        return;
      }

      setProfile(data);
      setDisplayName(data.display_name ?? "");
      setSelectedStore(data.preferred_store);
      setStoreQuery("");
      setStoreSearchOpen(false);
      setStoreOptions({ status: "idle" });
      setSuccessMessage("Your DeckDeal profile was saved.");
    } catch {
      setGeneralError("DeckDeal couldn’t save your profile right now.");
    } finally {
      setSubmitting(false);
    }
  }

  return <div className={styles.layout}>
    <section className={styles.panel}>
      <div className={styles.panelHeader}>
        <p className={styles.sectionEyebrow}>Public identity</p>
        <h2>{profile.display_name ?? (profile.username ? `@${profile.username}` : "DeckDeal member")}</h2>
        {profile.username && <p className={styles.identityHandle}>@{profile.username}</p>}
      </div>
      <div className={styles.identityCard}>
        <div>
          <span>Display name</span>
          <strong>{profile.display_name ?? "Not set"}</strong>
        </div>
        <div>
          <span>Username</span>
          <strong>{profile.username ? `@${profile.username}` : "Not available"}</strong>
        </div>
      </div>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.field}>
          <label htmlFor="account-display-name">Display name</label>
          <input id="account-display-name" name="displayName" value={displayName} onChange={(event) => { setDisplayName(event.target.value); setGeneralError(null); setSuccessMessage(null); setFieldErrors((current) => current.displayName ? { ...current, displayName: undefined } : current); }} autoComplete="nickname" aria-invalid={fieldErrors.displayName ? "true" : undefined} aria-describedby="account-display-name-help" />
          <p className={styles.help} id="account-display-name-help">This is how your name may be presented. Other users may use the same display name.</p>
          {fieldErrors.displayName && <p className={styles.error} role="alert">{fieldErrors.displayName}</p>}
        </div>

        <div className={styles.field}>
          <label htmlFor="account-username">Username</label>
          <input id="account-username" value={profile.username ? `@${profile.username}` : ""} readOnly aria-readonly="true" className={styles.readonlyInput} />
          <p className={styles.help}>Username changes are not available yet.</p>
        </div>

        <div className={styles.field}>
          <label htmlFor="account-store-search">Preferred LGS</label>
          <div className={styles.storeSelection}>
            {selectedStore ? <div className={styles.selectedStore}><div><strong>{selectedStore.eligible ? <Link className={styles.inlineLink} href={`/stores/${selectedStore.id}`}>{selectedStore.name}</Link> : selectedStore.name}</strong>{storeLocation(selectedStore) && <p>{storeLocation(selectedStore)}</p>}{!selectedStore.eligible && <p className={styles.storeWarning}>Your saved preferred LGS is no longer eligible for new public display. Choose a different eligible store or clear this preference.</p>}</div><button className={styles.clearButton} type="button" onClick={clearStore}>Clear</button></div> : <p className={styles.help}>No preferred LGS selected.</p>}
            <input id="account-store-search" name="preferredStoreId" value={storeQuery} onChange={(event) => { setStoreQuery(event.target.value); setStoreSearchOpen(true); setGeneralError(null); setSuccessMessage(null); }} onFocus={() => setStoreSearchOpen(true)} placeholder="Search active verified DeckDeal stores" aria-invalid={fieldErrors.preferredStoreId ? "true" : undefined} aria-describedby="account-store-help account-store-status" autoComplete="off" />
          </div>
          <p className={styles.help} id="account-store-help">Your preferred LGS is a DeckDeal profile preference and future default, not transaction authority.</p>
          <div className={styles.statusLine} id="account-store-status" aria-live="polite">{storeSearchOpen && storeOptions.status === "loading" ? "Searching eligible stores…" : storeOptions.status === "error" ? storeOptions.message : storeOptions.status === "ready" && !storeOptions.items.length ? "No eligible DeckDeal stores matched your search." : selectedStore ? `Selected: ${storeLabel(selectedStore)}` : "Search to choose an eligible DeckDeal LGS."}</div>
          {storeSearchOpen && storeOptions.status === "ready" && storeOptions.items.length > 0 && <ul className={styles.storeResults} aria-label="Eligible preferred store matches">{storeOptions.items.map((store) => <li key={store.id}><button className={styles.storeOption} type="button" onClick={() => chooseStore(store)}>{store.name}<span>{storeLocation(store) || store.slug}</span></button></li>)}</ul>}
          {fieldErrors.preferredStoreId && <p className={styles.error} role="alert">{fieldErrors.preferredStoreId}</p>}
        </div>

        {(successMessage || generalError) && <div className={successMessage ? styles.successBanner : styles.submitError} role={successMessage ? "status" : "alert"}>{successMessage ?? generalError}</div>}
        <div className={styles.submitRow}>
          <button className={styles.submit} type="submit" disabled={!dirty || submitting}>{submitting ? "Saving changes…" : "Save changes"}</button>
          <span className={styles.submitHint}>{dirty ? "You have unsaved changes." : "Profile is up to date."}</span>
        </div>
      </form>
    </section>

    <aside className={styles.sidebar}>
      <section className={styles.statusCard}>
        <p className={styles.sectionEyebrow}>Public profile</p>
        <h2>{profile.public_profile_available ? "Discoverable on DeckDeal" : "Not discoverable yet"}</h2>
        <p>{publicProfileMessage}</p>
        {profile.public_profile_available ? <Link className={styles.secondaryAction} href={`/users/${profile.id}`}>View public profile</Link> : <p className={styles.muted}>Your public route stays private until you have at least one genuine public resource.</p>}
      </section>

      <section className={styles.statusCard}>
        <p className={styles.sectionEyebrow}>Account</p>
        <h2>DeckDeal account active</h2>
        <p>Clerk continues managing sign-in, sign-out, and authentication-level account controls. My Profile manages your DeckDeal identity and preferred LGS.</p>
      </section>
    </aside>
  </div>;
}
