import type { ProductPreview } from "@/entities/product/types";

import { ProductCardContainer } from "@/features/product/ui/ProductCard";
import { PRODUCT_GRID_TEXT } from "@/features/product/ui/ProductGrid/config";

import { Grid, EmptyState } from "./ProductGrid.styled";

type Props = {
  products: readonly ProductPreview[];
};

export function ProductGrid({ products }: Props) {
  if (!products.length) {
    return <EmptyState>{PRODUCT_GRID_TEXT.EMPTY}</EmptyState>;
  }

  return (
    <Grid>
      {products.map((p) => (
        <ProductCardContainer key={p.id} product={p} />
      ))}
    </Grid>
  );
}
