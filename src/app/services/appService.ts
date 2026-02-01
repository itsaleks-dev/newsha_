import type { Product } from "@/entities/product/types";

import { createAuthService } from "./authService";
import { createCartService } from "./cartService";
import { createSearchService } from "./searchService";

export function createServices(getProducts?: () => Product[]) {
  return {
    auth: createAuthService(),
    cart: createCartService(),
    search: createSearchService(getProducts ?? (() => [])),
  };
}

export type AppServices = ReturnType<typeof createServices>;
