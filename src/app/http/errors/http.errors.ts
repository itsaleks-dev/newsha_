export abstract class HttpBaseError extends Error {
  readonly kind: string;
  readonly status: number | undefined;
  readonly data: unknown | undefined;

  protected constructor(message: string, kind: string, status?: number, data?: unknown) {
    super(message);
    this.kind = kind;
    this.status = status;
    this.data = data;
  }
}

export class NetworkError extends HttpBaseError {
  constructor() {
    super("Network error", "NETWORK");
  }
}

export class TimeoutError extends HttpBaseError {
  constructor() {
    super("Request timeout", "TIMEOUT");
  }
}

export class HttpError extends HttpBaseError {
  constructor(status: number, message: string, data?: unknown) {
    super(message, "HTTP", status, data);
  }
}

export class UnauthorizedError extends HttpError {
  constructor(data?: unknown) {
    super(401, "Unauthorized", data);
  }
}

export class ForbiddenError extends HttpError {
  constructor(data?: unknown) {
    super(403, "Forbidden", data);
  }
}
