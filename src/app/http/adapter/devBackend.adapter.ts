import type { User } from "@/entities/user/types";

import type { RawHttpResponse } from "@/app/http/client";

import { productsApi } from "@/features/fakeBackend/product/api";
import { categoriesApi } from "@/features/fakeBackend/category/api";
import { getUsersApi } from "@/features/fakeBackend/user/api";
import { ordersApi } from "@/features/fakeBackend/orders/api";

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isLoginBody(body: unknown): body is { email: string; password: string } {
  return isObject(body) && typeof body.email === "string" && typeof body.password === "string";
}

function isOrdersBody(body: unknown): body is { user: User } {
  return isObject(body) && "user" in body;
}

export async function devBackendAdapter(url: string, body?: unknown): Promise<RawHttpResponse> {
  if (url === "/auth/login") {
    if (!isLoginBody(body)) {
      throw new Error("Invalid login payload");
    }

    const user = await getUsersApi().loginByEmail(body.email, body.password);
    return { status: 200, data: user };
  }

  if (url === "/auth/logout") {
    await getUsersApi().logout();
    return { status: 200, data: true };
  }

  if (url === "/products") {
    return {
      status: 200,
      data: await productsApi.getProducts(),
    };
  }

  if (url === "/categories") {
    return {
      status: 200,
      data: await categoriesApi.getCategories(),
    };
  }

  if (url === "/orders") {
    if (!isOrdersBody(body)) {
      throw new Error("Invalid orders payload");
    }

    return {
      status: 200,
      data: await ordersApi.getAllOrders(body.user),
    };
  }

  throw new Error(`DEV backend route not implemented: ${url}`);
}
