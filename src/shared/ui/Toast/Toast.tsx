import { useEffect, useState } from "react";

import type { Toast } from "@/shared/ui/Toast/types";

import { subscribeToToasts } from "./domain";
import * as S from "./Toast.styles";

export function ToastContainer() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => subscribeToToasts(setToasts), []);

  if (toasts.length === 0) return null;

  return (
    <S.Stack aria-live="polite" role="status">
      {toasts.map((toast) => (
        <S.ToastItem key={toast.id} $type={toast.type}>
          <S.ToastDot $type={toast.type} />
          <div>{toast.message}</div>
        </S.ToastItem>
      ))}
    </S.Stack>
  );
}
