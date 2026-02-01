import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type MegaMenuKey = "catalog" | "needs" | "condition";
export type MegaMenuState = MegaMenuKey | null;

interface MegaMenuUIState {
  active: MegaMenuState;
}

const initialState: MegaMenuUIState = {
  active: null,
};

const megaMenuSlice = createSlice({
  name: "megaMenu",
  initialState,
  reducers: {
    openMegaMenu: (state, action: PayloadAction<MegaMenuKey>) => {
      state.active = action.payload;
    },
    closeMegaMenu: (state) => {
      state.active = null;
    },
    toggleMegaMenu: (state, action: PayloadAction<MegaMenuKey>) => {
      state.active = state.active === action.payload ? null : action.payload;
    },
  },
});

export const { openMegaMenu, closeMegaMenu, toggleMegaMenu } = megaMenuSlice.actions;
export const megaMenuReducer = megaMenuSlice.reducer;
