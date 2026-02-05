import type { User } from "@/entities/user/types";
import { USER_ROLES } from "@/entities/user/types";

import { mockCartApi } from "@/app/mocks/cart/api";
import { mockUsers } from "@/app/mocks/auth/data";
import { MOCK_AUTH_TEXT } from "@/app/mocks/auth/config";

import type { AuthSession } from "@/features/auth/domain";

import type { AuthToken } from "@/shared/types/primitives";
import { asID, asAuthToken } from "@/shared/types/primitives";

const STORAGE = "mock-auth-sessions";

const load = (): Record<string, AuthSession> => JSON.parse(localStorage.getItem(STORAGE) || "{}");

const save = (s: Record<string, AuthSession>) => localStorage.setItem(STORAGE, JSON.stringify(s));

const delay = (ms = 600) => new Promise((r) => setTimeout(r, ms));

const createToken = (u: User) => asAuthToken(`jwt-${u.id}-${Date.now()}`);

export const mockAuthSession = {
  async login(email: string, password: string): Promise<AuthSession> {
    await delay();

    if (!password || password.length < 6) {
      throw new Error(MOCK_AUTH_TEXT.PASSWORD_TOO_SHORT);
    }

    const user = mockUsers.find((u) => u.email === email);
    if (!user) throw new Error(MOCK_AUTH_TEXT.USER_NOT_FOUND);

    await mockCartApi.mergeGuestToUser("guest", user.id);

    const token = createToken(user);
    const sessions = load();

    sessions[token] = { user, token };
    save(sessions);

    return sessions[token];
  },

  async register(name: string, email: string, password: string): Promise<AuthSession> {
    await delay();

    if (!password || password.length < 6) {
      throw new Error(MOCK_AUTH_TEXT.PASSWORD_TOO_SHORT);
    }

    if (mockUsers.some((u) => u.email === email)) {
      throw new Error(MOCK_AUTH_TEXT.EMAIL_EXISTS);
    }

    const user: User = {
      id: asID(`u${Date.now()}`),
      name,
      email,
      role: USER_ROLES.USER,
    };

    mockUsers.push(user);

    await mockCartApi.mergeGuestToUser("guest", user.id);

    const token = createToken(user);
    const sessions = load();

    sessions[token] = { user, token };
    save(sessions);

    return sessions[token];
  },

  async restore(token: AuthToken): Promise<AuthSession | null> {
    await delay(300);
    return load()[token] || null;
  },

  async logout(token: AuthToken): Promise<void> {
    const sessions = load();
    delete sessions[token];
    save(sessions);
  },
};
