import type { AnalyticsEvent, AnalyticsSDK } from "@/app/analytics/types";

import { getSessionId, getUTM } from "@/app/analytics/lib";

const CURRENCY = "UAH" as const;

let instance: ReturnType<typeof createClient> | null = null;

export function client() {
  if (!instance) instance = createClient();
  return instance;
}

function createClient(): AnalyticsSDK {
  function send(event: AnalyticsEvent) {
    const enriched = {
      ...event,
      currency: CURRENCY,
      session_id: getSessionId(),
      utm: getUTM(),
      ts: Date.now(),
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

    if (import.meta.env.DEV) console.log("📊 ANALYTICS", enriched);
  }

  return {
    track: send,

    page(path) {
      send({ type: "page_view", path });
    },

    error(error) {
      send({ type: "error", error });
    },
  };
}
