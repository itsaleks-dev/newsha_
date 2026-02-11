import { createAsyncThunk } from "@reduxjs/toolkit";

import type { Product, ProductPreview } from "@/entities/product/types";

import { DEFAULT_USERS } from "@/features/fakeBackend/user/data";
import { productsApi } from "@/features/fakeBackend/product/api";
import { PRODUCTS_API_TEXT } from "@/features/product/config";

import type { PaginationQuery, PaginatedResponse } from "@/shared/lib/pagination/types";
import type { ID } from "@/shared/types";

const ADMIN = DEFAULT_USERS.find((u) => u.id === "admin")!;

export type FetchProductsResponse = {
  full: readonly Product[];
  page: PaginatedResponse<ProductPreview>;
};

export const fetchProducts = createAsyncThunk<
  FetchProductsResponse,
  { pagination?: PaginationQuery } | undefined
>("products/fetchList", async (args) => {
  const pagination = args?.pagination;

  const [full, page] = await Promise.all([
    productsApi.getAllProducts(),
    productsApi.getProducts(pagination),
  ]);

  return { full, page };
});

export const fetchProductById = createAsyncThunk<Product, ID>("products/fetchById", async (id) => {
  const product = await productsApi.getProductById(id);
  if (!product) throw new Error(PRODUCTS_API_TEXT.PRODUCT_NOT_FOUND);
  return product;
});

export const searchProducts = createAsyncThunk<ProductPreview[], { query: string; limit?: number }>(
  "products/search",
  ({ query, limit }) => productsApi.searchProducts(query, limit),
);

export const createProductThunk = createAsyncThunk<Product, Omit<Product, "id">>(
  "products/create",
  (data) => productsApi.createProduct(data, ADMIN),
);

export const updateProductThunk = createAsyncThunk<
  Product,
  { id: ID; patch: Partial<Omit<Product, "id">> }
>("products/update", ({ id, patch }) => productsApi.updateProduct(id, patch, ADMIN));

export const deleteProductThunk = createAsyncThunk<ID, ID>("products/delete", async (id) => {
  const ok = await productsApi.deleteProduct(id, ADMIN);
  if (!ok) throw new Error(PRODUCTS_API_TEXT.PRODUCT_NOT_FOUND);
  return id;
});
