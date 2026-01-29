export type Currency = "UAH";

export type PageLeaveEvent = {
  type: "page_leave";
  path: string;
  duration: number;
};

export type TimeOnPageEvent = {
  type: "time_on_page";
  path: string;
  duration: number;
};

export type AnalyticsEvent =
  | { type: "page_view"; path: string }
  | { type: "search"; query: string }
  | { type: "error"; error: unknown }
  | {
      type: "view_product";
      productId: string;
      name: string;
      price: number;
      value: number;
    }
  | {
      type: "add_to_cart";
      productId: string;
      price: number;
      qty: number;
      value: number;
    }
  | {
      type: "begin_checkout";
      items: {
        productId: string;
        qty: number;
        price: number;
        value: number;
      }[];
      totalQty: number;
      totalPrice: number;
      value: number;
    }
  | {
      type: "purchase";
      orderId: string;
      total: number;
      value: number;
    }
  | PageLeaveEvent
  | TimeOnPageEvent;
