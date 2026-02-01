import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import type { Banner, BannerPlacement } from "@/features/banner/types";
import { fetchBanners } from "@/features/banner/api";

type BannersState = {
  items: Banner[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
};

const initialState: BannersState = {
  items: [],
  status: "idle",
  error: null,
};

export const loadBanners = createAsyncThunk("banners/load", async (placement?: BannerPlacement) => {
  return fetchBanners(placement);
});

const bannersSlice = createSlice({
  name: "banners",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadBanners.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadBanners.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(loadBanners.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknown error";
      });
  },
});

export const bannersReducer = bannersSlice.reducer;
