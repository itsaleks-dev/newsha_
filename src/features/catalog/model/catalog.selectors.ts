import type { RootState } from "@/app/store/store";

export const selectCatalogState = (state: RootState) => state.catalog;
export const selectCatalogItems = (state: RootState) => selectCatalogState(state).items;
export const selectCatalogMeta = (state: RootState) => selectCatalogState(state).meta;
export const selectCatalogLoading = (state: RootState) => selectCatalogState(state).isLoading;
export const selectCatalogError = (state: RootState) => selectCatalogState(state).error;
export const selectAllProducts = (state: RootState) => selectCatalogState(state).all;
export const selectCurrentProduct = (state: RootState) => selectCatalogState(state).current;
export const selectSearchResults = (state: RootState) => selectCatalogState(state).search;
