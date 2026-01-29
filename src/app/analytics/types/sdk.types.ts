import type { AnalyticsEvent } from "./analytics.types";

export interface AnalyticsSDK {
  track: (e: AnalyticsEvent) => void;
  page: (path: string) => void;
  error: (error: unknown) => void;
}
