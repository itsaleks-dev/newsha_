import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";

import { fetchProducts } from "@/features/product/model";
import { selectProductPreviews, selectProductStatus } from "@/features/product/model";

import { SearchResultsList } from "@/features/search/ui/SearchResultsList";
import { sortProducts } from "@/features/product/domain";
import type { ProductSort } from "@/features/product/config";

import { buildSearchSeo } from "@/app/seo/builders";
import { SeoHead } from "@/app/seo/components";
import { analyticsApi } from "@/app/analytics/core";

import { SEARCH_PAGE_TEXT } from "./config";

import { PageWrapper, PageTitle } from "@/pages/CatalogPage/CatalogPage.styled";

const MIN_QUERY_LENGTH = 3;

export function SearchPage() {
  const [params] = useSearchParams();
  const query = (params.get("q") ?? "").trim().toLowerCase();

  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProductPreviews);
  const status = useAppSelector(selectProductStatus);

  const sort: ProductSort = "popular";

  useEffect(() => {
    if (status === "idle") dispatch(fetchProducts());
  }, [status, dispatch]);

  const isValidQuery = query.length >= MIN_QUERY_LENGTH;

  useEffect(() => {
    if (isValidQuery) analyticsApi.search(query);
  }, [isValidQuery, query]);

  const seo = useMemo(() => buildSearchSeo(query), [query]);

  const filtered = useMemo(() => {
    if (!isValidQuery) return [];
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.tags?.some((t) => t.toLowerCase().includes(query)),
    );
  }, [products, query, isValidQuery]);

  const sorted = useMemo(() => sortProducts(filtered, sort), [filtered]);

  return (
    <PageWrapper>
      <SeoHead meta={{ ...seo, noIndex: !isValidQuery }} />

      <PageTitle>
        {isValidQuery ? SEARCH_PAGE_TEXT.TITLE_RESULTS(query) : SEARCH_PAGE_TEXT.TITLE_EMPTY}
      </PageTitle>

      {!isValidQuery ? (
        <div style={{ padding: 40, textAlign: "center", color: "#777" }}>
          Введіть мінімум {MIN_QUERY_LENGTH} символи для пошуку
        </div>
      ) : (
        <SearchResultsList products={sorted} />
      )}
    </PageWrapper>
  );
}
