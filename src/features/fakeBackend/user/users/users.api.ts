import type { User } from "@/entities/user/types";
import { USER_ROLES } from "@/entities/user/types";
import { ensureAdmin } from "@/entities/user/guards";

import { clone, createUserId, hashPassword, toPublicUser } from "@/features/fakeBackend/user/core";
import type { ApiState } from "@/features/fakeBackend/user/core";
import { USERS_API_TEXT } from "@/features/fakeBackend/user/config";

import { wait } from "@/shared/lib/async";
import { asID } from "@/shared/types";

export function createUsersApi(state: ApiState) {
  return {
    async getUsers(reqUser: User): Promise<readonly User[]> {
      await wait();
      ensureAdmin(reqUser);

      return state.getUsers().map((u) => clone(toPublicUser(u)));
    },

    async createUser(data: Omit<User, "id"> & { password: string }, reqUser: User): Promise<User> {
      await wait();
      ensureAdmin(reqUser);

      if (!data.email) {
        throw new Error(USERS_API_TEXT.EMAIL_REQUIRED);
      }

      if (state.getUsers().some((u) => u.email === data.email)) {
        throw new Error(USERS_API_TEXT.EMAIL_EXISTS);
      }

      const stored = {
        id: createUserId(),
        name: data.name,
        email: data.email,
        role: data.role,
        passwordHash: hashPassword(data.password),
      };

      state.setUsers([...state.getUsers(), stored]);
      return clone(toPublicUser(stored));
    },

    async deleteUser(id: User["id"], reqUser: User): Promise<boolean> {
      await wait();
      ensureAdmin(reqUser);

      if (id === asID("admin")) {
        throw new Error(USERS_API_TEXT.ADMIN_DELETE_FORBIDDEN);
      }

      const before = state.getUsers().length;
      state.setUsers(state.getUsers().filter((u) => u.id !== id));

      const ctx = state.getCtx();
      if (ctx.user.role !== USER_ROLES.GUEST && ctx.user.id === id) {
        state.resetCtx();
      }

      return state.getUsers().length < before;
    },
  };
}
