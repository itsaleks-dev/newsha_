import type { Coupon } from "@/entities/discount/types";
import { asMoney, type ID, type Money } from "@/shared/types/primitives";

export type PricingCartItem = {
  price: Money;
  qty: number;
  productId?: ID;
  categoryId?: ID;
};

export type OrderPricing = {
  subtotal: Money;
  discount: Money;
  total: Money;
};

export function calculateOrderPriceDomain(
  cart: readonly PricingCartItem[],
  coupon?: Coupon,
): OrderPricing {
  const subtotal = asMoney(cart.reduce((sum, i) => sum + (i.price as number) * i.qty, 0));

  if (!coupon) {
    return { subtotal, discount: asMoney(0), total: subtotal };
  }

  if ("minOrderTotal" in coupon && coupon.minOrderTotal) {
    const minTotal = coupon.minOrderTotal as unknown as Money;
    if ((subtotal as number) < (minTotal as number)) {
      return { subtotal, discount: asMoney(0), total: subtotal };
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
        if (!i.productId) return sum;

        if (!coupon.productIds.includes(i.productId)) return sum;

        return sum + (i.price as number) * i.qty * (coupon.percent / 100);
      }, 0);
      break;
    }

    case "category": {
      discountValue = cart.reduce((sum, i) => {
        if (!i.categoryId) return sum;

        if (!coupon.categoryIds.includes(i.categoryId)) return sum;

        return sum + (i.price as number) * i.qty * (coupon.percent / 100);
      }, 0);
      break;
    }

    case "free_shipping": {
      discountValue = 0;
      break;
    }
  }

  const discount = asMoney(Math.min(Math.round(discountValue), subtotal as number));

  return {
    subtotal,
    discount,
    total: asMoney((subtotal as number) - (discount as number)),
  };
}
