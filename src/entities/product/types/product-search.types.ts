import { ID, Money, Slug } from "@/entities/primitives";
import { ProductVolumeOption } from "./product.types";

export type SearchVariationResult = {
  id: ID;
  productId: ID;
  slug: Slug;
  name: string;
  image: string;
  volume: ProductVolumeOption;
  price: Money;
  oldPrice?: Money;
  isInStock: boolean;
};
