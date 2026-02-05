import type { ProductPreview } from "@/entities/product/types";

import { ProductCardContainer } from "@/features/product/ui/ProductCard/ProductCard.container";
import { useProductList } from "@/features/product/hooks/useProductList";
import { PRODUCT_LIST_TEXT } from "@/features/product/ui/ProductList/config";

import * as S from "./ProductList.styled";

type Props = {
  products?: readonly ProductPreview[];
};

export function ProductList({ products }: Props) {
  const { products: list, status, isEmpty } = useProductList(products);

  if (status === "loading") {
    return (
      <S.PageSection>
        <S.Inner>
          <p>{PRODUCT_LIST_TEXT.LOADING}</p>
        </S.Inner>
      </S.PageSection>
    );
  }

  if (status === "failed") {
    return (
      <S.PageSection>
        <S.Inner>
          <p>{PRODUCT_LIST_TEXT.ERROR}</p>
        </S.Inner>
      </S.PageSection>
    );
  }

  return (
    <S.PageSection>
      <S.Inner>
        {isEmpty ? (
          <S.EmptyState>{PRODUCT_LIST_TEXT.EMPTY}</S.EmptyState>
        ) : (
          <S.Grid>
            {list.map((product) => (
              <ProductCardContainer key={product.id} product={product} />
            ))}
          </S.Grid>
        )}
      </S.Inner>
    </S.PageSection>
  );
}
