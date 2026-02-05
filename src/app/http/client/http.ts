import { logger } from "@/app/errors/lib";
import { normalizeError } from "@/app/errors/model";
import { devBackendAdapter } from "@/app/http/adapter";
import { requestInterceptors, responseInterceptors } from "@/app/http/interceptors";
import { HttpError, NetworkError, TimeoutError } from "@/app/http/errors";

import type { HttpRequest, HttpResponse } from "./http.types";
import type { RawHttpResponse } from "./http.raw";

export async function http<T = unknown>(config: HttpRequest): Promise<HttpResponse<T>> {
  let request = { ...config };

  try {
    requestInterceptors.forEach((i) => {
      request = i(request);
    });

    if (!navigator.onLine) throw new NetworkError();

    if (import.meta.env.DEV) {
      let raw = await devBackendAdapter(request.url, request.body);
      responseInterceptors.forEach((i) => (raw = i(raw)));

      return {
        status: raw.status,
        data: raw.data as T,
        ...(raw.headers && { headers: raw.headers }),
      };
    }

    const controller = new AbortController();
    const timeout = request.timeout ?? 15_000;
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    const body = request.body !== undefined ? JSON.stringify(request.body) : null;

    const res = await fetch(request.url, {
      method: request.method ?? "GET",
      headers: {
        "Content-Type": "application/json",
        ...request.headers,
      },
      body,
      signal: controller.signal,
    }).catch((e) => {
      if (e.name === "AbortError") throw new TimeoutError();
      throw new NetworkError();
    });

    clearTimeout(timeoutId);

    if (!res.ok) throw new HttpError(res.status, res.statusText);

    let raw: RawHttpResponse = {
      status: res.status,
      data: await res.json(),
      headers: res.headers,
    };

    responseInterceptors.forEach((i) => (raw = i(raw)));

    return {
      status: raw.status,
      data: raw.data as T,
      ...(raw.headers && { headers: raw.headers }),
    };
  } catch (e) {
    const err = normalizeError(e);
    logger.report(err);
    throw err;
  }
}
