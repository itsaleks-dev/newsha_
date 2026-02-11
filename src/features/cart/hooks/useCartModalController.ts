import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { useAppSelector } from "@/app/store/hooks";
import { analyticsApi } from "@/app/analytics/core";

import type { CartViewItemDetailed } from "@/features/cart/view";
import { useCartModal, useCartActions } from "@/features/cart/hooks";
import {
  selectIsCartOpen,
  selectCartCount,
  selectCartTotal,
  selectCartItemsDetailed,
} from "@/features/cart/model";

export function useCartModalController() {
  const open = useAppSelector(selectIsCartOpen);
  const items = useAppSelector(selectCartItemsDetailed);
  const totalQty = useAppSelector(selectCartCount);
  const totalPrice = useAppSelector(selectCartTotal);

  const navigate = useNavigate();
  const { close } = useCartModal(open);
  const actions = useCartActions();

  const increase = useCallback(
    (item: CartViewItemDetailed) => {
      actions.add({
        productId: item.item.id,
        categoryId: item.product!.categoryId,
        volume: item.item.volumeValue,
        qty: 1,
      });
    },
    [actions],
  );

  const decrease = useCallback(
    (item: CartViewItemDetailed) => {
      actions.removeOne({
        productId: item.item.id,
        volume: item.item.volumeValue,
      });
    },
    [actions],
  );

  const remove = useCallback(
    (item: CartViewItemDetailed) => {
      actions.removeLine({
        productId: item.item.id,
        volume: item.item.volumeValue,
      });
    },
    [actions],
  );

  const clear = useCallback(() => {
    actions.clear();
  }, [actions]);

  const checkout = useCallback(() => {
    analyticsApi.beginCheckout({
      items: items
        .filter((i) => i.product)
        .map((i) => ({
          productId: i.product!.id,
          qty: i.item.qty,
          price: i.unitPrice,
        })),
      totalQty,
      totalPrice,
    });

    close();
    navigate("/checkout");
  }, [items, totalQty, totalPrice, close, navigate]);

  return {
    open,
    items,
    totalQty,
    totalPrice,
    increase,
    decrease,
    remove,
    clear,
    checkout,
    close,
  };
}
