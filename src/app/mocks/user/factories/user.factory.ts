import { USER_ROLES, type User } from "@/entities/user/types";

import { asID } from "@/shared/types/primitives";

let userCounter = 1;

const createId = () => asID(`u-${userCounter++}`);
const avatar = (id: string) => `/images/avatars/${id}.webp`;

export function mockUser(overrides: Partial<User> = {}): User {
  const id = overrides.id ?? createId();
  const name = overrides.name ?? `User ${id}`;

  return {
    id,
    name,
    role: overrides.role ?? USER_ROLES.USER,

    ...(overrides.email !== undefined
      ? { email: overrides.email }
      : { email: `${id}@newsha.demo` }),

    ...(overrides.avatar !== undefined ? { avatar: overrides.avatar } : { avatar: avatar(id) }),
  };
}
