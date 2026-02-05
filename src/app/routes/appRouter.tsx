import { useRoutes, Navigate } from "react-router-dom";

import { publicRoutes } from "./publicRoutes";
import { privateRoutes } from "./privateRoutes";
import { adminRoutes } from "./adminRoutes";
import { errorRoutes } from "./errorRoutes";

export function AppRouter() {
  return useRoutes([
    publicRoutes,
    privateRoutes,
    adminRoutes,
    errorRoutes,
    { path: "*", element: <Navigate to="/error/404" replace /> },
  ]);
}
