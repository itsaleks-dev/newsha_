import { useContext } from "react";

import { AnalyticsContext } from "@/app/analytics/core";

export function useAnalytics() {
  const analytics = useContext(AnalyticsContext);

  if (!analytics) {
    throw new Error("AnalyticsProvider missing");
  }

  return analytics;
}
