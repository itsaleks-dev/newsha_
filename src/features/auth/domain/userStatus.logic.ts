import { USER_ROLES } from "@/entities/user/types";

type UserRole = (typeof USER_ROLES)[keyof typeof USER_ROLES];

export function getUserStatusLabel(isAuth: boolean, role: UserRole | null) {
  if (!isAuth) return "Увійти";
  if (role === USER_ROLES.ADMIN) return "Admin";
  return "Мій кабінет";
}

export function getUserDashboardPath(role: UserRole | null) {
  return role === USER_ROLES.ADMIN ? "/admin" : "/account";
}
