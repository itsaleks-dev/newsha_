import { createSlice } from "@reduxjs/toolkit";

import { ordersInitialState, ORDERS_STATUS } from "@/features/orders/config";
import { toStoreOrder } from "@/features/orders/lib";

import { createOrder, fetchMyOrders, fetchAllOrders, updateOrderStatus } from "./orders.thunks";

const ordersSlice = createSlice({
  name: "orders",
  initialState: ordersInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (s) => {
        s.status = ORDERS_STATUS.Loading;
      })
      .addCase(createOrder.fulfilled, (s, a) => {
        s.items.unshift(toStoreOrder(a.payload));
        s.status = ORDERS_STATUS.Idle;
      })
      .addCase(createOrder.rejected, (s) => {
        s.status = ORDERS_STATUS.Error;
      })

      .addCase(fetchMyOrders.pending, (s) => {
        s.status = ORDERS_STATUS.Loading;
      })
      .addCase(fetchMyOrders.fulfilled, (s, a) => {
        s.items = a.payload.map(toStoreOrder);
        s.status = ORDERS_STATUS.Idle;
      })
      .addCase(fetchMyOrders.rejected, (s) => {
        s.status = ORDERS_STATUS.Error;
      })

      .addCase(fetchAllOrders.pending, (s) => {
        s.status = ORDERS_STATUS.Loading;
      })
      .addCase(fetchAllOrders.fulfilled, (s, a) => {
        s.items = a.payload.map(toStoreOrder);
        s.status = ORDERS_STATUS.Idle;
      })
      .addCase(fetchAllOrders.rejected, (s) => {
        s.status = ORDERS_STATUS.Error;
      })

      .addCase(updateOrderStatus.fulfilled, (s, a) => {
        const updated = toStoreOrder(a.payload);
        const index = s.items.findIndex((o) => o.id === updated.id);
        if (index !== -1) s.items[index] = updated;
      });
  },
});

export const ordersReducer = ordersSlice.reducer;
