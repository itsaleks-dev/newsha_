import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import type { CartViewItemDetailed } from "../view";

import { useAppSelector, useAppDispatch } from "@/app/store/hooks";

import {
  selectCartItemsDetailed,
  selectCartCount,
  selectCartTotal,
  selectIsCartOpen,
  closeCart,
} from "@/features/cart/model";

import { useCartActions } from "./useCartActions";

export function useCartModalController() {
  const open = useAppSelector(selectIsCartOpen);
  const items = useAppSelector(selectCartItemsDetailed);
  const totalQty = useAppSelector(selectCartCount);
  const totalPrice = useAppSelector(selectCartTotal);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const actions = useCartActions();

  const close = useCallback(() => {
    dispatch(closeCart());
  }, [dispatch]);

  const checkout = useCallback(() => {
    dispatch(closeCart());
    navigate("/checkout");
  }, [dispatch, navigate]);

  const increase = useCallback(
    (item: CartViewItemDetailed) => {
      actions.add({
        productId: item.item.id,
        categoryId: item.product.categoryId,
        volume: item.item.volumeValue,
        qty: 1,
      });
    },
    [actions],
  );

  const decrease = useCallback(
    (item: CartViewItemDetailed) => {
      if (item.item.qty <= 1) {
        actions.remove({
          productId: item.item.id,
          volume: item.item.volumeValue,
        });
      } else {
        actions.add({
          productId: item.item.id,
          categoryId: item.product.categoryId,
          volume: item.item.volumeValue,
          qty: -1,
        });
      }
    },
    [actions],
  );

  const remove = useCallback(
    (item: CartViewItemDetailed) => {
      actions.remove({
        productId: item.item.id,
        volume: item.item.volumeValue,
      });
    },
    [actions],
  );

  const clear = useCallback(() => {
    actions.clear();
  }, [actions]);

  return {
    open,
    items,
    totalQty,
    totalPrice,
    close,
    checkout,
    increase,
    decrease,
    remove,
    clear,
  };
}
