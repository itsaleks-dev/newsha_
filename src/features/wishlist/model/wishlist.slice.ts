import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { ID } from "@/shared/types";

export interface WishlistState {
  items: readonly ID[];
}

const initialState: WishlistState = {
  items: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleWishlist(state, action: PayloadAction<ID>) {
      const id = action.payload;

      if (state.items.includes(id)) {
        state.items = state.items.filter((item) => item !== id);
      } else {
        state.items = [...state.items, id];
      }
    },

    clearWishlist(state) {
      state.items = [];
    },
  },
});

export const { toggleWishlist, clearWishlist } = wishlistSlice.actions;
export const wishlistReducer = wishlistSlice.reducer;
