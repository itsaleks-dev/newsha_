import type { ProductPreview } from "@/entities/product/types";

import { getEffectiveProductPrice } from "@/features/product/lib";

import type { ProductSort } from "@/features/product/config";

export function sortProducts(products: ProductPreview[], sort: ProductSort): ProductPreview[] {
  const list = [...products];

  switch (sort) {
    case "price_asc":
      return list.sort((a, b) => getEffectiveProductPrice(a) - getEffectiveProductPrice(b));

    case "price_desc":
      return list.sort((a, b) => getEffectiveProductPrice(b) - getEffectiveProductPrice(a));

    case "new":
      return list.sort((a, b) => Number(b.isNew) - Number(a.isNew));

    case "popular":
    default:
      return list.sort(
        (a, b) => (b.rating ?? 0) - (a.rating ?? 0) || (b.reviewCount ?? 0) - (a.reviewCount ?? 0),
      );
  }
}
