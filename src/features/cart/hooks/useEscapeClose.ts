import { useEffect, useRef } from "react";

export function useEscapeClose(active: boolean, onClose: () => void) {
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!active) return;

    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onCloseRef.current();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [active]);
}
