import { createSelector } from "@reduxjs/toolkit";

import type { RootState } from "@/app/store/store";

import { USER_ROLES } from "@/entities/user/types";

import type { ID } from "@/shared/types/primitives";

import type { StoreUser } from "./auth.store.types";

export const selectAuthState = (state: RootState) => state.auth;

export const selectAuthUser = createSelector(
  [selectAuthState],
  (auth): StoreUser | null => auth.user,
);

export const selectAuthToken = createSelector([selectAuthState], (auth) => auth.token);
export const selectAuthStatus = createSelector([selectAuthState], (auth) => auth.status);
export const selectSessionLoaded = createSelector([selectAuthState], (auth) => auth.sessionLoaded);

export const selectUser = createSelector([selectAuthUser], (storeUser) => {
  const user = storeUser?.user;
  return user && user.role !== USER_ROLES.GUEST ? user : null;
});

export const selectUserName = createSelector([selectUser], (user) => user?.name ?? null);
export const selectUserEmail = createSelector([selectUser], (user) => user?.email ?? null);

export const selectUserRole = createSelector(
  [selectUser],
  (user) => user?.role ?? USER_ROLES.GUEST,
);

export const selectIsAuthenticated = createSelector([selectAuthUser], (user) => Boolean(user));
export const selectIsAdmin = createSelector([selectUserRole], (role) => role === USER_ROLES.ADMIN);

export const selectIsGuestUser = createSelector(
  [selectUserRole],
  (role) => role === USER_ROLES.GUEST,
);

const EMPTY_WISHLIST: readonly ID[] = [];

export const selectWishlist = createSelector(
  [selectAuthUser],
  (user) => user?.wishlist ?? EMPTY_WISHLIST,
);
