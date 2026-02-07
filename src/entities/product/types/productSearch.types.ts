import { ProductVolumeOption } from "./product.types";

import { ID, Money, Slug } from "@/shared/types/primitives";

export type SearchVariationResult = {
  id: string;
  productId: ID;
  slug: Slug;
  name: string;
  image: string;
  volume: ProductVolumeOption;
  price: Money;
  oldPrice?: Money;
  isInStock: boolean;
};
