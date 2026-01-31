export type AppErrorKind =
  | "NETWORK"
  | "HTTP"
  | "UNAUTHORIZED"
  | "FORBIDDEN"
  | "VALIDATION"
  | "BUSINESS"
  | "UNKNOWN";

export interface AppError {
  kind: AppErrorKind;
  message: string;
  status?: number;
  data?: unknown;
  stack?: string;
  source?: string;
}
