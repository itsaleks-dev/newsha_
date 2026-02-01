import type { CartItem } from "@/entities/cart/types";

import { asQuantity, calcSubtotal } from "@/shared/types/primitives";

export const getIncreaseItem = (item: CartItem): CartItem => {
  const qty = asQuantity((item.qty as number) + 1);

  return {
    ...item,
    qty,
    subtotal: calcSubtotal(item.price, qty),
  };
};

export const getDecreaseItem = (item: CartItem): CartItem | null => {
  const currentQty = item.qty as number;

  if (currentQty === 1) return null;

  const qty = asQuantity(currentQty - 1);

  return {
    ...item,
    qty,
    subtotal: calcSubtotal(item.price, qty),
  };
};
