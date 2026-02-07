import type { AnalyticsEvent, AnalyticsSDK } from "@/app/analytics/types";
import { getSessionId, getUTM } from "@/app/analytics/lib";

const ANALYTICS_CURRENCY = "UAH" as const;

let instance: AnalyticsSDK | null = null;

export function client(): AnalyticsSDK {
  if (!instance) {
    instance = createClient();
  }
  return instance;
}

function createClient(): AnalyticsSDK {
  const session_id = getSessionId();
  const utm = getUTM();

  function send(event: AnalyticsEvent) {
    const enriched = {
      ...event,
      ts: Date.now(),
      currency: ANALYTICS_CURRENCY,
      session_id,
      utm,
    };

    const hasValue = "value" in enriched;

    window.gtag?.("event", enriched.type, {
      ...(hasValue && { value: enriched.value }),
      currency: enriched.currency,
      ...("path" in enriched && { page_path: enriched.path }),
      ...("productId" in enriched && { item_id: enriched.productId }),
    });

    window.fbq?.("trackCustom", enriched.type, {
      ...(hasValue && { value: enriched.value }),
      currency: enriched.currency,
    });

    if (import.meta.env.DEV) {
      console.log("ANALYTICS", enriched);
    }
  }

  return {
    track: send,

    page(path: string) {
      send({ type: "page_view", path });
    },

    error(error: unknown) {
      send({
        type: "error",
        error,
      });
    },
  };
}
