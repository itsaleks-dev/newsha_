import type { User } from "@/entities/user/types";

import type { AuthToken } from "@/shared/types";

export interface AuthSession {
  user: User;
  token: AuthToken;
}
