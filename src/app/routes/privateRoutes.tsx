import type { RouteObject } from "react-router-dom";

import { PrivateRoute } from "@/app/routing/PrivateRoute";

import { AccountPage } from "@/pages/AccountPage";
import { CartPage } from "@/pages/CartPage";
import { CheckoutPage } from "@/pages/CheckoutPage";

export const privateRoutes: RouteObject = {
  element: <PrivateRoute />,
  children: [
    { path: "account", element: <AccountPage /> },
    { path: "cart", element: <CartPage /> },
    { path: "checkout", element: <CheckoutPage /> },
  ],
};
