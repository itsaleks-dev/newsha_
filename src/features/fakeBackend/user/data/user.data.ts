import { USER_ROLES } from "@/entities/user/types";
import type { User } from "@/entities/user/types";

import { asID } from "@/shared/types";

export const DEFAULT_USERS: User[] = [
  {
    id: asID("user"),
    name: "User",
    email: "user@example.com",
    role: USER_ROLES.USER,
  },
  {
    id: asID("admin"),
    name: "Admin",
    email: "admin@example.com",
    role: USER_ROLES.ADMIN,
  },
];
