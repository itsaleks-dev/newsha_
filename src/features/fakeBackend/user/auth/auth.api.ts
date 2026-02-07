import type { User, CurrentUser, UserContext } from "@/entities/user/types";
import { USER_ROLES } from "@/entities/user/types";

import type { ApiState } from "@/features/fakeBackend/user/core";
import { clone, createUserId, hashPassword, toPublicUser } from "@/features/fakeBackend/user/core";
import { USERS_API_TEXT } from "@/features/fakeBackend/user/config";

import { wait } from "@/shared/lib/async";

export function createAuthApi(state: ApiState) {
  return {
    async publicRegister(name: string, email: string, password: string): Promise<User> {
      await wait();

      if (!email) {
        throw new Error(USERS_API_TEXT.EMAIL_REQUIRED);
      }

      if (state.getUsers().some((u) => u.email === email)) {
        throw new Error(USERS_API_TEXT.EMAIL_EXISTS);
      }

      const stored = {
        id: createUserId(),
        name,
        email,
        role: USER_ROLES.USER,
        passwordHash: hashPassword(password),
      };

      state.setUsers([...state.getUsers(), stored]);
      state.setUser(toPublicUser(stored));

      return clone(toPublicUser(stored));
    },

    async loginByEmail(email: string, password: string): Promise<User> {
      await wait();

      const user = state.getUsers().find((u) => u.email === email);
      if (!user) {
        throw new Error(USERS_API_TEXT.USER_NOT_FOUND);
      }

      if (user.passwordHash !== hashPassword(password)) {
        throw new Error(USERS_API_TEXT.INVALID_PASSWORD);
      }

      state.setUser(toPublicUser(user));
      return clone(toPublicUser(user));
    },

    async loginById(id: User["id"]): Promise<User> {
      await wait();

      const user = state.getUsers().find((u) => u.id === id);
      if (!user) {
        throw new Error(USERS_API_TEXT.USER_NOT_FOUND);
      }

      state.setUser(toPublicUser(user));
      return clone(toPublicUser(user));
    },

    async logout(): Promise<boolean> {
      await wait();
      state.resetCtx();
      return true;
    },

    async getCurrentUser(): Promise<CurrentUser> {
      await wait();
      return clone(state.getCtx().user);
    },

    async getUserContext(): Promise<UserContext> {
      await wait();
      return clone(state.getCtx());
    },
  };
}
