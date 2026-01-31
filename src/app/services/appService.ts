import { createAuthService } from "./authService";

export function createServices() {
  return {
    auth: createAuthService(),
  };
}

export type AppServices = ReturnType<typeof createServices>;
