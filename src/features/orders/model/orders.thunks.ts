import { createAsyncThunk } from "@reduxjs/toolkit";

import type { AppServices } from "@/app/services/appService";

import type { Order, OrderItem, DeliveryInfo, OrderStatus } from "@/entities/order/types";

export const createOrder = createAsyncThunk<
  Order,
  {
    items: OrderItem[];
    delivery: DeliveryInfo;
    comment?: string;
  },
  { extra: AppServices }
>("orders/createOrder", async ({ items, delivery, comment }, { extra }) =>
  extra.order.createOrder(items, delivery, comment),
);

export const fetchMyOrders = createAsyncThunk<readonly Order[], void, { extra: AppServices }>(
  "orders/fetchMyOrders",
  async (_, { extra }) => extra.order.getOrdersByUser(),
);

export const fetchAllOrders = createAsyncThunk<readonly Order[], void, { extra: AppServices }>(
  "orders/fetchAllOrders",
  async (_, { extra }) => extra.order.getAllOrders(),
);

export const updateOrderStatus = createAsyncThunk<
  Order,
  { id: Order["id"]; status: OrderStatus },
  { extra: AppServices }
>("orders/updateStatus", async ({ id, status }, { extra }) => extra.order.updateStatus(id, status));
