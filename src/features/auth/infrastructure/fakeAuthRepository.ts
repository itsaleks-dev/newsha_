import { mockAuthSession } from "@/app/mocks/auth/api";

import type { IAuthRepository, AuthSession } from "@/features/auth/domain";
import { AUTH_STORAGE_KEY } from "@/features/auth/config";

import { asAuthToken } from "@/shared/types/primitives";

export class FakeAuthRepository implements IAuthRepository {
  async login(email: string, password: string): Promise<AuthSession> {
    return mockAuthSession.login(email, password);
  }

  async register(
    name: string,
    _phone: string,
    email: string,
    password: string,
  ): Promise<AuthSession> {
    return mockAuthSession.register(name, email, password);
  }

  async restoreSession(): Promise<AuthSession | null> {
    try {
      const raw = localStorage.getItem(AUTH_STORAGE_KEY);
      if (!raw) return null;

      const { token } = JSON.parse(raw);

      return mockAuthSession.restore(asAuthToken(token));
    } catch {
      // ignore
      return null;
    }
  }

  async logout(): Promise<void> {
    try {
      const raw = localStorage.getItem(AUTH_STORAGE_KEY);
      if (raw) {
        const { token } = JSON.parse(raw);
        await mockAuthSession.logout(asAuthToken(token));
      }
      localStorage.removeItem(AUTH_STORAGE_KEY);
    } catch {
      // ignore
    }
  }
}
