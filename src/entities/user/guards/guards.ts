import { USER_ROLES } from "@/entities/user/types";
import type { User, CurrentUser } from "@/entities/user/types";
import type { ID } from "@/shared/types/primitives";

import { USER_GUARD_TEXT } from "./guards.text";

export function ensureLogged(
  user: CurrentUser,
  message: string = USER_GUARD_TEXT.LOGIN_REQUIRED,
): asserts user is User {
  if (user.role === USER_ROLES.GUEST) {
    throw new Error(message);
  }
}

export function ensureAdmin(user: User): void {
  if (user.role !== USER_ROLES.ADMIN) {
    throw new Error(USER_GUARD_TEXT.ADMIN_ONLY);
  }
}

export function ensureAdminOrOwner(
  user: User,
  ownerId: ID,
  message: string = USER_GUARD_TEXT.INSUFFICIENT_RIGHTS,
): void {
  if (user.role === USER_ROLES.ADMIN) return;
  if (user.id !== ownerId) {
    throw new Error(message);
  }
}
