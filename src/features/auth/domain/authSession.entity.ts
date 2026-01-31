import type { User } from "@/entities/user/types";
import type { AuthToken } from "@/shared/types/primitives";

export interface AuthSession {
  user: User;
  token: AuthToken;
}
