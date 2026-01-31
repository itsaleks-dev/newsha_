import type { AppError } from "@/app/errors/model";

const listeners = new Set<(e: AppError) => void>();

export const logger = {
  report(error: AppError) {
    console.error("APP ERROR:", error);
    listeners.forEach((l) => l(error));
  },

  subscribe(fn: (e: AppError) => void) {
    listeners.add(fn);
    return () => {
      listeners.delete(fn);
    };
  },
};
