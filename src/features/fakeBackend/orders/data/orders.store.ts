import type { Order } from "@/entities/order/types";

let orders: readonly Order[] = [];

export function getOrders(): readonly Order[] {
  return orders;
}

export function setOrders(next: readonly Order[]) {
  orders = next;
}

export function resetOrders(data: Order[] = []) {
  orders = [...data];
}
