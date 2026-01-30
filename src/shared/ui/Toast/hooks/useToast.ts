import { showToast } from "@/shared/ui/Toast/domain";
import type { ToastType } from "@/shared/ui/Toast/types";
import { TOAST_TYPES } from "@/shared/ui/Toast/types";

export function useToast() {
  return {
    show: (type: ToastType, message: string, duration?: number) =>
      showToast(type, message, duration),

    success: (message: string, duration?: number) =>
      showToast(TOAST_TYPES.SUCCESS, message, duration),

    error: (message: string, duration?: number) => showToast(TOAST_TYPES.ERROR, message, duration),

    info: (message: string, duration?: number) => showToast(TOAST_TYPES.INFO, message, duration),

    warning: (message: string, duration?: number) =>
      showToast(TOAST_TYPES.WARNING, message, duration),
  } as const;
}
