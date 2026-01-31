import { FakeAuthRepository } from "@/features/auth/infrastructure";
import type { LoginDTO, RegisterDTO } from "@/features/auth/application";
import type { AuthSession } from "@/features/auth/domain";

export function createAuthService() {
  const repository = new FakeAuthRepository();

  return {
    login: (payload: LoginDTO): Promise<AuthSession> =>
      repository.login(payload.email, payload.password),

    register: (payload: RegisterDTO): Promise<AuthSession> =>
      repository.register(payload.name, payload.phone, payload.email, payload.password),

    restoreSession: (): Promise<AuthSession | null> => repository.restoreSession(),

    logout: (): Promise<void> => repository.logout(),
  };
}
