import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { Product, ProductPreview } from "@/entities/product/types";
import type { StoreProductPreview } from "@/entities/product/types";

import type { ID } from "@/shared/types/primitives";

import { productToPreview } from "@/features/fakeBackend/product/domain";
import { toStoreProduct } from "@/features/product/adapters/toStoreProduct";
import { toStorePreview } from "@/features/product/adapters/toStorePreview";
import type { ProductState } from "@/features/product/model/product.state";
import { PRODUCTS_API_TEXT } from "@/features/product/config";

import {
  fetchProducts,
  fetchProductById,
  searchProducts,
  createProductThunk,
  updateProductThunk,
  deleteProductThunk,
  type FetchProductsResponse,
} from "./product.thunks";

const initialState: ProductState = {
  items: [],
  full: [],
  selected: null,
  pagination: {
    page: 1,
    limit: 20,
    total: 0,
    totalPages: 1,
    hasNext: false,
    hasPrev: false,
  },
  status: "idle",
  error: null,
};

export const productSlice = createSlice({
  name: "products",
  initialState,

  reducers: {
    clearSelected(state) {
      state.selected = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<FetchProductsResponse>) => {
        state.status = "succeeded";
        state.full = action.payload.full.map(toStoreProduct);
        state.items = action.payload.page.data.map(toStorePreview);
        state.pagination = action.payload.page.meta;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? PRODUCTS_API_TEXT.PRODUCTS_LOAD_ERROR;
      })

      .addCase(fetchProductById.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action: PayloadAction<Product>) => {
        state.status = "succeeded";
        state.selected = toStoreProduct(action.payload);
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? PRODUCTS_API_TEXT.PRODUCT_FETCH_ERROR;
      })

      .addCase(searchProducts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(searchProducts.fulfilled, (state, action: PayloadAction<ProductPreview[]>) => {
        state.status = "succeeded";

        const items: StoreProductPreview[] = action.payload.map(toStorePreview);

        state.items = items;
        state.pagination = {
          page: 1,
          limit: items.length,
          total: items.length,
          totalPages: 1,
          hasNext: false,
          hasPrev: false,
        };
      })
      .addCase(searchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? PRODUCTS_API_TEXT.PRODUCT_SEARCH_ERROR;
      })

      .addCase(createProductThunk.fulfilled, (state, action: PayloadAction<Product>) => {
        const product = action.payload;

        state.full.push(toStoreProduct(product));
        state.items.push(toStorePreview(productToPreview(product)));
      })

      .addCase(updateProductThunk.fulfilled, (state, action: PayloadAction<Product>) => {
        const product = action.payload;

        const storeProduct = toStoreProduct(product);
        const storePreview = toStorePreview(productToPreview(product));

        state.full = state.full.map((p) => (p.id === storeProduct.id ? storeProduct : p));
        state.items = state.items.map((p) => (p.id === storeProduct.id ? storePreview : p));

        if (state.selected?.id === storeProduct.id) {
          state.selected = storeProduct;
        }
      })

      .addCase(deleteProductThunk.fulfilled, (state, action: PayloadAction<ID>) => {
        const id = action.payload;

        state.full = state.full.filter((p) => p.id !== id);
        state.items = state.items.filter((p) => p.id !== id);

        if (state.selected?.id === id) {
          state.selected = null;
        }
      });
  },
});

export const productReducer = productSlice.reducer;
export const { clearSelected } = productSlice.actions;
