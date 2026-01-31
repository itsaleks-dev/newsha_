import type { ReactNode } from "react";
import { Suspense } from "react";

import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { RouterProvider } from "@/app/providers/RouterProvider";
import { ErrorMonitoringProvider } from "@/app/providers/ErrorMonitoringProvider";
import { ScrollManager } from "@/app/providers/ScrollManager";

import { AnalyticsProvider, AnalyticsRouterBoundary } from "@/app/analytics/routes";
import { PageLifecycleTracker } from "@/app/analytics/ui";

import { GlobalStyles } from "@/shared/styles";
import { ErrorBoundary } from "@/shared/lib/errorBoundary";
import { ErrorFallback } from "@/shared/ui/ErrorFallback";
import { AppLoader } from "@/shared/ui/AppLoader";

interface Props {
  children: ReactNode;
}

export function AppProviders({ children }: Props) {
  return (
    <ThemeProvider>
      <GlobalStyles />

      <ErrorBoundary fallback={<ErrorFallback />}>
        <Suspense fallback={<AppLoader fullscreen />}>
          <AnalyticsProvider>
            <ErrorMonitoringProvider>
              <RouterProvider>
                <AnalyticsRouterBoundary />
                <PageLifecycleTracker />
                <ScrollManager />
                {children}
              </RouterProvider>
            </ErrorMonitoringProvider>
          </AnalyticsProvider>
        </Suspense>
      </ErrorBoundary>
    </ThemeProvider>
  );
}
