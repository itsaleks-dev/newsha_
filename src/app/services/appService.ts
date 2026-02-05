import type { Product } from "@/entities/product/types";

import { createAuthService } from "./authService";
import { createCartService } from "./cartService";
import { createSearchService } from "./searchService";
import { createOrderService } from "./orderService";

export function createServices(getProducts?: () => Product[]) {
  return {
    auth: createAuthService(),
    cart: createCartService(),
    search: createSearchService(getProducts ?? (() => [])),
    order: createOrderService(),
  };
}

export type AppServices = ReturnType<typeof createServices>;
