import { USER_ROLES } from "@/entities/user/types";

import { mockUser } from "@/app/mocks/user/factories";
import { authDB, usersDB } from "@/app/mocks/user/db";

export function seedAuthUsers() {
  if (authDB.length) return;

  const admin = mockUser({
    name: "Admin",
    email: "admin@newsha.demo",
    role: USER_ROLES.ADMIN,
  });

  const olena = mockUser({
    name: "Olena",
    email: "olena@newsha.demo",
  });

  const dmytro = mockUser({
    name: "Dmytro",
    email: "dmytro@newsha.demo",
  });

  usersDB.push(admin, olena, dmytro);

  authDB.push(
    { user: admin, password: "admin123" },
    { user: olena, password: "123456" },
    { user: dmytro, password: "123456" },
  );
}
