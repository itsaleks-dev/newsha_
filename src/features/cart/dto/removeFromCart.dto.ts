import type { ProductVolume } from "@/entities/product/types";

import type { ID } from "@/shared/types/primitives";

export interface RemoveFromCartDTO {
  productId: ID;
  volume: ProductVolume | null;
}
