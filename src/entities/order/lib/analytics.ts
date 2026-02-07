import { analyticsApi } from "@/app/analytics/core";

import type { Order } from "@/entities/order/types";

export function trackPurchase(order: Order) {
  analyticsApi.purchase({
    orderId: String(order.id),
    total: Number(order.total),
  });
}
