import type { OrdersState } from "@/entities/order/types";

export const ORDERS_STATUS = {
  Idle: "idle",
  Loading: "loading",
  Error: "error",
} as const;

export type OrdersStatus = (typeof ORDERS_STATUS)[keyof typeof ORDERS_STATUS];

export const ordersInitialState: OrdersState = {
  items: [],
  status: ORDERS_STATUS.Idle,
};
