export type PaginationQuery = {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
};

export type PaginationMeta = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
};

export type PaginatedResponse<T> = {
  data: T[];
  meta: PaginationMeta;
};

export type PaginationItem =
  | { type: "page"; page: number; active: boolean }
  | { type: "ellipsis" }
  | { type: "prev"; disabled: boolean }
  | { type: "next"; disabled: boolean };

export type PaginationUIProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
};
