import { CartItem } from "@/entities/cart/types/cart.types";
import { Money, Quantity } from "@/shared/types/primitives";

export type CartState = {
  items: readonly CartItem[];
  totalQty: Quantity;
  totalPrice: Money;
};
