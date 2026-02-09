import type { RouteObject } from "react-router-dom";

import { CheckoutLayout } from "@/app/layout/CheckoutLayout";

import { CheckoutPage } from "@/pages/CheckoutPage";

export const checkoutRoutes: RouteObject = {
  element: <CheckoutLayout />,
  children: [
    {
      path: "checkout",
      element: <CheckoutPage />,
    },
  ],
};
