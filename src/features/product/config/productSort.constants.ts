export const PRODUCT_SORTS = {
  PRICE_ASC: "price_asc",
  PRICE_DESC: "price_desc",
  POPULAR: "popular",
  NEW: "new",
} as const;

export type ProductSort = (typeof PRODUCT_SORTS)[keyof typeof PRODUCT_SORTS];
