import type { ID, Money, Quantity, Subtotal, ISODate } from "@/shared/types/primitives";
import type { ProductVolumeOption } from "@/entities/product/types";

export const ORDER_STATUS = {
  Pending: "pending",
  Paid: "paid",
  Shipped: "shipped",
  Completed: "completed",
  Cancelled: "cancelled",
} as const;

export type OrderStatus = (typeof ORDER_STATUS)[keyof typeof ORDER_STATUS];

export const DELIVERY_METHOD = {
  Warehouse: "warehouse",
  Postomat: "postomat",
  Courier: "courier",
} as const;

export type DeliveryMethod = (typeof DELIVERY_METHOD)[keyof typeof DELIVERY_METHOD];

type RecipientBase = {
  firstName: string;
  lastName: string;
  middleName?: string;
  phone: string;
};

export type WarehouseDelivery = RecipientBase & {
  method: typeof DELIVERY_METHOD.Warehouse;
  city: string;
  warehouse: string;
};

export type PostomatDelivery = RecipientBase & {
  method: typeof DELIVERY_METHOD.Postomat;
  city: string;
  postomat: string;
  address: string;
};

export type CourierDelivery = RecipientBase & {
  method: typeof DELIVERY_METHOD.Courier;
  city: string;
  address: string;
};

export type DeliveryInfo = WarehouseDelivery | PostomatDelivery | CourierDelivery;

export type OrderItem = {
  readonly productId: ID;
  readonly volumeValue: ProductVolumeOption["value"];
  readonly name: string;
  readonly price: Money;
  readonly quantity: Quantity;
};

export type OrderItemWithTotal = OrderItem & {
  readonly total: Subtotal;
};

export type OrderId = ID;
export type UserId = ID | "guest";

export type Order = {
  readonly id: OrderId;
  readonly userId: UserId;
  readonly items: readonly OrderItem[];
  readonly total: Subtotal;
  readonly status: OrderStatus;
  readonly createdAt: ISODate;
  readonly updatedAt: ISODate;
  readonly delivery: DeliveryInfo;
  readonly comment?: string;
};

export type StoreOrder = {
  id: Order["id"];
  userId: Order["userId"];
  items: OrderItem[];
  total: Order["total"];
  status: Order["status"];
  createdAt: Order["createdAt"];
  updatedAt: Order["updatedAt"];
  delivery: Order["delivery"];
  comment?: Order["comment"];
};

export type OrdersState = {
  items: StoreOrder[];
  status: "idle" | "loading" | "error";
};
