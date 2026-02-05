import type { Order, StoreOrder } from "@/entities/order/types";

export const toStoreOrder = (order: Order): StoreOrder => ({
  ...order,
  items: [...order.items],
});
