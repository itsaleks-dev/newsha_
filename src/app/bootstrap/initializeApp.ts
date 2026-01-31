import { createAsyncThunk } from "@reduxjs/toolkit";

import { saveUTMFromUrl } from "@/app/analytics/lib";
import type { AppThunkApiConfig as AppThunkApi } from "@/app/store/store";

import { restoreSession } from "@/features/auth/model";

export const initializeApp = createAsyncThunk<void, void, AppThunkApi>(
  "app/initialize",
  async (_, { dispatch }) => {
    saveUTMFromUrl();
    await dispatch(restoreSession()).unwrap();
  },
);
