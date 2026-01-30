import type { Coupon } from "@/entities/discount/types";
import type { CartItem } from "@/entities/cart/types";
import type { Money } from "@/shared/types/primitives";

import { calcSubtotal, floorMoney } from "@/shared/types/primitives";

export function calculateDiscount(coupon: Coupon, cart: readonly CartItem[]): Money {
  let total = 0 as Money;

  for (const item of cart) {
    const itemTotal = calcSubtotal(item.price, item.qty);
    total = floorMoney((total as number) + (itemTotal as number));
  }

  switch (coupon.type) {
    case "percent": {
      const raw = (total as number) * (coupon.percent / 100);
      return floorMoney(raw);
    }

    case "fixed": {
      return coupon.amount > total ? total : coupon.amount;
    }

    case "free_shipping": {
      return 0 as Money;
    }

    case "category":
    case "product": {
      const raw = (total as number) * (coupon.percent / 100);
      return floorMoney(raw);
    }
  }
}
