import type { ReactNode } from "react";
import { AppShell } from "../../components/app-shell/app-shell";
import { NavigationTracker } from "../../components/navigation-back/navigation-tracker";
import { AddToCollectionProvider } from "../../components/add-to-collection/add-to-collection-provider";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <AppShell>
      <NavigationTracker />
      <AddToCollectionProvider>{children}</AddToCollectionProvider>
    </AppShell>
  );
}
