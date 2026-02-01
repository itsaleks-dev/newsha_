import { createAsyncThunk } from "@reduxjs/toolkit";

import type { AppServices } from "@/app/services/appService";

import type { AddToCartDTO, RemoveFromCartDTO } from "@/features/cart/dto";
import type { CartRow } from "@/entities/cart/types";

export const fetchCart = createAsyncThunk<readonly CartRow[], void, { extra: AppServices }>(
  "cart/fetchCart",
  async (_, { extra }) => extra.cart.fetchCart(),
);

export const addToCart = createAsyncThunk<readonly CartRow[], AddToCartDTO, { extra: AppServices }>(
  "cart/addToCart",
  async (payload, { extra }) => extra.cart.addToCart(payload),
);

export const removeFromCart = createAsyncThunk<
  readonly CartRow[],
  RemoveFromCartDTO,
  { extra: AppServices }
>("cart/removeFromCart", async (payload, { extra }) => extra.cart.removeFromCart(payload));

export const clearCart = createAsyncThunk<readonly CartRow[], void, { extra: AppServices }>(
  "cart/clearCart",
  async (_, { extra }) => extra.cart.clearCart(),
);
