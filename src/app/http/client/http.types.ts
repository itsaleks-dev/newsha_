export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface HttpRequest<TBody = unknown> {
  url: string;
  method?: HttpMethod;
  query?: Record<string, string | number | boolean>;
  body?: TBody;
  headers?: Record<string, string>;
  timeout?: number;
}

export interface HttpResponse<T = unknown> {
  status: number;
  data: T;
  headers?: Headers;
}
