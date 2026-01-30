import type { ReactNode } from "react";
import { Suspense } from "react";

import { ThemeProvider } from "../ThemeProvider";
import { ScrollManager } from "../ScrollManager";

import { AnalyticsProvider } from "@/app/analytics/routes";
import { AnalyticsRouterBoundary } from "@/app/analytics/routes";
import { PageLifecycleTracker } from "@/app/analytics/ui";

import { GlobalStyles } from "@/shared/styles";

interface Props {
  children: ReactNode;
}

export function AppProviders({ children }: Props) {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Suspense>
        <AnalyticsProvider>
          <AnalyticsRouterBoundary />
          <PageLifecycleTracker />
          <ScrollManager />
          {children}
        </AnalyticsProvider>
      </Suspense>
    </ThemeProvider>
  );
}
