import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { fetchProducts, selectIsProductsLoaded } from "@/features/product/model";

import { ProductList } from "@/features/product/ui/ProductList";
import { MAIN_CATEGORIES } from "@/features/fakeBackend/category/data";

import { CATALOG_PAGE_TEXT } from "./config";
import { PageWrapper, PageTitle } from "./CatalogPage.styled";

export function CatalogPage() {
  const { categorySlug } = useParams<{ categorySlug?: string }>();

  const dispatch = useAppDispatch();
  const isLoaded = useAppSelector(selectIsProductsLoaded);

  useEffect(() => {
    if (!isLoaded) {
      dispatch(fetchProducts());
    }
  }, [dispatch, isLoaded]);

  const activeCategory = categorySlug ? MAIN_CATEGORIES.find((c) => c.slug === categorySlug) : null;

  return (
    <PageWrapper>
      <PageTitle>{activeCategory?.name ?? CATALOG_PAGE_TEXT.TITLE}</PageTitle>

      <ProductList />
    </PageWrapper>
  );
}
