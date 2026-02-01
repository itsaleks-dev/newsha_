export type { SearchState, SearchStatus } from "./search.slice";
export { searchReducer, openSearch, closeSearch, setSearchQuery } from "./search.slice";
export { searchProducts } from "./search.thunks";
export {
  selectSearchState,
  selectIsSearchOpen,
  selectSearchQuery,
  selectSearchResults,
  selectSearchStatus,
} from "./search.selectors";
