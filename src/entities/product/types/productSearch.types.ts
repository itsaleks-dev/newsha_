import { ID, Money, Slug } from "@/shared/types/primitives";
import { ProductVolumeOption } from "./product.types";

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
