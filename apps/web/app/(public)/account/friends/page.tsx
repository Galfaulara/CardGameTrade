import { AccountShell } from "../../../../features/account/account-shell";
import { FriendsManager } from "./friends-manager";
export default function FriendsPage() {
  return (
    <AccountShell
      section="friends"
      title="Friends"
      intro="Manage your DeckDeal friendships, requests, and social communication boundaries."
      wide
    >
      <FriendsManager />
    </AccountShell>
  );
}
