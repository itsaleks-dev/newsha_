import type { OrderId } from "@/entities/order/types";

let seq = 100000;

export function generateOrderId(): OrderId {
  return `ORD-${++seq}` as OrderId;
}
