import { client } from "./client";

export type ViewProductPayload = {
  productId: string;
  name: string;
  price: number;
};

export type AddToCartPayload = {
  productId: string;
  price: number;
  qty: number;
};

export type CheckoutItemPayload = {
  productId: string;
  qty: number;
  price: number;
};

export type BeginCheckoutPayload = {
  items: CheckoutItemPayload[];
  totalQty: number;
  totalPrice: number;
};

export type PurchasePayload = {
  orderId: string;
  total: number;
};

export const analyticsApi = {
  pageView(path: string) {
    client().page(path);
  },

  search(query: string) {
    client().track({ type: "search", query });
  },

  viewProduct(payload: ViewProductPayload) {
    client().track({
      type: "view_product",
      productId: payload.productId,
      name: payload.name,
      price: payload.price,
      value: payload.price,
    });
  },

  addToCart(payload: AddToCartPayload) {
    const value = payload.price * payload.qty;

    client().track({
      type: "add_to_cart",
      productId: payload.productId,
      price: payload.price,
      qty: payload.qty,
      value,
    });
  },

  beginCheckout(payload: BeginCheckoutPayload) {
    client().track({
      type: "begin_checkout",
      items: payload.items.map((item) => ({
        productId: item.productId,
        price: item.price,
        qty: item.qty,
        value: item.price * item.qty,
      })),
      totalQty: payload.totalQty,
      totalPrice: payload.totalPrice,
      value: payload.totalPrice,
    });
  },

  purchase(payload: PurchasePayload) {
    client().track({
      type: "purchase",
      orderId: payload.orderId,
      total: payload.total,
      value: payload.total,
    });
  },

  pageLeave(path: string, duration: number) {
    client().track({ type: "page_leave", path, duration });
  },

  timeOnPage(path: string, duration: number) {
    client().track({ type: "time_on_page", path, duration });
  },

  error(error: unknown) {
    client().error(error);
  },
};
