import type { ProductPreview } from "@/entities/product/types";

import { ProductCardContainer } from "@/features/product/ui/ProductCard";

import { SEARCH_RESULTS_LIST_TEXT } from "@/features/search/ui/SearchResultsList/config";

import { Grid, EmptyState } from "./SearchResultsList.styled";

type Props = {
  products: ProductPreview[];
};

export function SearchResultsList({ products }: Props) {
  if (!products.length) {
    return <EmptyState>{SEARCH_RESULTS_LIST_TEXT.EMPTY}</EmptyState>;
  }

  return (
    <Grid>
      {products.map((p) => (
        <ProductCardContainer key={p.id} product={p} />
      ))}
    </Grid>
  );
}
