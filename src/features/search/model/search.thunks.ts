import { createAsyncThunk } from "@reduxjs/toolkit";

import type { AppServices } from "@/app/services/appService";

import type { SearchParams, SearchResult } from "@/features/search/entities";

type ThunkConfig = {
  extra: AppServices;
};

export const searchProducts = createAsyncThunk<SearchResult[], SearchParams, ThunkConfig>(
  "search/searchProducts",
  async (params, { extra }) => {
    return extra.search.search(params);
  },
);
