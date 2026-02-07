import type { Coupon } from "@/entities/discount/types";

import type { CartViewItemDetailed } from "@/features/cart/view";
import { mapCartViewToPricing } from "@/features/checkout/application";
import { calculateOrderPriceDomain } from "@/features/checkout/domain";

export type OrderPricingView = {
  subtotal: number;
  discount: number;
  total: number;
};

export function calculateOrderPrice(
  cart: readonly CartViewItemDetailed[],
  coupon?: Coupon,
): OrderPricingView {
  const pricingCart = mapCartViewToPricing(cart);

  const pricing = calculateOrderPriceDomain(pricingCart, coupon);

  return {
    subtotal: pricing.subtotal as number,
    discount: pricing.discount as number,
    total: pricing.total as number,
  };
}
