import { AccountShell } from "../../../../features/account/account-shell";
import { MessagesManager } from "./messages-manager";
import { Suspense } from "react";
export default function MessagesPage() {
  return (
    <AccountShell
      section="messages"
      title="Messages"
      intro="Talk with friends and authorized marketplace counterparties. Formal Offers and Store custody remain separate."
      wide
    >
      <Suspense fallback={<p>Loading messages…</p>}>
        <MessagesManager />
      </Suspense>
    </AccountShell>
  );
}
