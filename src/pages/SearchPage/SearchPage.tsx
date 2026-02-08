import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { buildSearchSeo } from "@/app/seo/builders";
import { SeoHead } from "@/app/seo/components";
import { analyticsApi } from "@/app/analytics/core";

import { SearchResultsList } from "@/features/search/ui/SearchResultsList";
import { sortProducts } from "@/features/product/domain";
import type { ProductSort } from "@/features/product/config";
import {
  fetchProducts,
  selectProductPreviews,
  selectProductStatus,
} from "@/features/product/model";

import { SEARCH_PAGE_TEXT } from "./config";
import { PageWrapper, PageTitle, EmptyState } from "./SearchPage.styled";

const MIN_QUERY_LENGTH = 3;

export function SearchPage() {
  const [params] = useSearchParams();
  const query = (params.get("q") ?? "").trim().toLowerCase();
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProductPreviews);
  const status = useAppSelector(selectProductStatus);
  const sort: ProductSort = "popular";
  const isValidQuery = query.length >= MIN_QUERY_LENGTH;

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  useEffect(() => {
    if (isValidQuery) {
      analyticsApi.search(query);
    }
  }, [isValidQuery, query]);

  const seo = useMemo(() => buildSearchSeo(query), [query]);

  const filteredProducts = useMemo(() => {
    if (!isValidQuery) return [];

    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.tags?.some((tag) => tag.toLowerCase().includes(query)),
    );
  }, [products, query, isValidQuery]);

  const sortedProducts = useMemo(
    () => sortProducts(filteredProducts, sort),
    [filteredProducts, sort],
  );

  return (
    <PageWrapper>
      <SeoHead meta={{ ...seo, noIndex: !isValidQuery }} />

      <PageTitle>
        {isValidQuery ? SEARCH_PAGE_TEXT.TITLE_RESULTS(query) : SEARCH_PAGE_TEXT.TITLE_EMPTY}
      </PageTitle>

      {!isValidQuery ? (
        <EmptyState>{SEARCH_PAGE_TEXT.MIN_LENGTH(MIN_QUERY_LENGTH)}</EmptyState>
      ) : (
        <SearchResultsList products={sortedProducts} />
      )}
    </PageWrapper>
  );
}
