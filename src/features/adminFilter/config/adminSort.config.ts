import type { AdminSortOption } from "@/features/adminFilter/types";

export const SORT_OPTIONS: AdminSortOption[] = [
  { value: "createdAt", label: "Новіші", direction: "desc" },
  { value: "price", label: "Ціна ↑", direction: "asc" },
];
