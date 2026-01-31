import type { ReactNode } from "react";
import { useEffect } from "react";

import { useAnalytics } from "@/app/analytics/hooks";
import { logger } from "@/app/errors/lib";

import { showToast } from "@/shared/ui/Toast/domain";

export function ErrorMonitoringProvider({ children }: { children: ReactNode }) {
  const analytics = useAnalytics();

  useEffect(() => {
    return logger.subscribe((error) => {
      showToast("error", error.message);
      analytics.track({ type: "error", error });
    });
  }, [analytics]);

  return <>{children}</>;
}
