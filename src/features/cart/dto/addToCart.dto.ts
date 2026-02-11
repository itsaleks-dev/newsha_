import type { ProductVolume } from "@/entities/product/types";

import type { ID } from "@/shared/types";

export interface AddToCartDTO {
  productId: ID;
  categoryId: ID;
  volume: ProductVolume | null;
  qty: number;
}
