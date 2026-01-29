import { AnalyticsContext, client } from "@/app/analytics/core";

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  return <AnalyticsContext.Provider value={client()}>{children}</AnalyticsContext.Provider>;
}
