import { createSlice } from "@reduxjs/toolkit";

import type { StoreProduct, StoreProductPreview } from "@/entities/product/types";

import type { PaginationMeta } from "@/shared/lib/pagination/types";

import {
  fetchCatalog,
  fetchAllProducts,
  fetchProductById,
  fetchProductBySlug,
  searchProducts,
} from "./catalog.thunks";

export type CatalogState = {
  items: StoreProductPreview[];
  all: StoreProduct[];
  current: StoreProduct | null;
  search: StoreProductPreview[];
  meta?: PaginationMeta;
  isLoading: boolean;
  error?: string;
};

const initialState: CatalogState = {
  items: [],
  all: [],
  current: null,
  search: [],
  isLoading: false,
};

export const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    clearCurrentProduct(state) {
      state.current = null;
    },
    clearSearch(state) {
      state.search = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatalog.pending, (state) => {
        state.isLoading = true;
        delete state.error;
      })
      .addCase(fetchCatalog.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload.data;
        state.meta = payload.meta;
      })
      .addCase(fetchCatalog.rejected, (state) => {
        state.isLoading = false;
        state.error = "FAILED_TO_LOAD_CATALOG";
      })

      .addCase(fetchAllProducts.pending, (state) => {
        delete state.error;
      })
      .addCase(fetchAllProducts.fulfilled, (state, { payload }) => {
        state.all = [...payload];
      })
      .addCase(fetchAllProducts.rejected, (state) => {
        state.error = "FAILED_TO_LOAD_ALL_PRODUCTS";
      })

      .addCase(fetchProductById.pending, (state) => {
        delete state.error;
      })
      .addCase(fetchProductById.fulfilled, (state, { payload }) => {
        state.current = payload ?? null;
      })
      .addCase(fetchProductById.rejected, (state) => {
        state.error = "FAILED_TO_LOAD_PRODUCT";
      })

      .addCase(fetchProductBySlug.pending, (state) => {
        delete state.error;
      })
      .addCase(fetchProductBySlug.fulfilled, (state, { payload }) => {
        state.current = payload ?? null;
      })
      .addCase(fetchProductBySlug.rejected, (state) => {
        state.error = "FAILED_TO_LOAD_PRODUCT";
      })

      .addCase(searchProducts.pending, (state) => {
        delete state.error;
        state.search = [];
      })
      .addCase(searchProducts.fulfilled, (state, { payload }) => {
        state.search = payload;
      })
      .addCase(searchProducts.rejected, (state) => {
        state.error = "FAILED_TO_SEARCH_PRODUCTS";
      });
  },
});

export const { clearCurrentProduct, clearSearch } = catalogSlice.actions;
export const catalogReducer = catalogSlice.reducer;
