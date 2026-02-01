import type { AdminFilterList } from "@/features/adminFilter/types";

export const PRODUCT_FILTERS: AdminFilterList = [
  {
    value: true,
    label: "В наявності",
    operator: "eq",
    visual: { color: "green" },
  },
  {
    value: false,
    label: "Немає в наявності",
    operator: "eq",
    visual: { color: "red" },
  },
];
