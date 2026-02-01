import { Navigate, Outlet } from "react-router-dom";

import type { UserRole } from "@/entities/user/types";

import { useAppSelector } from "@/app/store/hooks";

import { selectUserRole } from "@/features/auth/model";

import { ROUTES } from "@/shared/config";

interface Props {
  allow: readonly UserRole[];
}

export function RoleRoute({ allow }: Props) {
  const role = useAppSelector(selectUserRole);

  if (!allow.includes(role)) {
    return <Navigate to={ROUTES.HOME} replace />;
  }

  return <Outlet />;
}
