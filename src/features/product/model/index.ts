export type { ProductStatus, ProductPaginationMeta, ProductState } from "./product.state";
export { productReducer, clearSelected } from "./product.slice";

export {
  selectProductPreviews,
  selectFullProducts,
  selectProductStatus,
  selectProductSelected,
  selectIsProductsLoaded,
  makeSelectProductBySlug,
  selectNewArrivals,
} from "./product.selectors";

export type { FetchProductsResponse } from "./product.thunks";
export {
  fetchProducts,
  fetchProductById,
  searchProducts,
  createProductThunk,
  updateProductThunk,
  deleteProductThunk,
} from "./product.thunks";
