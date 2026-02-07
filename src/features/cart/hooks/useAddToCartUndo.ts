import { useEffect, useRef, useState } from "react";

import type { ProductVolume } from "@/entities/product/types";

import { useAppDispatch } from "@/app/store/hooks";

import { addToCart, removeFromCart } from "@/features/cart/model";

import type { ID } from "@/shared/types/primitives";

type Options = {
  timeoutMs?: number;
};

type Params = {
  productId: ID;
  categoryId: ID;
  volume: ProductVolume | null;
};

export function useAddToCartUndo({ productId, categoryId, volume }: Params, options?: Options) {
  const dispatch = useAppDispatch();
  const timeout = options?.timeoutMs ?? 3000;

  const timerRef = useRef<number | null>(null);
  const [state, setState] = useState<"idle" | "pending">("idle");

  const start = () => {
    if (state === "pending") return;

    dispatch(
      addToCart({
        productId,
        categoryId,
        volume,
        qty: 1,
      }),
    );

    setState("pending");

    timerRef.current = window.setTimeout(() => {
      setState("idle");
      timerRef.current = null;
    }, timeout);
  };

  const cancel = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    dispatch(
      removeFromCart({
        productId,
        volume,
      }),
    );

    setState("idle");
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return {
    state,
    start,
    cancel,
    progressMs: timeout,
  };
}
