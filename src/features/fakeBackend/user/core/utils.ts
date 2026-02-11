import type { User } from "@/entities/user/types";

import { asID } from "@/shared/types";

export type StoredUser = {
  id: User["id"];
  name: string;
  email: string;
  role: User["role"];
  passwordHash: string;
};

export const clone = <T>(v: T): T => structuredClone(v);
export const hashPassword = (password: string) => `hash:${password}`;
export const toPublicUser = ({ passwordHash: _passwordHash, ...user }: StoredUser): User => user;
export const createUserId = () => asID(`u-${Date.now()}-${Math.random().toString(16).slice(2)}`);
