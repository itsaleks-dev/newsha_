import type { CartViewItemDetailed } from "@/features/cart/view/cart.view.types";
import type { Coupon } from "@/entities/discount/types";

import { calculateOrderPriceDomain } from "../domain/calculateOrderPrice";
import { mapCartViewToPricing } from "@/features/checkout/application";

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
