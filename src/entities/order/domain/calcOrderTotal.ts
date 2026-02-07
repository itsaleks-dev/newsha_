import type { OrderItem } from "@/entities/order/types/order.types";

import type { Subtotal } from "@/shared/types/primitives";
import { calcSubtotal } from "@/shared/types/primitives";

export function calcOrderTotal(items: readonly OrderItem[]): Subtotal {
  let total = 0 as Subtotal;

  for (const item of items) {
    const itemTotal = calcSubtotal(item.price, item.quantity);
    total = ((total as number) + itemTotal) as number as Subtotal;
  }

  return total;
}
