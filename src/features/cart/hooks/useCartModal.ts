import { useCallback } from "react";

import { useAppDispatch } from "@/app/store/hooks";
import { closeCart } from "@/features/cart/model";

import { useEscapeClose } from "./useEscapeClose";

export function useCartModal(open: boolean) {
  const dispatch = useAppDispatch();

  const close = useCallback(() => {
    dispatch(closeCart());
  }, [dispatch]);

  useEscapeClose(open, close);

  return { close };
}
