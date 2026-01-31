import type { User } from "@/entities/user/types";

import { DEFAULT_USERS } from "@/features/fakeBackend/user/data";

import { createState, hashPassword } from "@/features/fakeBackend/user/core";
import { createAuthApi } from "@/features/fakeBackend/user/auth/";
import { createUsersApi } from "@/features/fakeBackend/user/users/";
import { createCartApi } from "@/features/fakeBackend/user/cart/";
import { createWishlistApi } from "@/features/fakeBackend/user/wishlist/";

const normalizeSeedUser = (u: User) => {
  if (!u.email) {
    throw new Error("Seed user must have email");
  }

  return {
    id: u.id,
    name: u.name,
    email: u.email,
    role: u.role,
    passwordHash: hashPassword("password"),
  };
};

export function createApi(seed: readonly User[] = DEFAULT_USERS) {
  const state = createState(seed.map(normalizeSeedUser));

  return {
    __reset(nextSeed: readonly User[] = DEFAULT_USERS) {
      state.setUsers(nextSeed.map(normalizeSeedUser));
      state.resetCtx();
    },

    ...createAuthApi(state),
    ...createUsersApi(state),
    ...createCartApi(state),
    ...createWishlistApi(state),
  };
}

let usersApi = createApi(DEFAULT_USERS);

export const getUsersApi = () => usersApi;
export const __resetUsers = (seed?: readonly User[]) => {
  usersApi = createApi(seed);
};
export const createUsersApiForTests = createApi;
