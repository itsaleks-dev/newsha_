import { useCallback } from "react";

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";

import { asID } from "@/shared/types/primitives";

import { selectIsAuthenticated, toggleWishlist, openLogin } from "@/features/auth/model";
import { selectWishlist } from "@/features/wishlist/model";

export function useWishlist() {
  const dispatch = useAppDispatch();

  const isAuth = useAppSelector(selectIsAuthenticated);
  const wishlist = useAppSelector(selectWishlist);

  const toggle = useCallback(
    (productId: string) => {
      if (!isAuth) {
        dispatch(openLogin());
        return;
      }

      const id = asID(productId);
      dispatch(toggleWishlist(id));
    },
    [dispatch, isAuth],
  );

  const isInWishlist = useCallback(
    (productId: string) => {
      const id = asID(productId);
      return wishlist.includes(id);
    },
    [wishlist],
  );

  return {
    wishlist,
    toggle,
    isInWishlist,
  };
}
