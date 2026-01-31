import { USER_ROLES, type User } from "@/entities/user/types";

import type { IAuthRepository, AuthSession } from "@/features/auth/domain";

import { asID, asAuthToken } from "@/shared/types/primitives";

export class RealAuthRepository implements IAuthRepository {
  async login(email: string, password: string): Promise<AuthSession> {
    void password;

    const user: User = {
      id: asID("stub-1"),
      name: "Demo User",
      email,
      role: USER_ROLES.USER,
    };

    return {
      user,
      token: asAuthToken("stub-real-token"),
    };
  }

  async register(
    name: string,
    phone: string,
    email: string,
    password: string,
  ): Promise<AuthSession> {
    void phone;
    void password;

    const user: User = {
      id: asID("stub-registered"),
      name,
      email,
      role: USER_ROLES.USER,
    };

    return {
      user,
      token: asAuthToken("stub-real-token"),
    };
  }

  async restoreSession(): Promise<AuthSession | null> {
    return null; // позже real backend
  }

  async logout(): Promise<void> {
    return; // позже real backend
  }
}
