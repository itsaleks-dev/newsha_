import { createSlice } from "@reduxjs/toolkit";

import type { CartRow } from "@/entities/cart/types";

import { fetchCart, addToCart, removeFromCart, clearCart } from "./cart.thunks";

interface CartState {
  items: CartRow[];
  status: "idle" | "loading" | "error";
}

const initialState: CartState = {
  items: [],
  status: "idle",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (s) => {
        s.status = "loading";
      })
      .addCase(fetchCart.fulfilled, (s, a) => {
        s.items = [...a.payload];
        s.status = "idle";
      })
      .addCase(addToCart.fulfilled, (s, a) => {
        s.items = [...a.payload];
      })
      .addCase(removeFromCart.fulfilled, (s, a) => {
        s.items = [...a.payload];
      })
      .addCase(clearCart.fulfilled, (s, a) => {
        s.items = [...a.payload];
      });
  },
});

export const cartReducer = cartSlice.reducer;
