import { createAuthService } from "./authService";
import { createCartService } from "./cartService";

export function createServices() {
  return {
    auth: createAuthService(),
    cart: createCartService(),
  };
}

export type AppServices = ReturnType<typeof createServices>;
