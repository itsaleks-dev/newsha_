import type { Order, OrderItem, DeliveryInfo, OrderStatus } from "@/entities/order/types";
import { ORDER_STATUS } from "@/entities/order/types";
import type { User } from "@/entities/user/types";
import { USER_ROLES } from "@/entities/user/types";
import { ensureAdmin, ensureLogged, ensureAdminOrOwner } from "@/entities/user/guards";
import { calcOrderTotal } from "@/entities/order/domain";

import { getOrders, setOrders } from "@/features/fakeBackend/orders/data";
import { generateOrderId } from "@/features/fakeBackend/orders/domain";
import { ORDERS_API_TEXT } from "@/features/fakeBackend/orders/config";

import { wait } from "@/shared/lib/async";
import { asISODate } from "@/shared/types/primitives";

export const ordersApi = {
  async createOrder(
    items: OrderItem[],
    delivery: DeliveryInfo,
    user: User,
    comment?: string,
  ): Promise<Order> {
    await wait();

    ensureLogged(user, ORDERS_API_TEXT.AUTH_REQUIRED);
    if (!items.length) {
      throw new Error(ORDERS_API_TEXT.EMPTY_CART);
    }

    const now = asISODate(new Date().toISOString());
    const total = calcOrderTotal(items);

    const order: Order = {
      id: generateOrderId(),
      userId: user.id,
      items,
      total,
      status: ORDER_STATUS.Pending,
      createdAt: now,
      updatedAt: now,
      delivery,
      ...(comment ? { comment } : {}),
    };

    setOrders([...getOrders(), order]);
    return order;
  },

  async getOrdersByUser(user: User): Promise<readonly Order[]> {
    await wait();

    const orders = getOrders();
    return user.role === USER_ROLES.ADMIN ? orders : orders.filter((o) => o.userId === user.id);
  },

  async getOrderById(id: Order["id"], user: User): Promise<Order | undefined> {
    await wait();

    const order = getOrders().find((o) => o.id === id);
    if (!order) return undefined;

    if (order.userId === "guest") {
      throw new Error(ORDERS_API_TEXT.NO_PERMISSION);
    }

    ensureAdminOrOwner(user, order.userId, ORDERS_API_TEXT.NO_PERMISSION);
    return order;
  },

  async getAllOrders(admin: User): Promise<readonly Order[]> {
    await wait();
    ensureAdmin(admin);

    return getOrders();
  },

  async updateStatus(id: Order["id"], status: OrderStatus, admin: User): Promise<Order> {
    await wait();
    ensureAdmin(admin);

    const orders = getOrders();
    const order = orders.find((o) => o.id === id);
    if (!order) {
      throw new Error(ORDERS_API_TEXT.ORDER_NOT_FOUND);
    }

    const updated: Order = {
      ...order,
      status,
      updatedAt: asISODate(new Date().toISOString()),
    };

    setOrders(orders.map((o) => (o.id === id ? updated : o)));
    return updated;
  },
};
