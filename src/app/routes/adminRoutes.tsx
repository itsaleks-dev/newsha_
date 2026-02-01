import type { RouteObject } from "react-router-dom";

import { AdminRoute } from "@/app/routing";

import { AdminPage } from "@/pages/AdminPage";

export const adminRoutes: RouteObject = {
  element: <AdminRoute />,
  children: [{ path: "admin", element: <AdminPage /> }],
};
