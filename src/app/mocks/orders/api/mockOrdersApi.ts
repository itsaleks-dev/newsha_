import type { CartItem, CartOwnerId } from "@/entities/cart/types";
import type { UserId } from "@/entities/order/types";

import { mockCartApi } from "@/app/mocks/cart/api";

import { ordersDB } from "@/app/mocks/orders/db";
import { createOrder } from "@/app/mocks/orders/factories";
import { orderItemToCartRow } from "@/app/mocks/orders/application";

const delay = (ms = 400) => new Promise((r) => setTimeout(r, ms));
const clone = <T>(v: T): T => JSON.parse(JSON.stringify(v));

const ensure = (userId: UserId) => (ordersDB[userId] ??= []);

export const mockOrdersApi = {
  async create(userId: UserId, cart: CartItem[]) {
    await delay();
    const order = createOrder(userId, cart);
    ensure(userId).unshift(order);
    await mockCartApi.clear(userId as CartOwnerId);
    return clone(order);
  },

  async getUserOrders(userId: UserId) {
    await delay();
    return clone(ensure(userId));
  },

  async getAllOrders() {
    await delay();
    return clone(Object.values(ordersDB).flat());
  },

  async repeatOrder(userId: UserId, orderId: string) {
    await delay();

    const order = ensure(userId).find((o) => o.id === orderId);
    if (!order) throw new Error("Order not found");

    const rows = order.items.map(orderItemToCartRow);
    await mockCartApi.addMany(userId as CartOwnerId, rows);

    return mockCartApi.get(userId as CartOwnerId);
  },
};
