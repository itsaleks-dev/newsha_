import { CartItem } from "@/entities/cart/types";

import { Money, Quantity } from "@/shared/types";

export type CartState = {
  items: readonly CartItem[];
  totalQty: Quantity;
  totalPrice: Money;
};
