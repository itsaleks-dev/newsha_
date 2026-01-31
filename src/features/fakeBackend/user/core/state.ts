import type { CurrentUser, UserContext } from "@/entities/user/types";
import { GUEST_USER } from "@/entities/user/types";

import type { CartItem } from "@/entities/cart/types";

import type { ID } from "@/shared/types/primitives";

import type { StoredUser } from "./utils";
import { clone } from "./utils";

export type ApiState = {
  getUsers(): readonly StoredUser[];
  setUsers(next: readonly StoredUser[]): void;
  getCtx(): UserContext;
  setUser(user: CurrentUser): void;
  setCart(cart: readonly CartItem[]): void;
  setWishlist(wishlist: readonly ID[]): void;

  resetCtx(): void;
};

export function createState(initialUsers: readonly StoredUser[]): ApiState {
  let users: readonly StoredUser[] = initialUsers;

  let ctx: UserContext = {
    user: clone(GUEST_USER),
    cart: [],
    wishlist: [],
  };

  return {
    getUsers: () => users,
    setUsers: (next) => {
      users = next;
    },

    getCtx: () => ctx,

    setUser: (user) => {
      ctx = { ...ctx, user: clone(user) };
    },

    setCart: (cart) => {
      ctx = { ...ctx, cart: clone(cart) };
    },

    setWishlist: (wishlist) => {
      ctx = { ...ctx, wishlist: clone(wishlist) };
    },

    resetCtx: () => {
      ctx = {
        user: clone(GUEST_USER),
        cart: [],
        wishlist: [],
      };
    },
  };
}
