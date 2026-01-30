import { useEffect, useState } from "react";

import { subscribeToToasts } from "./domain";
import type { Toast } from "@/shared/ui/Toast/types";

import { Stack, ToastItem, ToastDot } from "./Toast.styles";

export function ToastContainer() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => subscribeToToasts(setToasts), []);

  if (toasts.length === 0) return null;

  return (
    <Stack aria-live="polite" role="status">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} $type={toast.type}>
          <ToastDot $type={toast.type} />
          <div>{toast.message}</div>
        </ToastItem>
      ))}
    </Stack>
  );
}
