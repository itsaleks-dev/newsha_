import { Navigate } from "react-router-dom";

export function StaticPage() {
  return <Navigate to="/error/404" replace />;
}
