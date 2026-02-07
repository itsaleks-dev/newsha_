import { createSlice } from "@reduxjs/toolkit";

import type { Category } from "@/entities/category/types";

import type { CategoryStatus } from "@/features/category/config";

import { fetchCategories } from "./category.thunks";

interface CategoryState {
  items: Category[];
  status: CategoryStatus;
}

const initialState: CategoryState = {
  items: [],
  status: "idle",
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const categoryReducer = categorySlice.reducer;
