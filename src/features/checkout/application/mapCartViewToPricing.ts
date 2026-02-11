import type { CartViewItemDetailed } from "@/features/cart/view";
import type { PricingCartItem } from "@/features/checkout/domain/calculateOrderPrice";

export function mapCartViewToPricing(cart: readonly CartViewItemDetailed[]): PricingCartItem[] {
  return cart.map((i) => ({
    price: i.item.price,
    qty: i.item.qty as unknown as number,
    productId: i.item.id,
    categoryId: i.product?.categoryId,
  }));
}
