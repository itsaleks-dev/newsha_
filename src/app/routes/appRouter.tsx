import { useRoutes, Navigate } from "react-router-dom";

import { publicRoutes } from "./publicRoutes";
import { privateRoutes } from "./privateRoutes";
import { adminRoutes } from "./adminRoutes";
import { errorRoutes } from "./errorRoutes";
import { checkoutRoutes } from "./checkoutRoutes";

export function AppRouter() {
  return useRoutes([
    publicRoutes,
    checkoutRoutes,
    privateRoutes,
    adminRoutes,
    errorRoutes,
    { path: "*", element: <Navigate to="/error/404" replace /> },
  ]);
}
