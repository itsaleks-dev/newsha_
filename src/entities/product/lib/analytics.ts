import { analyticsApi } from "@/app/analytics/core";

import type { Product } from "@/entities/product/types";

import type { Money } from "@/shared/types/primitives";

export function trackProductView(product: Product) {
  const price: Money | undefined = product.basePrice ?? product.volumes?.[0]?.price;

  analyticsApi.viewProduct({
    productId: String(product.id),
    name: product.name,
    price: Number(price ?? 0),
  });
}
