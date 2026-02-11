import type { Coupon } from "@/entities/discount/types";
import type { CartRow } from "@/entities/cart/types";

import type { Money, ID } from "@/shared/types";
import { calcSubtotal, floorMoney } from "@/shared/types";

type ProductMeta = {
  productId: ID;
  categoryId: ID;
};

export function calculateDiscount(
  coupon: Coupon,
  cart: readonly CartRow[],
  products: Record<ID, ProductMeta>,
): Money {
  const calcTotal = (items: readonly CartRow[]) => {
    let total = 0 as Money;

    for (const item of items) {
      const itemTotal = calcSubtotal(item.price, item.qty);
      total = floorMoney((total as number) + (itemTotal as number));
    }

    return total;
  };

  switch (coupon.type) {
    case "percent": {
      const total = calcTotal(cart);
      return floorMoney((total as number) * (coupon.percent / 100));
    }

    case "fixed": {
      const total = calcTotal(cart);
      return coupon.amount > total ? total : coupon.amount;
    }

    case "free_shipping": {
      return 0 as Money;
    }

    case "category": {
      const eligible = cart.filter((item) => {
        const meta = products[item.productId];
        return meta && coupon.categoryIds.includes(meta.categoryId);
      });

      const total = calcTotal(eligible);
      return floorMoney((total as number) * (coupon.percent / 100));
    }

    case "product": {
      const eligible = cart.filter((item) => {
        const meta = products[item.productId];
        return meta && coupon.productIds.includes(meta.productId);
      });

      const total = calcTotal(eligible);
      return floorMoney((total as number) * (coupon.percent / 100));
    }
  }
}
