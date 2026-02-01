import { createSelector } from "@reduxjs/toolkit";

import type { RootState } from "@/app/store/store";

import type { Product } from "@/entities/product/types";

const selectProductState = (state: RootState) => state.product;

export const selectProductPreviews = createSelector([selectProductState], (s) => s.items);
export const selectFullProducts = createSelector([selectProductState], (s) => s.full ?? []);
export const selectProductStatus = createSelector([selectProductState], (s) => s.status);
export const selectProductSelected = createSelector([selectProductState], (s) => s.selected);
export const selectIsProductsLoaded = createSelector(
  [selectProductState],
  (product) => product.items.length > 0,
);

export const makeSelectProductBySlug = () =>
  createSelector(
    [selectFullProducts, (_: RootState, slug: string) => slug],
    (products, slug): Product | undefined => products.find((p) => p.slug === slug),
  );

export const selectNewArrivals = createSelector([selectProductPreviews], (products) =>
  products.filter((p) => p.isNew).slice(0, 4),
);

export { selectProductState };
