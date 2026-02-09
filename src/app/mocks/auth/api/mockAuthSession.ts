import type { User } from "@/entities/user/types";
import { USER_ROLES } from "@/entities/user/types";

import { authDB, usersDB } from "@/app/mocks/user/db";
import { seedAuthUsers } from "@/app/mocks/user/seed";
import { mockCartApi } from "@/app/mocks/cart/api";
import { MOCK_AUTH_TEXT } from "@/app/mocks/auth/config";

import type { AuthSession } from "@/features/auth/domain";

import type { AuthToken } from "@/shared/types/primitives";
import { asAuthToken, asID } from "@/shared/types/primitives";

const STORAGE = "mock-auth-sessions";

const delay = (ms = 600) => new Promise((r) => setTimeout(r, ms));

const load = (): Record<AuthToken, AuthSession> =>
  JSON.parse(localStorage.getItem(STORAGE) || "{}");

const save = (sessions: Record<AuthToken, AuthSession>) =>
  localStorage.setItem(STORAGE, JSON.stringify(sessions));

const createToken = (user: User) => asAuthToken(`jwt-${user.id}-${Date.now()}`);

seedAuthUsers();

export const mockAuthSession = {
  async login(email: string, password: string): Promise<AuthSession> {
    await delay();

    if (!password || password.length < 6) {
      throw new Error(MOCK_AUTH_TEXT.PASSWORD_TOO_SHORT);
    }

    const record = authDB.find((r) => r.user.email === email);
    if (!record) {
      throw new Error(MOCK_AUTH_TEXT.USER_NOT_FOUND);
    }

    if (record.password !== password) {
      throw new Error(MOCK_AUTH_TEXT.INVALID_PASSWORD);
    }

    await mockCartApi.mergeGuestToUser("guest", record.user.id);

    const token = createToken(record.user);
    const sessions = load();

    sessions[token] = { user: record.user, token };
    save(sessions);

    return sessions[token];
  },

  async register(name: string, email: string, password: string): Promise<AuthSession> {
    await delay();

    if (!password || password.length < 6) {
      throw new Error(MOCK_AUTH_TEXT.PASSWORD_TOO_SHORT);
    }

    if (usersDB.some((u) => u.email === email)) {
      throw new Error(MOCK_AUTH_TEXT.EMAIL_EXISTS);
    }

    const user: User = {
      id: asID(`u-${Date.now()}`),
      name,
      email,
      role: USER_ROLES.USER,
    };

    usersDB.push(user);
    authDB.push({ user, password });

    await mockCartApi.mergeGuestToUser("guest", user.id);

    const token = createToken(user);
    const sessions = load();

    sessions[token] = { user, token };
    save(sessions);

    return sessions[token];
  },

  async restore(token: AuthToken): Promise<AuthSession | null> {
    await delay(300);
    return load()[token] ?? null;
  },

  async logout(token: AuthToken): Promise<void> {
    const sessions = load();
    delete sessions[token];
    save(sessions);
  },
};
