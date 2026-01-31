import type { User } from "@/entities/user/types";
import { USER_ROLES } from "@/entities/user/types";

import { asID } from "@/shared/types/primitives";

export const mockUsers: User[] = [
  {
    id: asID("u1"),
    name: "Demo User",
    email: "demo@newsha.com",
    role: USER_ROLES.USER,
  },
  {
    id: asID("admin"),
    name: "Admin",
    email: "admin@newsha.com",
    role: USER_ROLES.ADMIN,
  },
];
