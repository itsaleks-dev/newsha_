import type { Order } from "@/entities/order/types";
import { analyticsApi } from "@/app/analytics/core";

export function trackPurchase(order: Order) {
  analyticsApi.purchase({
    orderId: String(order.id),
    total: Number(order.total),
  });
}
