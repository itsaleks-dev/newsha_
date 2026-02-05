import type { RouteObject } from "react-router-dom";
import { ErrorPage } from "@/pages/ErrorPage";

export const errorRoutes: RouteObject = {
  path: "error/:code",
  element: <ErrorPage />,
};
