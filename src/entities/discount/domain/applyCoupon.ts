import type { Coupon } from "@/entities/discount/types";
import type { CartItem } from "@/entities/cart/types";
import type { Money } from "@/shared/types/primitives";
import { calcSubtotal, floorMoney } from "@/shared/types/primitives";

import { calculateDiscount } from "./calculateDiscount";
import { validateCoupon } from "./validateCoupon";

export function applyCoupon(
  cart: readonly CartItem[],
  coupon: Coupon,
):
  | { valid: false; reason: "expired" | "limit_reached" | "min_total_not_met" }
  | { valid: true; discount: Money; finalTotal: Money } {
  let total = 0 as Money;

  for (const item of cart) {
    const itemTotal = calcSubtotal(item.price, item.qty);
    total = floorMoney((total as number) + (itemTotal as number));
  }

  const validation = validateCoupon(coupon, total);
  if (!validation.valid) {
    return validation;
  }

  const discount = calculateDiscount(coupon, cart);
  const finalTotal = floorMoney(Math.max(0, (total as number) - (discount as number)));

  return {
    valid: true,
    discount,
    finalTotal,
  };
}
