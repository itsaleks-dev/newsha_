import type { Order, OrderItem, DeliveryInfo, OrderStatus } from "@/entities/order/types";

import { asID, asISODate, asMoney, asQuantity, calcSubtotal } from "@/shared/types/primitives";

export function createOrderService() {
  return {
    createOrder(items: OrderItem[], delivery: DeliveryInfo, comment?: string): Promise<Order> {
      let totalNumber = 0;

      for (const item of items) {
        const subtotal = calcSubtotal(item.price, item.quantity);
        totalNumber += subtotal as number;
      }

      const total = totalNumber as Order["total"];
      const now = asISODate(new Date().toISOString());

      return Promise.resolve({
        id: asID(crypto.randomUUID()),
        userId: "guest",
        items,
        total,
        status: "pending",
        delivery,
        createdAt: now,
        updatedAt: now,
        ...(comment !== undefined ? { comment } : {}),
      });
    },

    getOrdersByUser(): Promise<readonly Order[]> {
      return Promise.resolve([]);
    },

    getAllOrders(): Promise<readonly Order[]> {
      return Promise.resolve([]);
    },

    updateStatus(id: Order["id"], status: OrderStatus): Promise<Order> {
      const now = asISODate(new Date().toISOString());

      return Promise.resolve({
        id,
        userId: "guest",
        items: [],
        total: calcSubtotal(asMoney(0), asQuantity(0)),
        status,
        delivery: {
          method: "warehouse",
          city: "",
          warehouse: "",
          firstName: "",
          lastName: "",
          phone: "",
        },
        createdAt: now,
        updatedAt: now,
      });
    },
  };
}
