export { catalogReducer, catalogSlice, clearCurrentProduct, clearSearch } from "./catalog.slice";

export {
  selectCatalogState,
  selectCatalogItems,
  selectCatalogMeta,
  selectCatalogLoading,
  selectCatalogError,
  selectAllProducts,
  selectCurrentProduct,
  selectSearchResults,
} from "./catalog.selectors";

export {
  fetchCatalog,
  fetchAllProducts,
  fetchProductById,
  fetchProductBySlug,
  searchProducts,
} from "./catalog.thunks";

export type { CatalogState } from "./catalog.slice";
