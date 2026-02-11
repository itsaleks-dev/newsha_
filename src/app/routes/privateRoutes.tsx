import type { RouteObject } from "react-router-dom";

import { AppLayout } from "@/app/layout/AppLayout";
import { PrivateRoute } from "@/app/routing/PrivateRoute";

import { AccountPage } from "@/pages/AccountPage";

export const privateRoutes: RouteObject = {
  element: <AppLayout />,
  children: [
    {
      element: <PrivateRoute />,
      children: [{ path: "account", element: <AccountPage /> }],
    },
  ],
};
