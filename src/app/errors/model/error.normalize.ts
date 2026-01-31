import type { AppError } from "./error.types";

import { HttpBaseError } from "@/app/http/errors";

function mapToKind(raw?: string): AppError["kind"] {
  if (!raw) return "UNKNOWN";

  const v = raw.toUpperCase();

  if (v.includes("NETWORK")) return "NETWORK";
  if (v.includes("UNAUTHORIZED")) return "UNAUTHORIZED";
  if (v.includes("FORBIDDEN")) return "FORBIDDEN";
  if (v.includes("VALIDATION")) return "VALIDATION";
  if (v.includes("HTTP")) return "HTTP";

  return "UNKNOWN";
}

function hasMessage(value: unknown): value is { message: string; name?: string; stack?: string } {
  return (
    typeof value === "object" &&
    value !== null &&
    "message" in value &&
    typeof (value as { message?: unknown }).message === "string"
  );
}

export function normalizeError(e: unknown): AppError {
  if (!e) {
    return { kind: "UNKNOWN", message: "Unknown error" };
  }

  if (e instanceof HttpBaseError) {
    return {
      kind: mapToKind(e.kind),
      message: e.message,
      source: "http",
      ...(e.status !== undefined && { status: e.status }),
      ...(e.data !== undefined && { data: e.data }),
      ...(e.stack !== undefined && { stack: e.stack }),
    };
  }

  if (hasMessage(e)) {
    return {
      kind: mapToKind(e.name),
      message: e.message,
      source: "runtime",
      ...(e.stack && { stack: e.stack }),
    };
  }

  if (e instanceof Error) {
    return {
      kind: mapToKind(e.name),
      message: e.message,
      source: "runtime",
      ...(e.stack && { stack: e.stack }),
    };
  }

  if (typeof e === "string") {
    return {
      kind: "UNKNOWN",
      message: e,
    };
  }

  return {
    kind: "UNKNOWN",
    message: JSON.stringify(e, null, 2),
  };
}
