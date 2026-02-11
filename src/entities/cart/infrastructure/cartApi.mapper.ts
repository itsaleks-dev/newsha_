import type { CartItem, CartRow } from "@/entities/cart/types";

import { calcSubtotal } from "@/shared/types";

export function mapApiCartToStore(rows: readonly CartItem[]): readonly CartRow[] {
  return rows.map((item) => ({
    productId: item.id,
    volumeValue: item.variant.value,
    qty: item.qty,
    price: item.price,
    ...(item.oldPrice !== undefined ? { oldPrice: item.oldPrice } : {}),
  }));
}

export function mapStoreCartToApi(rows: readonly CartRow[]): readonly CartItem[] {
  return rows.map((row) => {
    const oldPrice = row.oldPrice ?? row.price;

    return {
      id: row.productId,
      variant: {
        value: row.volumeValue,
        label: "",
        unit: "ml",
        price: row.price,
        oldPrice,
      },
      price: row.price,
      ...(row.oldPrice !== undefined ? { oldPrice: row.oldPrice } : {}),
      qty: row.qty,
      subtotal: calcSubtotal(row.price, row.qty),
    };
  });
}
