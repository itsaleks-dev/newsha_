import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface BurgerUIState {
  open: boolean;
  expanded: string | null;
}

const initialState: BurgerUIState = {
  open: false,
  expanded: null,
};

const burgerUISlice = createSlice({
  name: "burgerUI",
  initialState,
  reducers: {
    openBurger(state) {
      state.open = true;
    },
    closeBurger(state) {
      state.open = false;
      state.expanded = null;
    },
    toggleBurger(state) {
      state.open = !state.open;
      if (!state.open) state.expanded = null;
    },
    toggleExpanded(state, action: PayloadAction<string>) {
      state.expanded = state.expanded === action.payload ? null : action.payload;
    },
  },
});

export const { openBurger, closeBurger, toggleBurger, toggleExpanded } = burgerUISlice.actions;
export const burgerUIReducer = burgerUISlice.reducer;
