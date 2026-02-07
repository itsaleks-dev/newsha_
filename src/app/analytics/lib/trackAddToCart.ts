import type { AnalyticsSDK, Params } from "@/app/analytics/types";

export function trackAddToCart(analytics: AnalyticsSDK, params: Params) {
  analytics.track({
    type: "add_to_cart",
    productId: params.productId as string,
    price: params.price as number,
    qty: params.qty,
    value: params.value as number,
  });
}
