import type { RouteObject } from "react-router-dom";

import { CheckoutLayout } from "@/app/layout/CheckoutLayout";
import { CheckoutPage } from "@/pages/CheckoutPage";
import { CheckoutSuccessPage } from "@/pages/CheckoutSuccessPage";

export const checkoutRoutes: RouteObject = {
  element: <CheckoutLayout />,
  children: [
    { path: "checkout", element: <CheckoutPage /> },
    { path: "checkout/success", element: <CheckoutSuccessPage /> },
  ],
};
