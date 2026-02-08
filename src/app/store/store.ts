import { configureStore } from "@reduxjs/toolkit";

import { initializeApp } from "@/app/bootstrap";
import { createServices, type AppServices } from "@/app/services/appService";
import { reduxErrorMiddleware } from "@/app/errors/middleware";
import { selectFullProducts } from "@/features/product/model";

import { rootReducer } from "./rootReducer";

export const services = createServices(() => selectFullProducts(store.getState()) ?? []);

export const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.DEV,
  middleware: (getDefault) =>
    getDefault({
      serializableCheck: false,
      thunk: {
        extraArgument: services as AppServices,
      },
    }).concat(reduxErrorMiddleware),
});
store.dispatch(initializeApp());

export type AppThunkApiConfig = {
  state: RootState;
  extra: AppServices;
  rejectValue: string;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
