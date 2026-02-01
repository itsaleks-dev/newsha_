import { combineReducers } from "@reduxjs/toolkit";

import { authUIReducer } from "@/features/auth/model/authUI.slice";
import { authReducer } from "@/features/auth/model/auth.slice";
import { appReducer } from "../model/app.slice";
import { categoryReducer } from "@/features/category/model/category.slice";
import { catalogReducer } from "@/features/catalog/model/catalog.slice";

export const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  authUI: authUIReducer,
  category: categoryReducer,
  catalog: catalogReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
