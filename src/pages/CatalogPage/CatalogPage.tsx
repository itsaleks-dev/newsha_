import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";

import { fetchProducts, selectIsProductsLoaded } from "@/features/product/model";
import { ProductList } from "@/features/product/ui/ProductList";

import { CATALOG_PAGE_TEXT } from "./config";

import { PageWrapper, PageTitle } from "./CatalogPage.styled";

export function CatalogPage() {
  const dispatch = useAppDispatch();
  const isLoaded = useAppSelector(selectIsProductsLoaded);

  useEffect(() => {
    if (!isLoaded) dispatch(fetchProducts());
  }, [dispatch, isLoaded]);

  return (
    <PageWrapper>
      <PageTitle>{CATALOG_PAGE_TEXT.TITLE}</PageTitle>
      <ProductList />
    </PageWrapper>
  );
}
