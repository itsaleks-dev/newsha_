import type { ProductPreview } from "@/entities/product/types";

import { ProductCardContainer } from "@/features/product/ui/ProductCard";
import { PRODUCT_GRID_TEXT } from "@/features/product/ui/ProductGrid/config";

import * as S from "./ProductGrid.styled";

type Props = {
  products: readonly ProductPreview[];
};

export function ProductGrid({ products }: Props) {
  if (!products.length) {
    return <S.EmptyState>{PRODUCT_GRID_TEXT.EMPTY}</S.EmptyState>;
  }

  return (
    <S.Grid>
      {products.map((p) => (
        <ProductCardContainer key={p.id} product={p} />
      ))}
    </S.Grid>
  );
}
