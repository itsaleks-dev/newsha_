import { createSlice } from "@reduxjs/toolkit";

import { initializeApp } from "@/app/bootstrap";

export type AppStatus = "idle" | "booting" | "ready" | "error";

interface AppState {
  status: AppStatus;
}

const initialState: AppState = {
  status: "idle",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(initializeApp.pending, (state) => {
        if (state.status === "idle") state.status = "booting";
      })
      .addCase(initializeApp.fulfilled, (state) => {
        state.status = "ready";
      })
      .addCase(initializeApp.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const appReducer = appSlice.reducer;
