import type { RootState } from "@/app/store/rootReducer";

export const selectSearchState = (state: RootState) => state.search;

export const selectIsSearchOpen = (state: RootState) => state.search.isOpen;
export const selectSearchQuery = (state: RootState) => state.search.query;

export const selectSearchResults = (state: RootState) => state.search.results;
export const selectSearchStatus = (state: RootState) => state.search.status;
