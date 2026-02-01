import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Category } from "@/entities/category/types";

import type { AppThunkApiConfig } from "@/app/store/store";

import { categoriesApi } from "@/features/fakeBackend/category/api";

export const fetchCategories = createAsyncThunk<Category[], void, AppThunkApiConfig>(
  "categories/fetch",
  async (_, { getState }) => {
    const state = getState();
    if (state.category.status === "succeeded") {
      return state.category.items;
    }
    return categoriesApi.getCategories();
  },
);
