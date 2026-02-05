import type { AnalyticsSDK } from "@/app/analytics/types";

import type { ID, Money } from "@/shared/types/primitives";

type Params = {
  productId: ID;
  price: Money;
  qty: number;
  value: Money;
};

export function trackAddToCart(analytics: AnalyticsSDK, params: Params) {
  analytics.track({
    type: "add_to_cart",
    productId: params.productId as string,
    price: params.price as number,
    qty: params.qty,
    value: params.value as number,
  });
}
