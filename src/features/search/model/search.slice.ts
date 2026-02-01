import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { SearchResult } from "@/features/search/entities";

import { searchProducts } from "./search.thunks";

export type SearchStatus = "idle" | "loading" | "error";

export interface SearchState {
  isOpen: boolean;
  query: string;
  status: SearchStatus;
  results: SearchResult[];
}

const initialState: SearchState = {
  isOpen: false,
  query: "",
  status: "idle",
  results: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    openSearch(state) {
      state.isOpen = true;
    },
    closeSearch(state) {
      state.isOpen = false;
      state.query = "";
      state.results = [];
      state.status = "idle";
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.status = "idle";
        state.results = action.payload;
      })
      .addCase(searchProducts.rejected, (state) => {
        state.status = "idle";
        state.results = [];
      });
  },
});

export const { openSearch, closeSearch, setSearchQuery } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
