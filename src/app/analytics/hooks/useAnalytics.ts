import { useContext } from "react";

import { AnalyticsContext } from "@/app/analytics/core";

export function useAnalytics() {
  const ctx = useContext(AnalyticsContext);
  if (!ctx) throw new Error("AnalyticsProvider missing");
  return ctx;
}
