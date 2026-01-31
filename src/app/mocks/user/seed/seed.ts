import { USER_ROLES } from "@/entities/user/types";

import { mockUser } from "@/app/mocks/user/factories";
import { usersDB } from "@/app/mocks/user/db";

export function seedUsers() {
  usersDB.push(
    mockUser({
      name: "Admin",
      email: "admin@newsha.demo",
      role: USER_ROLES.ADMIN,
    }),
    mockUser({ name: "Olena", email: "olena@newsha.demo" }),
    mockUser({ name: "Dmytro", email: "dmytro@newsha.demo" }),
  );
}
