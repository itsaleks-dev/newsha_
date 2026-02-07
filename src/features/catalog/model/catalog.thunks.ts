import { createAsyncThunk } from "@reduxjs/toolkit";

import type { AppThunkApiConfig } from "@/app/store/store";

import type {
  Product,
  ProductPreview,
  StoreProduct,
  StoreProductPreview,
} from "@/entities/product/types";

import { productsApi } from "@/features/fakeBackend/product/api";

import type { PaginationQuery, PaginatedResponse } from "@/shared/lib/pagination/types";
import type { ID, Slug } from "@/shared/types/primitives";

function previewToStore(p: ProductPreview): StoreProductPreview {
  const { volumes, tags, needs, condition, ...rest } = p;

  return {
    ...rest,

    ...(volumes && { volumes: [...volumes] }),
    ...(tags && { tags: [...tags] }),
    ...(needs && { needs: [...needs] }),
    ...(condition && { condition: [...condition] }),
  };
}

function productToStore(p: Product): StoreProduct {
  const { gallery, volumes, tags, needs, condition, seo, ...rest } = p;

  return {
    ...rest,

    gallery: [...gallery],

    ...(volumes && { volumes: [...volumes] }),
    ...(tags && { tags: [...tags] }),
    ...(needs && { needs: [...needs] }),
    ...(condition && { condition: [...condition] }),

    ...(seo && {
      seo: {
        ...(seo.title && { title: seo.title }),
        ...(seo.description && { description: seo.description }),
        ...(seo.ogImage && { ogImage: seo.ogImage }),
        ...(seo.keywords && { keywords: [...seo.keywords] }),
      },
    }),
  };
}

export const fetchCatalog = createAsyncThunk<
  PaginatedResponse<StoreProductPreview>,
  PaginationQuery | undefined,
  AppThunkApiConfig
>("catalog/fetchCatalog", async (pagination, { rejectWithValue }) => {
  try {
    const res = await productsApi.getProducts(pagination);

    return {
      data: res.data.map(previewToStore),
      meta: res.meta,
    };
  } catch (error) {
    console.error(error);
    return rejectWithValue("FAILED_TO_LOAD_PRODUCTS");
  }
});

export const fetchAllProducts = createAsyncThunk<StoreProduct[], void, AppThunkApiConfig>(
  "catalog/fetchAllProducts",
  async (_, { rejectWithValue }) => {
    try {
      const products = await productsApi.getAllProducts();
      return products.map(productToStore);
    } catch {
      return rejectWithValue("FAILED_TO_LOAD_ALL_PRODUCTS");
    }
  },
);

export const fetchProductById = createAsyncThunk<StoreProduct | undefined, ID, AppThunkApiConfig>(
  "catalog/fetchProductById",
  async (id, { rejectWithValue }) => {
    try {
      const product = await productsApi.getProductById(id);
      return product ? productToStore(product) : undefined;
    } catch {
      return rejectWithValue("FAILED_TO_LOAD_PRODUCT");
    }
  },
);

export const fetchProductBySlug = createAsyncThunk<
  StoreProduct | undefined,
  Slug,
  AppThunkApiConfig
>("catalog/fetchProductBySlug", async (slug, { rejectWithValue }) => {
  try {
    const product = await productsApi.getProductBySlug(slug);
    return product ? productToStore(product) : undefined;
  } catch {
    return rejectWithValue("FAILED_TO_LOAD_PRODUCT");
  }
});

export const searchProducts = createAsyncThunk<
  StoreProductPreview[],
  { query: string; limit?: number },
  AppThunkApiConfig
>("catalog/searchProducts", async ({ query, limit }, { rejectWithValue }) => {
  try {
    const result = await productsApi.searchProducts(query, limit);
    return result.map(previewToStore);
  } catch {
    return rejectWithValue("FAILED_TO_SEARCH_PRODUCTS");
  }
});
