import type { CartItem } from "@/entities/cart/types";
import type { Order, OrderItem, DeliveryInfo, UserId } from "@/entities/order/types";
import { ORDER_STATUS, DELIVERY_METHOD } from "@/entities/order/types";

import { mockCouponApi } from "@/app/mocks/discount/api";

import { calculateOrderPriceDomain } from "@/features/checkout/domain/calculateOrderPrice";

import { asID, asISODate } from "@/shared/types";

let counter = 1001;

function toOrderItem(item: CartItem): OrderItem {
  return {
    productId: item.id,
    volumeValue: item.variant.value,
    name: item.variant.label,
    price: item.variant.price,
    quantity: item.qty,
  };
}

function mockDelivery(): DeliveryInfo {
  return {
    method: DELIVERY_METHOD.Warehouse,
    firstName: "Demo",
    lastName: "User",
    phone: "+380000000000",
    city: "Kyiv",
    warehouse: "Warehouse 1",
  };
}

export function createOrder(userId: UserId, cart: CartItem[], couponCode?: string): Order {
  const items = cart.map(toOrderItem);

  const coupon = couponCode ? mockCouponApi.validate(couponCode) : null;

  const pricing = calculateOrderPriceDomain(cart, coupon ?? undefined);

  if (coupon) {
    mockCouponApi.markUsed(coupon.code);
  }

  const now = asISODate(new Date().toISOString());

  return {
    id: asID(`ORD-${counter++}`),
    userId,
    items,
    total: pricing.total,
    status: ORDER_STATUS.Pending,
    createdAt: now,
    updatedAt: now,
    delivery: mockDelivery(),
    ...(coupon && {
      couponCode: coupon.code,
      discount: pricing.discount,
    }),
  };
}
