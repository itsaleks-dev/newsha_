import type { CartItem } from "@/entities/cart/types";

import type { ID } from "@/shared/types/primitives";

export const USER_ROLES = {
  GUEST: "guest",
  USER: "user",
  ADMIN: "admin",
} as const;

export type UserRole = (typeof USER_ROLES)[keyof typeof USER_ROLES];

export type User = {
  id: ID;
  name: string;
  email?: string;
  avatar?: string;
  role: Exclude<UserRole, "guest">;
};

export type GuestUser = {
  role: typeof USER_ROLES.GUEST;
};

export type CurrentUser = User | GuestUser;

export type UserContext = {
  user: CurrentUser;
  cart: readonly CartItem[];
  wishlist: readonly ID[];
};

export const GUEST_USER: GuestUser = {
  role: USER_ROLES.GUEST,
};

export type AdminFilterValue = string | number | boolean;

export type AdminFilterOperator =
  | "eq"
  | "neq"
  | "gt"
  | "gte"
  | "lt"
  | "lte"
  | "in"
  | "not_in"
  | "exists"
  | "not_exists"
  | "contains";

export type AdminFilterVisual = {
  icon?: string;
  color?: string;
  badge?: string | number;
};

export type AdminFilterOption = {
  value: AdminFilterValue;
  label: string;

  operator?: AdminFilterOperator;
  disabled?: boolean;
  selected?: boolean;
  group?: string;

  meta?: Record<string, unknown>;
  visual?: AdminFilterVisual;
};

export type AdminFilterList = AdminFilterOption[];

export type AdminSortOption = AdminFilterOption & {
  direction?: "asc" | "desc";
};
