import type { Product } from "@/entities/product/types";

import { enrichProductWithAutoTags } from "@/entities/product/domain";

export function autoFillNeedsAndCondition(product: Product): Product {
  const mapped = enrichProductWithAutoTags(product);

  return {
    ...product,
    ...(product.needs?.length ? {} : { needs: mapped.needs }),
    ...(product.condition?.length ? {} : { condition: mapped.condition }),
  };
}
