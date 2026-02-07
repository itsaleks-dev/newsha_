import type { Coupon } from "@/entities/discount/types";

import { asQuantity, calcSubtotal } from "@/shared/types/primitives";
import type { ID, Money, Subtotal } from "@/shared/types/primitives";

export type PricingCartItem = {
  price: Money;
  qty: number;
  productId?: ID;
  categoryId?: ID;
};

export type OrderPricing = {
  readonly subtotal: Subtotal;
  readonly discount: Subtotal;
  readonly total: Subtotal;
};

export function calculateOrderPriceDomain(
  cart: readonly PricingCartItem[],
  coupon?: Coupon,
): OrderPricing {
  const subtotal = cart.reduce<Subtotal>((sum, item) => {
    const lineTotal = calcSubtotal(item.price, asQuantity(item.qty));
    return ((sum as number) + (lineTotal as number)) as Subtotal;
  }, 0 as Subtotal);

  if (!coupon) {
    return {
      subtotal,
      discount: 0 as Subtotal,
      total: subtotal,
    };
  }

  if ("minOrderTotal" in coupon && coupon.minOrderTotal) {
    const minTotal = coupon.minOrderTotal as Money;
    if ((subtotal as number) < (minTotal as number)) {
      return {
        subtotal,
        discount: 0 as Subtotal,
        total: subtotal,
      };
    }
  }

  let discountValue = 0;

  switch (coupon.type) {
    case "percent": {
      discountValue = Math.round((subtotal as number) * (coupon.percent / 100));
      break;
    }

    case "fixed": {
      discountValue = coupon.amount as unknown as number;
      break;
    }

    case "product": {
      discountValue = cart.reduce((sum, i) => {
        if (!i.productId || !coupon.productIds.includes(i.productId)) return sum;
        return sum + (i.price as number) * i.qty * (coupon.percent / 100);
      }, 0);
      break;
    }

    case "category": {
      discountValue = cart.reduce((sum, i) => {
        if (!i.categoryId || !coupon.categoryIds.includes(i.categoryId)) return sum;
        return sum + (i.price as number) * i.qty * (coupon.percent / 100);
      }, 0);
      break;
    }

    case "free_shipping": {
      discountValue = 0;
      break;
    }
  }

  const discount = Math.min(Math.round(discountValue), subtotal as number) as Subtotal;
  const total = ((subtotal as number) - (discount as number)) as Subtotal;

  return {
    subtotal,
    discount,
    total,
  };
}
