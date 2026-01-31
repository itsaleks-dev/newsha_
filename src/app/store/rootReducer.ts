import { combineReducers } from "@reduxjs/toolkit";

import { authUIReducer } from "@/features/auth/model/authUI.slice";
import { authReducer } from "@/features/auth/model/auth.slice";

export const rootReducer = combineReducers({
  auth: authReducer,
  authUI: authUIReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
