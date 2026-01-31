import type { Middleware } from "@reduxjs/toolkit";

import { normalizeError } from "@/app/errors/model";
import { logger } from "@/app/errors/lib";

function isRejectedAction(action: unknown): action is {
  type: string;
  payload?: unknown;
  error?: unknown;
} {
  return (
    typeof action === "object" &&
    action !== null &&
    "type" in action &&
    typeof (action as { type?: unknown }).type === "string" &&
    (action as { type: string }).type.endsWith("/rejected")
  );
}

export const reduxErrorMiddleware: Middleware = () => (next) => (action) => {
  if (isRejectedAction(action)) {
    logger.report(normalizeError(action.payload ?? action.error));
  }

  return next(action);
};
