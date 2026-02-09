import type { RouteObject } from "react-router-dom";

import { AppLayout } from "@/app/layout";
import { PrivateRoute } from "@/app/routing/PrivateRoute";

import { AccountPage } from "@/pages/AccountPage";
import { CartPage } from "@/pages/CartPage";
import { CheckoutPage } from "@/pages/CheckoutPage";

export const privateRoutes: RouteObject = {
  element: <AppLayout />,
  children: [
    {
      element: <PrivateRoute />,
      children: [
        { path: "account", element: <AccountPage /> },
        { path: "cart", element: <CartPage /> },
        { path: "checkout", element: <CheckoutPage /> },
      ],
    },
  ],
};
