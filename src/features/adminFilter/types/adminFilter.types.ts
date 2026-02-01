export type AdminFilterValue = string | number | boolean;

export type AdminFilterOperator =
  | "eq"
  | "neq"
  | "gt"
  | "gte"
  | "lt"
  | "lte"
  | "in"
  | "not_in"
  | "exists"
  | "not_exists"
  | "contains";

export type AdminFilterVisual = {
  icon?: string;
  color?: string;
  badge?: string | number;
};

export type AdminFilterOption = {
  value: AdminFilterValue;
  label: string;

  operator?: AdminFilterOperator;
  disabled?: boolean;
  selected?: boolean;
  group?: string;

  meta?: Record<string, unknown>;
  visual?: AdminFilterVisual;
};

export type AdminFilterList = AdminFilterOption[];

export type AdminSortOption = AdminFilterOption & {
  direction?: "asc" | "desc";
};
