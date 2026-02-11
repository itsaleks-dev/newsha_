import { USER_ROLES, type User } from "@/entities/user/types";

import { asID } from "@/shared/types";

let userCounter = 1;

const createId = () => asID(`u-${userCounter++}`);
const avatarById = (id: string) => `/images/avatars/${id}.webp`;

export function mockUser(overrides: Partial<User> = {}): User {
  const id = overrides.id ?? createId();

  return {
    id,
    name: overrides.name ?? `User ${id}`,
    role: overrides.role ?? USER_ROLES.USER,
    email: overrides.email ?? `${id}@newsha.demo`,
    avatar: overrides.avatar ?? avatarById(id),
  };
}
