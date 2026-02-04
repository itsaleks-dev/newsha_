import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import type { ProductPreview } from "@/entities/product/types";

import { useAppSelector } from "@/app/store/hooks";
import { selectProductPreviews, selectProductStatus } from "@/features/product/model";

import { parseProductFilters } from "@/features/product/filters";

export function useProductList(externalProducts?: readonly ProductPreview[]) {
  const storeProducts = useAppSelector(selectProductPreviews);
  const status = useAppSelector(selectProductStatus);
  const [searchParams] = useSearchParams();

  const products: readonly ProductPreview[] = externalProducts ?? storeProducts;

  const filters = useMemo(() => parseProductFilters(searchParams), [searchParams]);

  const filteredProducts = useMemo(() => {
    if (!products.length) return [];

    return products.filter((p) => {
      if (filters.category && p.categoryId !== filters.category) return false;
      if (filters.needs && !p.needs?.includes(filters.needs)) return false;
      if (filters.condition && !p.condition?.includes(filters.condition)) return false;
      return true;
    });
  }, [products, filters]);

  const isEmpty = status === "succeeded" && filteredProducts.length === 0;

  return {
    products: filteredProducts,
    status,
    isEmpty,
  };
}
