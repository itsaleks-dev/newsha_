import type { Toast, ToastPromiseMessages, ToastType } from "@/shared/ui/Toast/types";
import { TOAST_TYPES } from "@/shared/ui/Toast/types";

type Listener = (toasts: Toast[]) => void;

let toasts: Toast[] = [];
const listeners = new Set<Listener>();

const DEFAULT_DURATION = 2200;

function createId(): string {
  return Math.random().toString(36).slice(2);
}

function notify() {
  listeners.forEach((l) => l(toasts));
}

function removeToast(id: string) {
  toasts = toasts.filter((t) => t.id !== id);
  notify();
}

function autoRemove(toast: Toast) {
  if (toast.persistent) return;

  const duration = toast.duration ?? DEFAULT_DURATION;
  if (duration <= 0) return;

  setTimeout(() => removeToast(toast.id), duration);
}

function replaceToast(id: string, patch: Partial<Toast>) {
  toasts = toasts.map((t) => (t.id === id ? { ...t, ...patch } : t));
  notify();
}

export function showToast(type: ToastType, message: string, duration?: number) {
  const toast: Toast =
    duration === undefined
      ? { id: createId(), type, message }
      : { id: createId(), type, message, duration };

  toasts = [...toasts, toast];
  notify();
  autoRemove(toast);
}

export function showPromiseToast<T>(
  promise: Promise<T>,
  messages: ToastPromiseMessages<T>,
  duration?: number,
) {
  const id = createId();

  const loadingToast: Toast =
    duration === undefined
      ? { id, type: TOAST_TYPES.INFO, message: messages.loading, persistent: true }
      : { id, type: TOAST_TYPES.INFO, message: messages.loading, persistent: true, duration };

  toasts = [...toasts, loadingToast];
  notify();

  promise
    .then((result) => {
      replaceToast(id, {
        type: TOAST_TYPES.SUCCESS,
        message:
          typeof messages.success === "function" ? messages.success(result) : messages.success,
        persistent: false,
        ...(duration !== undefined && { duration }),
      });
      autoRemove({
        ...loadingToast,
        persistent: false,
        ...(duration !== undefined && { duration }),
      });
    })
    .catch((error) => {
      replaceToast(id, {
        type: TOAST_TYPES.ERROR,
        message: typeof messages.error === "function" ? messages.error(error) : messages.error,
        persistent: false,
        ...(duration !== undefined && { duration }),
      });
      autoRemove({
        ...loadingToast,
        persistent: false,
        ...(duration !== undefined && { duration }),
      });
    });
}

export function subscribeToToasts(listener: Listener): () => void {
  listeners.add(listener);
  listener(toasts);
  return () => listeners.delete(listener);
}
