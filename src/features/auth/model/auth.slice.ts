import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { AuthSession } from "@/features/auth/domain";
import { AUTH_STORAGE_KEY, AUTH_TEXT } from "@/features/auth/config";

import type { AuthToken, ID } from "@/shared/types";

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

const persistSession = (session: AuthSession | null) => {
  try {
    if (!session) {
      localStorage.removeItem(AUTH_STORAGE_KEY.AUTH_SESSION);
      return;
    }
    localStorage.setItem(AUTH_STORAGE_KEY.AUTH_SESSION, JSON.stringify(session));
  } catch {
    // ignore
  }
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    setAuth(state, action: PayloadAction<AuthSession | null>) {
      if (!action.payload) {
        state.user = null;
        state.token = null;
        persistSession(null);
        return;
      }

      const { user, token } = action.payload;

      state.user = {
        user,
        cart: [],
        wishlist: [],
      };

      state.token = token;
      persistSession(action.payload);
    },

    toggleWishlist(state, action: PayloadAction<ID>) {
      if (!state.user || !state.token) return;

      const id = action.payload;
      const list = state.user.wishlist;

      state.user.wishlist = list.includes(id) ? list.filter((p) => p !== id) : [...list, id];

      persistSession({
        user: state.user.user as AuthSession["user"],
        token: state.token,
      });
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

        persistSession(action.payload);
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

        persistSession(action.payload);
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

        persistSession(null);
      });
  },
});

export const { setAuth, toggleWishlist } = authSlice.actions;
export const authReducer = authSlice.reducer;
