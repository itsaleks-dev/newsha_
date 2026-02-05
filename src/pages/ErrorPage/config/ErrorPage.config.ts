export type ErrorCode = "403" | "404" | "500";

export type ErrorAction = {
  label: string;
  to: string;
  primary?: boolean;
};

export type ErrorContent = {
  code: ErrorCode;
  title: string;
  description: string;
  actions: readonly ErrorAction[];
};
