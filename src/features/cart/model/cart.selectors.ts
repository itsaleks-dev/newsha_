import { createSelector } from "@reduxjs/toolkit";

import type { RootState } from "@/app/store/rootReducer";

import type { CartViewItemDetailed } from "@/features/cart/view";
import { selectProductPreviews } from "@/features/product/model";

import { asQuantity } from "@/shared/types/primitives";
import { calcSubtotal } from "@/shared/types/primitives";

const selectCartState = (state: RootState) => state.cart;
export const selectCartItems = createSelector([selectCartState], (s) => s.items);

export const selectCartCount = createSelector([selectCartItems], (items) =>
  asQuantity(items.reduce((sum, i) => sum + (i.qty as number), 0)),
);

export const selectCartTotal = createSelector([selectCartItems], (items) =>
  items.reduce((sum, i) => sum + i.price * i.qty, 0),
);

export const selectCartItemsDetailed = createSelector(
  [selectCartItems, selectProductPreviews],
  (items, products): CartViewItemDetailed[] =>
    items
      .map((row) => {
        const product = products.find((p) => p.id === row.productId);
        if (!product) return null;

        const volume = product.volumes?.find((v) => v.value === row.volumeValue);

        return {
          item: {
            id: row.productId,
            slug: product.slug,
            name: product.name,
            image: product.image ?? "",
            volumeValue: row.volumeValue,
            price: row.price,
            oldPrice: row.oldPrice ?? null,
            qty: row.qty,
          },

          product,
          volume,
          unitPrice: row.price,
          totalPrice: calcSubtotal(row.price, row.qty),
        };
      })
      .filter(Boolean) as CartViewItemDetailed[],
);
