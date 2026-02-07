import { useState } from "react";

import type { AdminFilterList } from "@/entities/user/types";

export function useAdminFilters(initial: AdminFilterList) {
  const [filters, setFilters] = useState(initial);

  return {
    filters,
    toggle: (value: unknown) => {
      setFilters((prev) =>
        prev.map((f) => (f.value === value ? { ...f, selected: !f.selected } : f)),
      );
    },
    clear: () => setFilters(initial),
  };
}
