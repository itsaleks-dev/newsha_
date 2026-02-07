import { useMemo } from "react";
import { useSearchParams, useParams } from "react-router-dom";

import { useAppSelector } from "@/app/store/hooks";

import type { ProductPreview } from "@/entities/product/types";

import { selectProductPreviews, selectProductStatus } from "@/features/product/model";
import { parseProductFilters } from "@/features/product/filters";
import { MAIN_CATEGORIES } from "@/features/fakeBackend/category/data";

export function useProductList(externalProducts?: readonly ProductPreview[]) {
  const storeProducts = useAppSelector(selectProductPreviews);
  const status = useAppSelector(selectProductStatus);

  const [searchParams] = useSearchParams();
  const { categorySlug } = useParams<{ categorySlug?: string }>();

  const products: readonly ProductPreview[] = externalProducts ?? storeProducts;

  const filters = useMemo(() => parseProductFilters(searchParams), [searchParams]);

  const categoryId = useMemo(() => {
    if (!categorySlug) return null;
    return MAIN_CATEGORIES.find((c) => c.slug === categorySlug)?.id ?? null;
  }, [categorySlug]);

  const filteredProducts = useMemo(() => {
    if (!products.length) return [];

    return products.filter((p) => {
      if (categoryId && p.categoryId !== categoryId) return false;
      if (filters.needs && !p.needs?.includes(filters.needs)) return false;
      if (filters.condition && !p.condition?.includes(filters.condition)) return false;

      return true;
    });
  }, [products, filters, categoryId]);

  const isEmpty = status === "succeeded" && filteredProducts.length === 0;

  return {
    products: filteredProducts,
    status,
    isEmpty,
  };
}
