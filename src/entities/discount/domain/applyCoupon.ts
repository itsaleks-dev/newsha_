import type { Coupon } from "@/entities/discount/types";
import type { CartRow } from "@/entities/cart/types";

import type { Money, ID } from "@/shared/types";
import { calcSubtotal, floorMoney } from "@/shared/types";

import { calculateDiscount } from "./calculateDiscount";
import { validateCoupon } from "./validateCoupon";

type ProductMeta = {
  productId: ID;
  categoryId: ID;
};

export function applyCoupon(
  cart: readonly CartRow[],
  coupon: Coupon,
  products: Record<ID, ProductMeta>,
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

  const discount = calculateDiscount(coupon, cart, products);
  const finalTotal = floorMoney(Math.max(0, (total as number) - (discount as number)));

  return {
    valid: true,
    discount,
    finalTotal,
  };
}
