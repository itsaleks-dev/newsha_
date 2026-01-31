import { USER_ROLES, type UserRole } from "@/entities/user/types";

import { useAppSelector } from "@/app/store/hooks";

import { selectUserRole, selectIsAuthenticated, selectIsAdmin } from "@/features/auth/model";

export function usePermissions() {
  const role = useAppSelector(selectUserRole);
  const isAuth = useAppSelector(selectIsAuthenticated);
  const isAdmin = useAppSelector(selectIsAdmin);

  const isGuest = role === USER_ROLES.GUEST;
  const isUser = role === USER_ROLES.USER;

  const hasRole = (allowed: UserRole[]) => allowed.includes(role);

  return {
    role,
    isAuth,
    isGuest,
    isUser,
    isAdmin,
    hasRole,
  };
}
