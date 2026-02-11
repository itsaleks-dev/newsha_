import type { OrderItem } from "@/entities/order/types";
import type { CartRow } from "@/entities/cart/types";

export function orderItemToCartRow(item: OrderItem): CartRow {
  return {
    productId: item.productId,
    volumeValue: item.volumeValue,
    qty: item.quantity,
    price: item.price,
  };
}
