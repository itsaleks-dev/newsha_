import { useRoutes } from "react-router-dom";

import { Error404Page } from "@/pages/Error404Page";

import { publicRoutes } from "./publicRoutes";
import { privateRoutes } from "./privateRoutes";
import { adminRoutes } from "./adminRoutes";

export function AppRouter() {
  return useRoutes([
    publicRoutes,
    privateRoutes,
    adminRoutes,
    { path: "*", element: <Error404Page /> },
  ]);
}
