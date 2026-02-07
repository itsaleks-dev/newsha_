import type { CartRow } from "@/entities/cart/types";
import type { ProductPreview } from "@/entities/product/types";

import type { CartViewItem, CartViewItemDetailed } from "@/features/cart/view";

import { calcSubtotal } from "@/shared/types/primitives";

export function buildCartViewItems(
  rows: readonly CartRow[],
  products: readonly ProductPreview[],
): CartViewItemDetailed[] {
  return rows
    .map((row) => {
      const product = products.find((p) => p.id === row.productId);
      if (!product) return null;

      const volume = product.volumes?.find((v) => v.value === row.volumeValue);

      const unitPrice = row.price;
      const totalPrice = calcSubtotal(row.price, row.qty);

      const item: CartViewItem = {
        id: row.productId,
        slug: product.slug,
        name: product.name,
        image: product.image ?? "",
        volumeValue: row.volumeValue,
        price: row.price,
        oldPrice: row.oldPrice ?? null,
        qty: row.qty,
      };

      return {
        item,
        product,
        ...(volume ? { volume } : {}),
        unitPrice,
        totalPrice,
      };
    })
    .filter((v): v is CartViewItemDetailed => v !== null);
}
