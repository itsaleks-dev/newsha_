import { createSelector } from "@reduxjs/toolkit";

import type { Order } from "@/entities/order/types";

import type { RootState } from "@/app/store/rootReducer";

const selectOrdersState = (state: RootState) => state.orders;

export const selectOrders = createSelector([selectOrdersState], (s) => s.items);

export const selectOrdersStatus = createSelector([selectOrdersState], (s) => s.status);

export const selectOrderById = (id: Order["id"]) =>
  createSelector([selectOrders], (orders) => orders.find((o) => o.id === id));
