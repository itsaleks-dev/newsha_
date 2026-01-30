import type { PaginationQuery, PaginatedResponse } from "@/shared/lib/pagination/types";

export function applyPagination<T>(items: T[], query?: PaginationQuery): PaginatedResponse<T> {
  const page = query?.page && query.page > 0 ? query.page : 1;
  const limit = query?.limit && query.limit > 0 ? query.limit : 12;

  const total = items.length;
  const totalPages = Math.max(1, Math.ceil(total / limit));
  const safePage = Math.min(page, totalPages);

  const start = (safePage - 1) * limit;
  const end = start + limit;

  return {
    data: items.slice(start, end),
    meta: {
      page: safePage,
      limit,
      total,
      totalPages,
      hasNext: safePage < totalPages,
      hasPrev: safePage > 1,
    },
  };
}
