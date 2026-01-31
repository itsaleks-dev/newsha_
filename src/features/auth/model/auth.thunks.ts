import { createAsyncThunk } from "@reduxjs/toolkit";

import type { AppServices } from "@/app/services/appService";

import type { LoginDTO, RegisterDTO } from "@/features/auth/application";
import type { AuthSession } from "@/features/auth/domain";
import { AUTH_TEXT } from "@/features/auth/config";

type ThunkConfig = {
  rejectValue: string;
  extra: AppServices;
};

export const restoreSession = createAsyncThunk<AuthSession | null, void, ThunkConfig>(
  "auth/restoreSession",
  async (_, { extra }) => extra.auth.restoreSession(),
);

export const login = createAsyncThunk<AuthSession, LoginDTO, ThunkConfig>(
  "auth/login",
  async (payload, { rejectWithValue, extra }) => {
    try {
      return await extra.auth.login(payload);
    } catch (e) {
      return rejectWithValue(e instanceof Error ? e.message : AUTH_TEXT.LOGIN_ERROR);
    }
  },
);

export const register = createAsyncThunk<AuthSession, RegisterDTO, ThunkConfig>(
  "auth/register",
  async (payload, { rejectWithValue, extra }) => {
    try {
      return await extra.auth.register(payload);
    } catch (e) {
      return rejectWithValue(e instanceof Error ? e.message : AUTH_TEXT.REGISTER_ERROR);
    }
  },
);

export const logout = createAsyncThunk<void, void, ThunkConfig>(
  "auth/logout",
  async (_, { extra }) => extra.auth.logout(),
);
