import type { HttpRequest, RawHttpResponse } from "@/app/http/client";

export type RequestInterceptor = (req: HttpRequest) => HttpRequest;
export type ResponseInterceptor = (res: RawHttpResponse) => RawHttpResponse;

export const requestInterceptors: RequestInterceptor[] = [];
export const responseInterceptors: ResponseInterceptor[] = [];
