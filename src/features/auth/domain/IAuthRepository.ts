import type { AuthSession } from "./authSession.entity";

export interface IAuthRepository {
  login(email: string, password: string): Promise<AuthSession>;
  register(name: string, phone: string, email: string, password: string): Promise<AuthSession>;
  restoreSession(): Promise<AuthSession | null>;
  logout(): Promise<void>;
}
