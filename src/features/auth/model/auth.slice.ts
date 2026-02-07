import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { AuthSession } from "@/features/auth/domain";
import { AUTH_STORAGE_KEY, AUTH_TEXT } from "@/features/auth/config";

import type { AuthToken, ID } from "@/shared/types/primitives";

import { restoreSession, login, register, logout } from "./auth.thunks";
import type { StoreUser } from "./auth.store.types";

export type AuthStatus = "idle" | "loading" | "succeeded" | "failed";

export interface AuthState {
  user: StoreUser | null;
  token: AuthToken | null;
  status: AuthStatus;
  error: string | null;
  sessionLoaded: boolean;
}

const initialState: AuthState = {
  user: null,
  token: null,
  status: "idle",
  error: null,
  sessionLoaded: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    setAuth(state, action: PayloadAction<AuthSession | null>) {
      if (!action.payload) {
        state.user = null;
        state.token = null;

        try {
          localStorage.removeItem(AUTH_STORAGE_KEY);
        } catch {
          // ignore storage errors
        }

        return;
      }

      const { user, token } = action.payload;

      state.user = {
        user,
        cart: [],
        wishlist: [],
      };

      state.token = token;

      try {
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(action.payload));
      } catch {
        // ignore storage errors
      }
    },

    toggleWishlist(state, action: PayloadAction<ID>) {
      if (!state.user) return;

      const id = action.payload;
      const list = state.user.wishlist;

      state.user.wishlist = list.includes(id) ? list.filter((p) => p !== id) : [...list, id];

      try {
        localStorage.setItem(
          AUTH_STORAGE_KEY,
          JSON.stringify({
            user: state.user.user,
            token: state.token,
          }),
        );
      } catch {
        // ignore storage errors
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(restoreSession.fulfilled, (state, action) => {
        if (action.payload) {
          const { user, token } = action.payload;

          state.user = {
            user,
            cart: [],
            wishlist: [],
          };

          state.token = token;
        }

        state.sessionLoaded = true;
      })

      .addCase(restoreSession.rejected, (state) => {
        state.sessionLoaded = true;
      })

      .addCase(login.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })

      .addCase(login.fulfilled, (state, action) => {
        const { user, token } = action.payload;

        state.status = "succeeded";
        state.user = {
          user,
          cart: [],
          wishlist: [],
        };
        state.token = token;
      })

      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = (action.payload as string) ?? action.error.message ?? AUTH_TEXT.LOGIN_ERROR;
      })

      .addCase(register.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })

      .addCase(register.fulfilled, (state, action) => {
        const { user, token } = action.payload;

        state.status = "succeeded";
        state.user = {
          user,
          cart: [],
          wishlist: [],
        };
        state.token = token;
      })

      .addCase(register.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          (action.payload as string) ?? action.error.message ?? AUTH_TEXT.REGISTER_ERROR;
      })

      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.status = "idle";
        state.error = null;
      });
  },
});

export const { setAuth, toggleWishlist } = authSlice.actions;
export const authReducer = authSlice.reducer;
