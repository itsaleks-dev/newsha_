import type { StoreProduct, StoreProductPreview } from "@/entities/product/types";

export type ProductStatus = "idle" | "loading" | "succeeded" | "failed";

export type ProductPaginationMeta = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
};

export type ProductState = {
  items: StoreProductPreview[];
  full: StoreProduct[];
  selected: StoreProduct | null;
  pagination: ProductPaginationMeta;
  status: ProductStatus;
  error: string | null;
};
