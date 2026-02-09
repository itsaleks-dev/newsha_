import type { RouteObject } from "react-router-dom";

import { AppLayout } from "@/app/layout";
import { AdminRoute } from "@/app/routing";

import { AdminPage } from "@/pages/AdminPage";

export const adminRoutes: RouteObject = {
  element: <AppLayout />,
  children: [
    {
      element: <AdminRoute />,
      children: [{ path: "admin", element: <AdminPage /> }],
    },
  ],
};
