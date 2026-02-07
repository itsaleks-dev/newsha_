import type { AdminSortOption } from "@/entities/user/types";

export const SORT_OPTIONS: AdminSortOption[] = [
  { value: "createdAt", label: "Новіші", direction: "desc" },
  { value: "price", label: "Ціна ↑", direction: "asc" },
];
